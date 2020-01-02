'use strict';
module.exports = (sequelize, DataTypes) => {

    const modelAttributes = {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            len: [1, 250]
        },
        price: {
            type: Sequelize.FLOAT,
            min: 0
        },
        description: {
            type: Sequelize.STRING,
            len: [0,10000],
        }
    };

    // There's 2 ways of defining a model
    // according to the manual (https://sequelize.org/master/manual/getting-started.html)

    // Method 1
    /*
    class Product extends Sequelize.Model {}
    Product.init(modelAttributes, {
        sequelize,
        modelName: 'product'
    });
    */

    // Method 2
    const Product = sequelize.define('product', modelAttributes, {});

    Product.associate = function (models) {
        // associations can be defined here
    };

    return Product;
};
