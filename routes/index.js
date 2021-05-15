var express = require('express');
var router = express.Router();
var Message = require('./model/message');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/message', (req, res) => {
  console.log(req.body)
  Message.create({
    name: req.body.name,
    email: req.body.email,
    phone:req.body.phone,
    subject: req.body.subject,
    message: req.body.message,
    time:req.body.datep
}, (err, docs) => {
    if (!err) {
      res.send("Your Message  is delivered");
    }
    else {
      res.send("Your Message  is delivered");
    }
  })
});

router.get('/messages', (req, res) => {
  Message.find({}, (err, docs) => { res.send(docs)
  console.log(docs) })
})

router.get('/messages/:id', (req, res) => {
  Message.findByIdAndDelete(req.params.id,(err,docs)=>{
    if (docs) {
      return res.redirect('/admin')
    }
    else {
      return res.redirect('/admin')
    }
  })
})

module.exports = router;
