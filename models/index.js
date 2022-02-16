const mysql = require("mysql2/promise");
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/db.config");

async function initialize() {
  // create db if it doesn't already exist
  const { host, port, user, password, database } = config;
  const connection = await mysql.createConnection({
    host,
    port,
    user,
    password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  console.log(config);
  // connect to db
  const sequelize = new Sequelize(database, user, password, {
    dialect: "mysql",
    host: host,
  });

  const Survey = sequelize.define("Survey", {
    // Model attributes are defined here
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    arn: {
      type: DataTypes.STRING,
    },
    accountno: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    disco: {
      type: DataTypes.STRING,
    },
    landmark: {
      type: DataTypes.STRING,
    },
    bu: {
      type: DataTypes.STRING,
    },
    bu: {
      type: DataTypes.STRING,
    },
    ut: {
      type: DataTypes.STRING,
    },
    feeder: {
      type: DataTypes.STRING,
    },
    recommendation: {
      type: DataTypes.STRING,
    },
    meter: {
      type: DataTypes.STRING,
    },
    smsDeliveryStatus: {
      type: DataTypes.STRING,
    },
    emailDeliveryStatus: {
      type: DataTypes.STRING,
    },
  });

  // `sequelize.define` also returns the model
  console.log(Survey === sequelize.models.Survey); // true


const surveyUser = await Survey.create({ id: "6" });
console.log(surveyUser.smsDeliveryStatus); // "Jane"
surveyUser.smsDeliveryStatus = "delivered";
// the name is still "Jane" in the database
await surveyUser.save();

// sync all models with database
await sequelize.sync();
}
module.exports = initialize;
