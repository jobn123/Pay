// models/ali.js
const db = require('../config/db.js'), 
      aliModel = '../schema/ali.js',
      aliOrdersModel = '../schema/aliOrders.js';

const utils = require('../../utils/index.js')
const md5 = require('blueimp-md5')
const axios = require('axios')

const Pay = db.Pay; // 引入数据库

const Ali = Pay.import(aliModel); 
const AliOrders = Pay.import(aliOrdersModel);

async function addPay(ctx) {
  
  const data = ctx.request.query
  // const orderId gameId accountId creator payWay amount callbackInfo orderStatus failedDesc cpOrderId
  console.log('++++++++++++++++')
  console.log(ctx.request.query)
  console.log(ctx.request.body)
  console.log('++++++++++++++++')
  
  var data = ctx.request.body.data
  var apiKey = "cf83430973d31709f20f4226e39e6142"

  var str = "accountId=" + data.accountId + "amount=" + data.amount + "callbackInfo=" + data.callbackInfo + "cpOrderId=" + data.cpOrderId + "creator=" + data.creator + "failedDesc=" + data.failedDesc + "gameId=" + data.gameId + "orderId=" + data.orderId + "orderStatus=" + data.orderStatus + "payWay=" + data.payWay + apiKey

  var reSign = md5(str)

  var flag = reSign === data.sign ? "SUCCESS" : "FAILURE"
  // var str = "accountId=06fd4616e20c5560023a304fa3aee8d8amount=0.01callbackInfo=cpOrderId=YFHfPPhyktn6ywPHM0HGcreator=ALIfailedDesc=gameId=843027orderId=20180426160327005681orderStatus=SpayWay=207cf83430973d31709f20f4226e39e6142";
  
  const params = {
    accountId: data.accountId,
    amount: data.amount,
    callbackInfo: data.callbackInfo,
    orderId: data.cpOrderId,
    creator: data.creator,
    failedDesc: data.failedDesc,
    gameId: data.gameId,
    orderId: data.orderId,
    orderStatus: data.orderStatus,
    payWay: data.payWay
  }
  const orderFlag = await insertData(Ali, params)
  // axios.post('http://baidu.com', {"orderId":10014549,"userId":"e1c813b8ab8c46b299130404f50fa3da","gameId":30,"serverId":30003,"gameCustomInfo":"7|korea|30003|2","productId":"yzdzzkr.gp1200","amount":33000}).then(function(res){
  //   console.log(res)
  // }).catch(function(err){
  //   console.log(err)
  // })
  return flag
}

async function getOrdersNumber(ctx) {
  console.log('==========')
  console.log(ctx.request.query)
  console.log(ctx.request.body)
  console.log('=====================')
  var parmas = ctx.request.body
  var orderNumber = utils.utils.randomStr(20)
  var apiKey = "cf83430973d31709f20f4226e39e6142"
  var CALLBACK_INFO = "xxxxxx"

  var str = "accountId=" + parmas.userId + "amount="+parmas.amount +"cpOrderId=" + orderNumber + "notifyUrl=http://47.104.144.22:3000/aliPay"+apiKey

  // var signStr = objtoStr(parmas) + apiKey
  console.log('++++++++++++++++++++')
  console.log(str)
  var sign = md5(str)
  console.log(sign)
  
  var p = {
    userId: parmas.userId,
    gameId: parmas.gameId,
    serverId: parmas.serverId,
    productId: parmas.productId,
    channelId: parmas.channelId,
    gameCustomInfo: parmas.gameCustomInfo,
    amount: parmas.amount,
    sdkProductDesc: parmas.sdkProductDes,
    sdkProductName: parmas.sdkProductName,
    key: parmas.key,
    orderNumber: orderNumber,
    orderStatus: 0
  }

  const orderFlag = await insertData(AliOrders, p)

  return {
    resultCode: orderFlag,
    amount: parmas.amount,
    notify_url: 'http://47.104.144.22:3000/aliPay',
    orderId: orderNumber,
    sign: sign
  }
}

function objtoStr(obj) {
  // var str = ""
  // for (i in obj) {
  //   // if(i != "sign" || i !="signType") {
  //   var prefix = i+"="+obj[i] 
  //   str += prefix
  //   // }
  //   console.log(str)
  // }
  // return str

  var arr = Object.keys(obj).sort()
  var str = ""
  for(i=0; i< arr.length; i++) {
    var index = arr[i]
    var item = obj[index]
    if (item != null) {
      var prefix = index + "=" + item
      str += prefix
    }
  }
  return str
}
/**
 * 
 * @param {tablaName} t 
 * @param {params} p 
 */
function insertData(t, p) {
  return new Promise(function(resolve){
    t.build(p)
    .save()
    .then(anotherTask => {
      resolve(1)
    })
    .catch(err => {
      console.log(err)
      resolve(0)
    })
  })
}

module.exports = {
  addPay,
  getOrdersNumber
}
