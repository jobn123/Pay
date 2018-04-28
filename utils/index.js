const axios = require('axios')

var utils = {
  randomStr: function(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < len; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  },
  post: function() {
    axios.post('http://baidu.com', 
      {"orderId":10014549,"userId":"e1c813b8ab8c46b299130404f50fa3da","gameId":30,"serverId":30003,"gameCustomInfo":"7|korea|30003|2","productId":"yzdzzkr.gp1200","amount":33000})
    .then(function(res){
    console.log(res)
  }).catch(function(err){
    console.log(err)
  })
  },
  huaweiPrivateKey: function() {
    var str = '-----BEGIN PRIVATE KEY-----\n' + 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCcVdkrg/+e+UTxLrJXU39tjGx8SZkf16aYm53/x1SSQ6vNgQcbebAd1uBbk/Ir5sjk1m7xcRPB+ueijjf9VntnXhQj9Xw5i7pPo0L/VBxrdNUF6CpbQjJEmECSwHhKyBYRsydALFqpwmDUOJHiLiXtH3f40mzsFDXiOzoZBe9uIRP37584FkLOkO8mPDd0Rj0UOdw5f5dVKGPJdaDqGpAUaDDra3TnHUZWjHgxkKGDBa3n/uUJAqAisxQin/gG86T4fG2SL7Qz5gI+SKS+WxipKmwQ8rSsi9+yrilhnP+HDIs77eSASbojnhQ2TV9jinSvW5QOAaIttodsvXyMUBZfAgMBAAECggEABemPPYCP9cSqkU55SykqvAtf/PFRm60trT7RYl94+NEbWbnD+YuIGBDMylnVgkiHl3PunS3wF9lz0id7wZZ4M0gRDe0WRhzdLm7XtU1Kh9vSxJbrpyjhOsvhQUuLIRThFMlINjqXMS1bORtslPe20nlqsZvPp7v577TatSCO1gTV9ELwkMQvaH62Oi2UtC0dacnK1gh3AnkW4FjIcDEf/53MIOorExsFlHwi8azF+Wfk90fzELb8P4aArB9sZ7CxXVuec2fxrBGajBkkoO6WN0F6U4IM7aTj/caBHI5RtjKuaC+fWPmk8M7x/V98XnFujkcH2appkm1jk1a7n/cK4QKBgQDlsF+l2F02Mnr8x/Wofo0HeD9ex2M6kAjD2ke9tDObY7uHcZ3Vzz3JudRnS9ygTu9QyTetp8Moi9re8d5bm7IjAJzqvSy9jFKTj/nmxiU8owwOkAU901ZFD1ZYVlcyzY3jA12/DdXK/oT9EoCVRDfzm1jQYWi3i2QkPxhfHdn3oQKBgQCuPmF16xWhEWioX6NgClkkXsJJ0dPz8FbmR7uEmeDyCAaZzkMqJIQOtneR30bdf7U7/4rO/XdZlTe6oD8AB12zINQeEmAsT8Cb5noMTlSfxX3mACPM6021N7eTlM7jIulX0yGFZE2fdoA+nV9vFMF80ly3GromnAZ4YWmFeVdN/wKBgQCusV997rquPuSln5vqxB2VQdLIzlNdNjFEbJ9F3Gmn1MnLcRF/jbjL1aeDzQIHdyGzSucrD75x9zTHfiQFfryUvKGcM7d0juY7TzTdXXTy0nuYE9e4tyUVL14Xn8uAWzCAKY5Cgk5Jrx0MsebUIGeBw3RgQMX5W24V11s89KJUIQKBgH7p0uUnuNZbrsZM+tu+TdWO66cHHYGlgjYy82OPDWhc7injMcqlVEa/IvJuFdjJ50DvTbScq+zlIfVeOOUVeGs7syTAL6q24Eztn+IMv9ir6Zq4aVsd3Ljs/1qQXezVBe9BSj41o9BNaPWyfMuU66W2N2/rGMF8jb3q/ggJLM0TAoGAPObSZ3bBTlbXlA+tYDJCjKqw9mPE+Lk0YSJ+IkWrbVa2/hRzraZQWoGr8IudbqgEkXgcMp3ZqF/gRFqfQKqHAUgJmNiCwkc6JhDgPshYRFSgGh908IPRR2k/h+p5GMUkjVZqVb6vyJJ9wOPIWPl4s6j7XgwhWd3CY+LBhAZzQOI=' + '\n-----END PRIVATE KEY-----'
    return str
  }
}

module.exports = {
  utils
}