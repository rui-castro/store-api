'use strict';

module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Product', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 250]
        },
        price: {
            type: DataTypes.FLOAT,
            min: 0
        },
        description: {
            type: DataTypes.STRING,
            len: [0,10000],
        }
    }, {});

    Product.associate = function (models) {
        // associations can be defined here
    };

    return Product;
};
