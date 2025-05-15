'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notificacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notificacion.init({
    titulo: DataTypes.STRING,
    mensaje: DataTypes.TEXT,
    receptor: DataTypes.STRING,
    enviada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Notificacion',
  });
  return Notificacion;
};