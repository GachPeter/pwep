
const { request } = require('express');
var express = require('express');
var router = express.Router();
var session = require('express-session');
var cors = require("cors");
var MongoStore = require('mongo-store');

var myerr = '';

/* GET home page. */
router.use(cors())

router.use(session({
    secret: 'ssssh its secret',
    resave: false,
    saveUninitialized: true, 
    store: MongoStore.create({ mongoUrl: 'mongodb://root:ExYysuc6EP5pkoIM@pwep-zykino7apsuwcsjd-svc.qovery.io:27017/admin'})
}));
redirectLogin = function (req, res, next) {
    if (!req.session.isadmin) {
        res.redirect("/admin/login");
    }
    next()
}
redirectLogin = function(req,res,next){
     if(!req.session.isadmin){
         res.redirect("/admin/login");
     }
     next()
}

redirectHome = function (req, res, next) {
    if (req.session.isadmin) {
        res.redirect("/admin")
    }
    next()
}
router.get('/', redirectLogin, function (req, res, next) {
    res.sendFile(__dirname + '/admin.html');
});

router.get('/login', redirectHome, (req, res) => {
    res.send(
        `
        <section>
        <div class="container">
        <h2>Administration Login</h2>
        <form method="post" action="/admin/login">
        <table>
        <tr><td><label>Name</td><td><input type="email" name="email" class="email"</label></td></tr>
        <tr><td><label>Password</td><td><input type="password" name="password" class="password"</label></td></tr>
       </br> </br><tr><td></td><td></br><button type="reset">Reset</button><button type="submit">Login</button></td></tr>
       <p><i>${myerr}</i><p>
       </table>
        </form>
        </div>
        <section>
        <style>
        .container{
        background:#333;
       width:23em;
            padding:5%;
            margin:1% auto;
        }
        section{
            text-align:center;
        }
        form{
            text-align:center;


        }
        p{
            color:red;
        }
        input{
            width:100%;
        }
        label{
            color:white;
            display:block;
            margin-bottom:5%;
            border:none;
        }
        h2{
            color:green;
        }
        button{
            padding:2%;
            cursor:pointer;
        }
        button:hover{
            background:green;
        }
        button[type^=submit]{
            color:white;
            background:Blue;
        }
        button[type^=reset]{
            color:white;
            background:red;
        }
        </style>
        
        `
    )
});

router.post('/login', redirectHome, (req, res) => {
    var { email, password } = req.body;
    if (email && password) {
        if (email = "AjangAdmin@pwep.org") {
            if (password == "Widowsprogramme1") {
                req.session.isadmin = 'aj';
                console.log(req.session)
                return res.redirect("/admin");
            }
            else {
                myerr = "incorrect password";

                return res.redirect("/admin/login");

            }
            return
        }
        else {
            myerr = "incorrect email";
            return res.redirect("/admin/login");
        }
        return
    }
    else {
        myerr = "enter all the fields";
        return res.redirect("/admin/login");
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (!err) {
            res.redirect('/admin/login')
        }
    })
})
module.exports = router;

