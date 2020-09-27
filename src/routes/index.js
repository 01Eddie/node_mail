const {Router}= require('express');
const nodemailer = require('nodemailer')
const router =Router();

router.post('/send-email', (req, res) => {
    //console.log(req.body);
    const {name , email, phone, message} = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}}</li>
            <li>Phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
    //console.log(contentHTML);
    nodemailer.createTransport({
        host: ''
    })
    res.send('recibido');
})

module.exports = router;