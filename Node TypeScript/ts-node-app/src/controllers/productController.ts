import prisma from "../prisma";
import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, category } = req.body;
    const newProduct = await prisma.product.create({
      data: {
        name,
        price,
        category,
      },
    });
    if (newProduct) {
      res.status(200).json({
        success: true,
        data: newProduct,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    if (products) {
      res.status(200).json({
        success: true,
        data: products,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });
    if (product) {
      res.status(200).json({
        success: true,
        data: product,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: { name, price, category },
    });
    if (updatedProduct) {
      res.status(200).json({ success: true, data: updatedProduct });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error,
    });
  }
};
