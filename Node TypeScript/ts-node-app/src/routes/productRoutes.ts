import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/productController";

const router = Router();

router.post("/addProduct", createProduct);
router.get("/products", getAllProducts);
router.get("/product/:id", getProductById);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
