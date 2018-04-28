// controllers/user.js 

const huawei = require('../models/huawei.js')

async function addPay(ctx, next) {
  console.log('--------------')
  // const name = ctx.params.name
  const result = await huawei.addPay(ctx)
  ctx.body = result
}

async function getOrders(ctx, next) {
  const result = await huawei.getOrdersNumber(ctx)
  ctx.body = result
}

module.exports = {
  addPay,
  getOrders
}