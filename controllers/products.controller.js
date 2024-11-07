import db from "../db/index.js";

export const createProducts = async (req, res) => {
  try {
    const { name, price, img, ratting, instock } = req.body;
    // ratting = true;
    // instock = true;
    const checkProduct = await db.Products.findOne({ where: { name: name } });
    if (checkProduct) {
      return res.status(444).json({ error: "Product-Name already exists" });
    }
    const data = await db.Products.create({
      name,
      price,
      img,
      ratting,
      instock,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const data = await db.Products.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await db.Products.findOne({ where: { id: id } });
    if (!checkId) {
      return res.status(444).json({ error: "productsId is not avalible" });
    }
    await checkId.destroy();
    res.status(200).json({ message: "Deleted sucessfully", id });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
