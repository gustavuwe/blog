// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import * as dotenv from 'dotenv';

// dotenv.config()
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// --------------------------------------------

// import * as dotenv from 'dotenv';

// dotenv.config()
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export default {
//     firebaseConfig: {
//         apiKey: process.env.FIREBASE_API_KEY,
//         authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//         projectId: process.env.FIREBASE_PROJECT_ID,
//         storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//         messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//         appId: process.env.FIREBASE_APP_ID,
//         measurementId: process.env.FIREBASE_MEASUREMENT_ID
//     },
// };
// -------------------------------------------
// import * as dotenv from 'dotenv';

// dotenv.config()
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// export default {
//     firebaseConfig: {
//         apiKey: "AIzaSyDBnEAV3dELhGAlLFKTlGzQeR1jKQ0NmOw",
//         authDomain: "blog-nodejs-2c453.firebaseapp.com",
//         projectId: "blog-nodejs-2c453",
//         storageBucket: "blog-nodejs-2c453.appspot.com",
//         messagingSenderId: "1067341651780",
//         appId: "1:1067341651780:web:faef344cf1c0a799030111",
//         measurementId: "G-K7Q4QZ1YH6",
//         // FIREBASE_USER: "gustavuwe.123@gmail.com",
//         // FIREBASE_AUTH: "firebase_upload123"
//     },
// };



import * as dotenv from 'dotenv';
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDBnEAV3dELhGAlLFKTlGzQeR1jKQ0NmOw",
    authDomain: "blog-nodejs-2c453.firebaseapp.com",
    projectId: "blog-nodejs-2c453",
    storageBucket: "blog-nodejs-2c453.appspot.com",
    messagingSenderId: "1067341651780",
    appId: "1:1067341651780:web:faef344cf1c0a799030111",
    measurementId: "G-K7Q4QZ1YH6",
    // FIREBASE_USER: "gustavuwe.123@gmail.com",
    // FIREBASE_AUTH: "firebase_upload123"
    }

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)




// ------------------------------------------------

/* 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBnEAV3dELhGAlLFKTlGzQeR1jKQ0NmOw",
  authDomain: "blog-nodejs-2c453.firebaseapp.com",
  projectId: "blog-nodejs-2c453",
  storageBucket: "blog-nodejs-2c453.appspot.com",
  messagingSenderId: "1067341651780",
  appId: "1:1067341651780:web:faef344cf1c0a799030111",
  measurementId: "G-K7Q4QZ1YH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/