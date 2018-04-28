// controllers/user.js 

const ali = require('../models/ali.js')

async function addPay(ctx, next) {
  console.log('--------------')
  // const name = ctx.params.name
  const result = await ali.addPay(ctx)
  ctx.body = result
}

async function getOrders(ctx, next) {
  const result = await ali.getOrdersNumber(ctx)
  // console.log(ctx.request.query)
  // console.log('==============')
  // console.log(ctx.request.querystring)
  ctx.body = result
}

module.exports = {
  addPay,
  getOrders
}