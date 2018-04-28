/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ali', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    accountId: {
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
    payWay: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    callbackInfo: {
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
    creator: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    cpOrderId: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'ali'
  });
};
