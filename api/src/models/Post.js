import mongoose from "mongoose"
const { Schema, model } = mongoose;

const PostSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: {type: Schema.Types.ObjectId, ref:'User'},
}, {
    timestamps: true // allow know when it was created, and informations about time etc.
})

export const PostModel = model('Post', PostSchema);
