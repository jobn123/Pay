/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aliOrders', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    gameId: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    serverId: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    productId: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    channelId: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    gameCustomInfo: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    amount: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    sdkProductName: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    sdkProductDesc: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    appId: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    appVersion: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    key: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    orderNumber: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    orderStatus: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      default: 0,
    }
  }, {
    tableName: 'aliOrders'
  });
};
