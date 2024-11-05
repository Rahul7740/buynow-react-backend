import { DataTypes, Sequelize } from "sequelize";
import UserModel from "../models/user.model.js";

const sequelize = new Sequelize("backend_Login_page", "root", "123456", {
    host: "localhost",
    dialect: "mysql"
})


const db = {}
db.User = UserModel(sequelize, DataTypes)

// Test database connection and sync models individually
async function testAndSyncModels() {
    try {
        await sequelize.authenticate();
        console.log(
            "Connection to the database has been established successfully."
        );

        await db.User.sync({ alter: true });
        console.log("User table synced successfully.");
    } catch (error) { }
}

testAndSyncModels();

export default db;