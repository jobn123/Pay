// models/ali.js
const db = require('../config/db.js'), 
      huaWModel = '../schema/huawei.js',
      huaWOrdersModel = '../schema/huaweiOrders.js';

const utils = require('../../utils/index.js')
// const md5 = require('blueimp-md5')
// const JSEncrypt = require('jsencrypt')
const NodeRSA = require('node-rsa');

const Pay = db.Pay; // 引入数据库

const huaW = Pay.import(huaWModel); 
const huaWOrders = Pay.import(huaWOrdersModel);

async function addPay(ctx) {

  const str = "result=0&userName=890049000000000436&productName=轩辕剑&payType=0&amount=20.00&orderId=123456789&notifyTime=12345678&requestId=123456&BankId=QQCARD-NET&sign=XXX"

  var params = ctx.request.query
  // var paramStr = objtoStr(params)

  console.log('------paramStr------')
  console.log(params)
  console.log(ctx.request.body)
  console.log('--------------------')
  var decodeSign = decodeURI(params.sign)
  var signStr = objtoStr(ctx.request.body)
  console.log('------------------')
  console.log(signStr)
  // console.log(ctx.request.querystring)
  // decodeURI(sign)
  // const params = {
  //   tradeId: tradeId,
  //   tradeTime: tradeTime,
  //   orderId: orderId,
  //   gameId: gameId,
  //   amount: amount,
  //   payType: payType,
  //   attachInfo: attachInfo,
  //   orderStatus: orderStatus,
  //   failedDesc: failedDesc
  // }
  // const orderFlag = await insertData(huaW, params)
  // var flag = paramStr === decodeSign ? 0 : 1 

  return {
    result: false,
  }
}

async function getOrdersNumber(ctx) {
  var parmas = ctx.request.query
  console.log('------------')
  console.log(parmas)
  console.log(ctx.request.body)
  console.log('------------')
  var p = {
    userId: parmas.userId,
    gameId: parmas.gameId,
    serverId: parmas.serverId,
    productId: parmas.productId,
    gameCustomInfo: parmas.gameCustomInfo,
    amount: parmas.amount,
    sdkProductDesc: parmas.sdkProductDes,
    sdkProductName: parmas.sdkProductName,
    key: parmas.key,
    orderId: parmas.orderId,
    channelId: parmas.channelId,
    orderStatus: 0
  }
  
  const orderFlag = await insertData(huaWOrders, p)
  const key = new NodeRSA(utils.utils.huaweiPrivateKey());
  var destr = decodeURIComponent(parmas.sourceData)
  console.log('========destr==========')
  console.log(parmas.sourceData)
  console.log(destr)
  var encrypted = encodeURIComponent(key.encrypt(destr, 'base64'));  // 加密后数据
  return {
    resultCode: orderFlag,
    sourceData: encrypted
  }
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

function sortKey(obj) {
  var arr = []
  for (i in a) {
    if(i != "sign" || i !="signType") {
      var item = {}
      item[i] = a[i]
      arr.push(item)
    }
  }
  arr.sort(function(a,b){
    return a.key+"">b.key+"";
  }); 
  return arr
}

function objtoStr(a) {
  var count = 0
  var str = ""
  for (i in a) {
    if(i != "sign" || i !="signType") {
    var prefix = count == 0 ? ""+i+"="+a[i] : "&"+i+"="+a[i]
    str += prefix
    count ++
    }
  }
  return str
}

module.exports = {
  addPay,
  getOrdersNumber
}
