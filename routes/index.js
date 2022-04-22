var express = require('express');
var router = express.Router();

//*** 追加1 ここから***//
var multer = require('multer');
var storage = multer.diskStorage({

  destination: function(req, file, cb){
    cb(null, './public/images/')
  },
  //ファイル名を指定
  //ここでは image.jpg という名前で保存
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})

var upload = multer({storage: storage})
//*** 追加1 ここまで ***//

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express' });
});


router.post('/',upload.single('file'),function(req,res){
  res.json({ 'result': 'success!' });
});
//*** 追加2　ここまで ***//

module.exports = router;