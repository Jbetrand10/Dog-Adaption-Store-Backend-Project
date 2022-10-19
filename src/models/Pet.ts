import { InferAttributes, InferCreationAttributes, Model, Sequelize, DataTypes } from "sequelize";

export class Pet extends Model<InferAttributes<Pet>, InferCreationAttributes<Pet>>{
    declare id: number;
    declare name: string;
    declare Age: String;
    declare imgUrl: string;
    declare description: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function PetFactory(sequelize: Sequelize) {
    Pet.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Age: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            imgUrl: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            }
    }, {
        tableName: 'Pet',
        freezeTableName: true,
        sequelize
    });
}
