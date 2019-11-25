import * as mongoose from "mongoose";

const imageStorageSchema = new mongoose.Schema({
  httpUrl: {
    type: String,
    required: true
  },
  httpsUrl: String,
  fileType: String,
  fileName: String,
  fileSize: String,
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const imageStorage = mongoose.model<mongoose.Document>(
  "ImageStorage",
  imageStorageSchema
);

module.exports = imageStorage;
