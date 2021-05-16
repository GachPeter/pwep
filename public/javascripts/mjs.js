    loadDoc();
    loadDoc2();
    Message();
    runst()

   
    check.onclick = runst;
    var ccard = document.getElementById("card");
    var ctitle = document.getElementById("title");
    var ctext = document.getElementById("text");
    var cimg = document.getElementById("img");
    ccard.style.display = "none";



function loadDoc() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            posts = JSON.parse(this.response);
            posts.reverse();
            arrangeDocs(posts);

        }
    };
    xhttp.open("GET", "https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts", true);
    xhttp.send();
}
function arrangeDocs(params) {
    params.forEach(post => {
        var pd = post.time;



        if (post.show == 'off') {
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<div class='card'>  <div class='card-body'><div class='card-content'><h5 class='card-title'>" + post.title + "</h5><p class='card-text'>" + post.content + "</p></div><hr><a class='btn btn danger' href='https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts/delete/" + post._id + "'>Delete</a><div class='mb-1 text-muted'>" + pd + "</div></div></div></div></div></div>"

        }
        else if (post.show == 'on') {
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<div class='card my-5'><img src='https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts/uploads/" + post.img + "' alt='Inspire' class='img-fluid'> <div class='card-body'><h5 class='card-title'>" + post.title + "</h5><div class='card-content'>  <p class='card-text'>" + post.content + "</p></div><hr><div class='row'><div class='col-4'><a class='btn btn-danger' href='https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts/delete/" + post._id + "' type='button'>Delete</a></div><div class='col-6'><div class='mb-1 text-muted' style='position:absolute;right:1.5em'>" + pd + "</div><div></div></div></div>"

        }
    });
}
function loadDoc2() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("stats").innerHTML = JSON.parse(this.response);
        }
    };
    xhttp.open("GET", "https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts/found", true);
    xhttp.send();
}
function Message() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            messages = JSON.parse(this.response)
            arrangeMess(messages);
        }
    };
    xhttp.open("GET", "https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/messages", true);
    xhttp.send();
}
function arrangeMess(params) {
    params.forEach(message => {
        document.getElementById('mess').innerHTML = document.getElementById('mess').innerHTML + `<details><summary><h5>${message.subject} (${message.name})</h5></summary> ${message.email} > ${message.phone}<div class='card-footer'>${message.message}</div><hr/>>${message.time}<a href="https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/messages/${message._id}">Delete</a></details>`
    })
}
function formsub() {
    var objf = document.getElementById('datep');
    dateObj = new Date();
    CD = dateObj.toDateString()
    objf.value = CD;
}evoxmusic

function runst() {
    check = document.getElementById('check');
    bFile = document.getElementById('fs');
    pShow = document.getElementById('stats');
    Gfile = document.getElementById('myp');
    Ffile = document.getElementById('imp');
    if (check.checked == true) {
        if (Gfile.value == '') {
            console.log(pShow)
            Ffile.style.display = "block";
            pShow.style.display = "block";
            if (pShow.contents == '') { bFile.disabled = true; }
        } else {
            bFile.disabled = false;
        }

    }
    else if (check.checked == false) {
        bFile.disabled = false;
        Ffile.style.display = "none";
        pShow.style.display = "none";

    }
}
