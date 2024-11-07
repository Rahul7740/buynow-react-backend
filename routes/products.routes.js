import express from "express";
import multer from "multer";
import {
  createProducts,
  getProducts,
} from "../controllers/products.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/uploads");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname;
    req.body.img = "/uploads/"+uniqueSuffix;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
router.post("/create",upload.single("img"), createProducts);
router.get("/get", getProducts);
router.delete("/delete/:id")

export default router;

// create api :  http://localhost:5000/api/products/create
//
//
//
// get api : http://localhost:5000/api/products/get
//
//
//
//
//
//
