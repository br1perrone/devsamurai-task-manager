import Sequelize from 'sequelize';
import config from '../config/database';

// import Model from '../models/Model';

const models = [];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
    this.associate();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }
  
  associate() {
    models.forEach(model => model.associate ?? model.associate(this.connection.models));
  }

}

export default new Database();