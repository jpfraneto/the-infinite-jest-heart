var Recommendation = require("../models/recommendation");
var middlewareObj = {};
const nodemailer    = require('nodemailer');
const cryptoRandomString = require('crypto-random-string');
const { response } = require("express");
const User = require("../models/user");

middlewareObj.checkRecommendationOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Recommendation.findById(req.params.id, function(err, foundRecommendation){
            if(err || !foundRecommendation){
                req.flash("error", "Recommendation not found");               
                res.redirect("back");
            } else {
                if(foundRecommendation.author.username === req.user.username){
                    next();
                } else {
                    res.redirect("back");
                }
            }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err || !foundComment){
                req.flash("error", "Comment not found");
                res.redirect("back");
            } else {
                //does the user own the comment?
                if(foundComment.author.id.equals(req.user._id)){
                    next();
                } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash("error", "You need to be logged in to do that");
        res.redirect("/login");       
    } else {
        return next();
    }
};

middlewareObj.isNotLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You cannot be here if you are already logged in!");
    res.redirect("/");
};

middlewareObj.isVerified = function(req, res, next) {
    User.findOne({username:req.body.username})
    .then((foundUser)=>{
        if(foundUser){
            if(foundUser.active){
                next();
            } else {
                res.redirect("/verifyAccount")
            }
        } else {
            req.flash("error", "That user does not exist. Here you can register a new user");
            res.redirect("/register");
        }
    })
}

middlewareObj.isUser = function(req, res, next){
    if(req.user){
        if(req.user.username === req.params.username){
            return next();
        } else {
            res.redirect("/")
        }
    } else {
        res.redirect("/");
    }
}

middlewareObj.sendVerificationEmail = async function (username, userEmail, verificationCode) {
    // const verificationUrl = "http://localhost:3000/verifyEmail/" + verificationCode;
    const verificationUrl = "https://www.human-music.com/verifyEmail/" + verificationCode;

    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'Human Music <hola@human-music.com>',
        to: userEmail,
        subject: "Welcome! And Please Verify Your Account",
        html:"Hello "+username+"!,<br> I'm so glad that you are travelling this journey with us.<br>Please verify your email by clicking in the following link: <br><a href="+verificationUrl+">Click here to verify</a>"
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
        } else {
            console.log("The email with the verification code was sent!");
        }
    })
}

middlewareObj.sendResetEmail = async function (username, userEmail, resetCode) {
    const verificationUrl = "https://www.human-music.com/password_reset/" + resetCode;
    // const verificationUrl = "http://localhost:3000/password_reset/" + resetCode;
    
    const transporter = nodemailer.createTransport({
        host: 'mail.privateemail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: 'Human Music <hola@human-music.com>',
        to: userEmail,
        subject: "Reset password",
        html:"Hello "+username+"!,<br>I'm sorry that you forgot your password, but I'm here to help. <br>Please click the following link: <br><a href="+verificationUrl+">Click here to reset password.</a><br>I hope that you have a GREAT day!<br> jp"
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
        } else {
            console.log("The email with the reset password route was sent!");
        }
    })
}

middlewareObj.validateEmail = function(mail){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)){
        return (true)
    } else {
        return (false)
    }
} 

module.exports = middlewareObj;