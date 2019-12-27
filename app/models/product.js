'use strict';
module.exports = (sequelize, DataTypes) => {

    /*
    const Model = Sequelize.Model;

    class Product extends Model {}

    Product.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.NUMBER
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'product'
    });
    */

    const Product = sequelize.define('product', {
        name: DataTypes.STRING,
        price: DataTypes.NUMBER,
        description: DataTypes.STRING
    }, {});

    Product.associate = function (models) {
        // associations can be defined here
    };

    return Product;
};
