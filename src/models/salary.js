const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return salary.init(sequelize, DataTypes);
}

class salary extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'salary',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "salary_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
