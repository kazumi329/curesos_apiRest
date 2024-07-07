import { Sequelize } from "sequelize";

const sequelize = new Sequelize('curso',    'root', 'naruto325', {
    host: 'localhost',
    dialect: "mysql"
  });

  export default sequelize;