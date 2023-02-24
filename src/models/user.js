const Sequelize = require('sequelize');
const bcrypt=require("bcrypt")
module.exports = (sequelize, DataTypes) => {
  return user.init(sequelize, DataTypes);
}

class user extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "user_email_key",
      validate:{
        isEmail:true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    },
    about_me: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    article_1: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    url_github:{
      type: DataTypes.STRING,
      allowNull: true
    },
    url_linkedin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER,
    },
    country: {
      type: DataTypes.STRING,
    },
    region: {
      type: DataTypes.STRING,
    },
    is_verify: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks:{
      beforeCreate:(user,options)=>{
          const {password}=user;
          const hash=bcrypt.hashSync(password,10)
          user.password=hash;
      }
  },
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
