"use strict";
const express = require("express");
const html_for_email = require("./emailTemplate");

const nodemailer = require("nodemailer");


const router = express.Router();
const sendMail = async (email, favoritePartyID, registerDate, roleID, userAge, userGender, userID, userName, userPref) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ionos.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.ADMIN_EMAIL, // generated ethereal user
            pass: process.env.ADMIN_PASSWORD, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: 'company@politicalariel.net', // sender address
        to: "company@politicalariel.net," + `${email}`, // list of receivers
        subject: "Welcome to Politi-Cal!", // Subject line
        text: "Thank you for registering with our app. We are excited to have you as a member of our community. With Politi-Cal, you'll have access to the latest news and updates on celebrity and journalist opinions about political events, as well as the ability to vote for the opinions that align with your beliefs and connect with like-minded individuals through our discussion platform.\n"
            +
            "If you have any questions or need assistance navigating our app, please don't hesitate to reach out to our customer support team. We're here to help.\n" +
            "Thank you again for joining Politi-Cal. We look forward to your participation and engagement in our community.\n"
            +
            "Best,\n" +
            "The Politi-Cal Team\n", // plain text body
        html: html_for_email(`${email}`,
            `${favoritePartyID}`,
            `${registerDate}`,
            `${roleID}`,
            `${userAge}`,
            `${userGender}`,
            `${userID}`,
            `${userName}`,
            `${userPref}`), // html body
    });
    console.log("Message sent: %s", info.messageId);
};


router.post('/', async (req, res) => {
    console.log("post request sending celebs")
    console.log(req.body);
    // the req.body is a json object that looks like this:
    //{
    //     email: 'dolev.portfolio@gmail.com',
    //     favoritePartyID: 'Kulanu',
    //     registerDate: 2023014,
    //     roleID: 1,
    //     userAge: 19090607,
    //     userGender: 'Male',
    //     userID: 'rFgubRtxayYIDGdIfeOugqctGIK2',
    //     userName: 'null',
    //     userPref: [ 'Sports', 'Journalism' ]
    //}
    // we need to send the email with this information to the user help me parse the json object

    let { email, favoritePartyID, registerDate, roleID, userAge, userGender, userID, userName, userPref } = req.body;
    console.log(email);
    sendMail(`${email}`,
        `${favoritePartyID}`,
        `${registerDate}`,
        `${roleID}`,
        `${userAge}`,
        `${userGender}`,
        `${userID}`,
        `${userName}`,
        `${userPref}`
    );
    res.status(200).json({ "message": "success get all celebs" })
})

router.get('/', (req, res) => {
    console.log("get request create celeb")
    res.status(200).json({ "message": "success create celeb" })
})

router.put('/', (req, res) => {
    console.log("put request update celeb")
    res.status(200).json({ "message": "success update celeb" })
})

router.delete('/', (req, res) => {
    console.log("delete request delete celeb")
    res.status(200).json({ "message": "success delete celeb" })
})


module.exports = router



// https://politicalnodejs.onrender.com/api/celebs
// http://localhost:5000/api/celebs
// https://www.ionos.com/help/email/general-topics/settings-for-your-email-programs-imap-pop3/?source=helpandlearn