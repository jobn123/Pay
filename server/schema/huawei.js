/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('huawei', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tradeId: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    tradeTime: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    orderId: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    gameId: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    amount: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    payType: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    attachInfo: {
      type: DataTypes.CHAR(100),
      allowNull: false
    },
    orderStatus: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    failedDesc: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
  }, {
    tableName: 'huawei'
  });
};
