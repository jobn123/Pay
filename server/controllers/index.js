// controllers/index.js

async function checkAliPay(ctx, next) {
  // console.log('--------------')
  // const name = ctx.params.name
  // const result = await order.getOrders()
  var params = {
    ver: "1.0",
    data: {
      tradeId: "abcf1330", 
      tradeTime: "20150527130000", 
      orderId: "1234567",
      gameId: 123, 
      amount: "100.00", 
      payType: "999", 
      attachInfo: "custominfo=xxxxx#user=xxxx", 
      orderStatus: "S", 
      failedDesc: ""
    },
    sign:"c041a6c1d70716ebf1396179e9e6b42f"
    }
    
    ctx.body = result
}

async function addOrder(ctx, next) {
  console.log('--------------')
  // const name = ctx.params.name
  const result = await order.addOrder()
  ctx.body = result
}

module.exports = {
  checkAliPay,
  addOrder
}