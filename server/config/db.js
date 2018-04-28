//db.js

const Sequelize = require('sequelize')

const Pay = new Sequelize('mysql://root:@localhost/pay', {
  define: {
    timestamps: false
  }
})
module.exports = {
  Pay
}