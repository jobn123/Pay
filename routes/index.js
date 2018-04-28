const router = require('koa-router')()
const ali = require('../server/controllers/ali.js')
const huawei = require('../server/controllers/huawei.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

// router.get('/alipay', async (ctx, next) => {
//   ctx.body = 'alipay string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })
//alibaba
router.post('/aliPay', ali.addPay)
router.post('/getaliOrderNumbers', ali.getOrders)

//huawei
router.post('/huaweiPay', huawei.addPay)
router.post('/gethuaweiEncryptData', huawei.getOrders)

module.exports = router
