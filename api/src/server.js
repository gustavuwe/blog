import express from "express";

import cors from "cors"; // necessary

import mongoose from "mongoose";

import bcrypt from "bcrypt";

import "dotenv/config";

import { UserModel } from "./models/User.js";

import { PostModel } from "./models/Post.js";

import jwt from "jsonwebtoken";

import cookieParser from "cookie-parser";

import multer from "multer";

import fs from "fs";

import * as url from "url";

import path from "path";

import { fileURLToPath } from "url";

import { dirname } from "path";

import appRootDir from "app-root-dir";

import { initializeApp } from "firebase/app";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "./config/firebase.config.js";

const app = express();

const salt = bcrypt.genSaltSync(10);

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const secret = "as81gj2we12uyzxv683nmzxcn98hsd";

// initializeApp(config.firebaseConfig)

const storage = getStorage();

// const uploadMiddleware = multer({ dest: 'api/src/uploads/'}) // backup multer

const uploadMiddleware = multer({ storage: multer.memoryStorage() });

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());

app.use(cookieParser());

console.log(__dirname);

// app.use('/src', express.static(__dirname + '/uploads'));

mongoose.connect(
  "mongodb+srv://blog:SZP8OrXHRFLHsXb7@blog-cluster.mwdaqsy.mongodb.net/?retryWrites=true&w=majority&appName=blog-cluster"
);

app.post("/registrar", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userDoc = await UserModel.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
    // res.json()
  } else {
    res.status(400).json("wrong credentials"); // alterar depois
  }
});

app.get("/perfil", (req, res) => {
  console.log("chegou aqui")
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  await signInWithEmailAndPassword(
    auth,
    "gustavuwe.123@gmail.com",
    "firebase_upload123"
  );
  // uploading to firebase

  const { originalname, path } = req.file; // get the name and path of img

  // const parts = originalname.split('.') // get an array of the name of the img

  // const ext = parts[parts.length - 1]; // get the last part of array (all after the . so img.png will get png)

  // const newPath = path + '.' + ext // get the full path + extension to after re-write on img

  // fs.renameSync(path, newPath) // finally rename the image

  const { token } = req.cookies;

  // const reference = storage.ref(`files/${originalname}`)

  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;

    try {
      const storageRef = ref(storage, `files/${req.file.originalname}`);

      console.log(storageRef);

      const metadata = {
        contentType: req.file.mimetype,
      };

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );

      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log("File sucessfully uploaded.");

      const { title, summary, content } = req.body;

      const postDoc = await PostModel.create({
        title,
        summary,
        content,
        cover: downloadURL,
        author: info.id,
      });

      // res.json(postDoc)

      // return res.send({
      //         message: 'file uploaded to firebase storage',
      //         name: req.file.originalname,
      //         type: req.file.mimetype,
      //         downloadURL: downloadURL
      //     })
      return res.status(200).send();
    } catch (err) {
      console.log(err);
      return res.status(400).send(err.message);
    }
  });
});

app.put("/post", uploadMiddleware.single('file'), async (req,res) => {
  if (req.file) {
    await signInWithEmailAndPassword(
      auth,
      "gustavuwe.123@gmail.com",
      "firebase_upload123"
    );
    // uploading to firebase
  
    const { originalname, path } = req.file; // get the name and path of img
  
    // const parts = originalname.split('.') // get an array of the name of the img
  
    // const ext = parts[parts.length - 1]; // get the last part of array (all after the . so img.png will get png)
  
    // const newPath = path + '.' + ext // get the full path + extension to after re-write on img
  
    // fs.renameSync(path, newPath) // finally rename the image
  
    const { token } = req.cookies;
  
    // const reference = storage.ref(`files/${originalname}`)
  
    jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;

      const { title, summary, content, id } = req.body;
  
      try {
        const storageRef = ref(storage, `files/${req.file.originalname}`);
  
        console.log(storageRef);
  
        const metadata = {
          contentType: req.file.mimetype,
        };
  
        const snapshot = await uploadBytesResumable(
          storageRef,
          req.file.buffer,
          metadata
        );
  
        const downloadURL = await getDownloadURL(snapshot.ref);
  
        console.log("File sucessfully uploaded.");
  
        const postDoc = await PostModel.findById(id)

        const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
        
        if (!isAuthor) {
          return res.status(400).json('você não é o autor') // editar depois
        }

        console.log(postDoc)
  
        await postDoc.updateOne({
          title,
          summary,
          content,
          cover: downloadURL,
        });
  
        // res.json(postDoc)
  
        // return res.send({
        //         message: 'file uploaded to firebase storage',
        //         name: req.file.originalname,
        //         type: req.file.mimetype,
        //         downloadURL: downloadURL
        //     })
        return res.status(200).send();
      } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
      }
    });
  }
})

app.get("/post", async (req, res) => {
  console.log(PostModel.find());
  res.json(
    await PostModel.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await PostModel.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

app.delete("/post/:id", async (req, res) => {
  console.log("passou no delete")
  const { id } = req.body;
  try {
    await PostModel.deleteOne( { _id: id } )
    return res.status(200).send()
  } catch (err) {
    console.log(err)
    return res.status(400).send(err.message)
  }
})

app.listen(4000, () => {
  console.log("Server is Running!");
});

// connection string: mongodb+srv://blog:SZP8OrXHRFLHsXb7@blog-cluster.mwdaqsy.mongodb.net/?retryWrites=true&w=majority&appName=blog-cluster
// local ip - 45.228.102.68
// blog
// SZP8OrXHRFLHsXb7
