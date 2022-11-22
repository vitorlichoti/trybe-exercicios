'use strict';
const {
  Model
} = require('sequelize');

const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
    });
  
    return User;
  };

module.exports = User;