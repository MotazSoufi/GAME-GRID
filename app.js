//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://0.0.0.0:27017/UsersDatabase", {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    nickname: String,
    games: Array
});

userSchema.plugin(passportLocalMongoose); //hash and salt

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){

    if(req.isAuthenticated()) {
        res.render("index.ejs", {
            nickname: req.user.nickname
        });
    } else {
        res.render("index.ejs");
    }
});

app.get("/profile", function(req, res){

    if(req.isAuthenticated()) {
        res.render("profile.ejs", {
            nickname: req.user.nickname
        });
    } else {
        res.render("login.ejs");
    }
});

app.get("/lists", function(req, res){

    if(req.isAuthenticated()) {
        res.render("lists.ejs", {
            nickname: req.user.nickname,
            gameList: req.user.games,
            gameImageList: getImages(req.user.games)
        });
    } else {
        res.render("login.ejs");
    }
});

function getImages(gameArray) {
    var gameImages = [];

    for(var i = 0; i < gameArray.length; i++) {
        switch(gameArray[i]) {
            case "elden-ring":
                gameImages.push("https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/0Jz6uJLxOK7JOMMfcfHFBi1D.png");
            break;

            case "batman":
                gameImages.push("https://image.api.playstation.com/cdn/EP1018/CUSA00135_00/gIBLibuNu1I91g9FYzkqBJFLMd1X9OaD.png");
            break;
        }
    }

    return gameImages;
}

app.get("/browse", function(req, res){
    
    if(req.isAuthenticated()) {
        res.render("browse.ejs", {
            nickname: req.user.nickname
        });
    } else {
        res.render("browse.ejs");
    }
    
});

app.get("/elden-ring", function(req, res){
    if(req.isAuthenticated()) {

        if(req.user.games.includes("elden-ring")) {
            res.render("eldenring.ejs", {
                nickname: req.user.nickname,
                wishlisted: true
            });
        } else {
            res.render("eldenring.ejs", {
                nickname: req.user.nickname
            });
        }
    } else {
        res.render("eldenring.ejs");
    }
});

app.get("/batman", function(req, res){
    if(req.isAuthenticated()) {

        if(req.user.games.includes("batman")) {
            res.render("batman.ejs", {
                nickname: req.user.nickname,
                wishlisted: true
            });
        } else {
            res.render("batman.ejs", {
                nickname: req.user.nickname
            });
        }
    } else {
        res.render("batman.ejs");
    }
});


app.get("/wishlist/:id", function(req,res) {
    if(req.isAuthenticated()) {
        if(req.user.games.includes(req.params.id)) {
            const indexToRemove = req.user.games.indexOf(req.params.id);

            req.user.games.splice(indexToRemove, 1);
            req.user.save();
        } else {
            req.user.games.push(req.params.id);
            req.user.save();
        }     
        res.status(204).end();
    } else {
        res.render("login.ejs");
    }
});

app.get("/login", function(req, res){
    if(req.isAuthenticated()) {
        res.render("index.ejs", {
            nickname: req.user.nickname,
        });
    } else {
        res.render("login.ejs");
    }
});

app.get("/register", function(req, res){
    
    if(req.isAuthenticated()) {
        res.render("index.ejs", {
            nickname: req.user.nickname,
        });
    } else {
        res.render("register.ejs");
    }
});


app.get("/logout", function(req, res) {
    req.logout(function(err) {
       if(err) {
            console.log(err);
       } else {
            res.redirect("/browse"); 
       }
    });
});

app.post("/register", function(req, res){

    const newUser = new User({
        nickname: req.body["nickname"],
        username: req.body["username"]
    });

    User.register(newUser, req.body["password"], function(err, user){
        if(err) {
            console.log(err);
            res.render("register.ejs", {
                errorMessage: true
            });
        } else {
            passport.authenticate("local")(req, res, function() {
                res.render("browse.ejs");
            });
        }
    });
});


app.post("/login", function(req, res) {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, function(err) {

        if(err) {
            console.log(err);
        } else {
            passport.authenticate("local", { failureRedirect: "/login"})(req, res, function() {
                res.render("browse.ejs", {
                    nickname: req.user.nickname
                });
            });
        }

        
    });
});


app.listen(3000, function() {
    console.log("Server started on port 3000");
});