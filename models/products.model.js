const ProductModel = (sequelize, DataTypes) => {
  return sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    img: {
      type: DataTypes.STRING,
    },
    ratting: true,
    instock: true,
  });
};
export default ProductModel;
