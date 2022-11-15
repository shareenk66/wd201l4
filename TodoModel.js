const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB.js");

class Todo extends Model {}
Todo.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    complete: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "todos",
  }
);
Todo.sync();
module.exports= Todo;