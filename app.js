import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var loginValid;

var email;
var password;
var loggedIn = false;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));


function loginInfo(req, res, next) {
    email = req.body["email"];
    password = req.body["password"];  

    if(email == "mezooo2001@hotmail.com" && password == "Incmike2001") {
        loginValid = true;
        loggedIn = true;
    }
    else {
        loginValid = false;
    }
    next();
}

app.use(loginInfo);

app.get("/", (req,res) => {
    res.render("index.ejs", {
        loggedUser: loggedIn,
        emailVal: email,
        passwordVal: password,
    });
});

app.get("/browse", (req,res) => {
    res.render("browse.ejs", {
        loggedUser: loggedIn,
        emailVal: email,
        passwordVal: password,
    });
});

app.get("/elden-ring", (req,res) => {
    res.render("eldenring.ejs");
});

app.get("/login", (req,res) => {
    res.render("login.ejs");
});

app.post("/login", (req,res) => {

    
        if(loginValid) {
            res.render("browse.ejs", {
                emailVal: email,
                passwordVal: password,
                loggedUser: true,
            });
        }
        else {
            res.render("login.ejs", {
                incorrect: "Incorrect email address or password. Please enter the correct email or password.",
            });
        }

});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
