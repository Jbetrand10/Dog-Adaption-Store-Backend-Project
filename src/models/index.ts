import { Sequelize } from "sequelize";
import { PetFactory } from "./Pet";

const dbName = 'myOrmDb';
const username = 'root';
const password = 'root123';

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

PetFactory(sequelize);

export const db = sequelize;