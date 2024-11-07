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
    ratting: {
      type: DataTypes.STRING,
    },
    instock: {
      type: DataTypes.STRING,
    },
  });
};
export default ProductModel;
