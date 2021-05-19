var express = require('express');
var router = express.Router();
var post = require('./model/post');
var upload = require("express-fileupload");

router.use(upload())

/* GET users listing. */
router.get('/', function (req, res, next) {
  post.find({},(err, docs) =>{
    if (docs) {
      return res.json(docs);
    }
    else {
      return res.json("There was some errors" + err)
    }
  });
});

router.get('/view/:time', function (req, res, next) {
  post.findOne({ time: req.params.time }, (err, docs) => {
    if (docs) {
      return res.json(docs);
    }
    else {
      return res.json("There was some errors" + err)
    }
  })
});

router.get('/category/:category', function (req, res, next) {
  post.find({ category: req.params.category }, (err, docs) => {
    if (docs) {
      return res.json(docs);
    }
    else {
      return res.json("There was some errors" + err)
    }
  })
});

router.post("/update/:time", (req, res) => {
  post.findOneAndUpdate({ time: req.params.time }, {
    $set: {
      title: req.body.title,
      content: req.body.contents,
      category: req.body.category,
      img: req.body.img
    }
  }, (err, docs) => {
    if (docs) {
      return res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    }
    else {
      return res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    }
  })
})

router.get("/delete/:id", (req, res) => {
    post.findByIdAndDelete(req.params.id,(err,docs)=>{
    if (docs) {
      return res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    }
    else {
      return res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    }
  })
})

router.get("/:category/delete", (req, res) => {
  post.deleteMany({ category: req.params.category }, (err, docs) => {
    if (docs) {
      return res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    }
    else {
      return res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    }
  })
})
router.post('/feature', (req, res) => {
  if (req.files) {
    imgfile = req.files.imgu;
    filename = imgfile.name;
    imgfile.mv(__dirname + '/uploads/' + filename, (err) => {
      if (err) {
        res.send(err)
      }
      else {
        res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
      }
    })
  }
})
router.get('/uploads/:opt', (req, res) => {
  res.sendFile(__dirname + '/uploads/' + req.params.opt);
})
router.post('/create', function (req, res) {
  console.log(req.body);
  if (req.body.img) {
    post.create({
      title: req.body.title,
      content: req.body.contents,
      time: req.body.datep,
      img: req.body.img,
      show: req.body.check,
      st:Date.now()
    }, (err, docs) => {
      if (err) throw err;
      else res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    })
  }
  else {
    post.create({
      title: req.body.title,
      content: req.body.contents,
      time: req.body.datep,
      category: req.body.category,
      show: req.body.check
    }, (err, docs) => {
      if (err) throw err;
      else res.redirect('https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/admin')
    })
  }
});


module.exports = router;
