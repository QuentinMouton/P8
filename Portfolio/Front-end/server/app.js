const { response } = require('express')
const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = 5000

const email =
const myemail = 
const mypassword =  

function sendEmail(){
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:myemail,
                pass,mypassword
            }
        })

        const mail_configs = {
            from:myemail,
            to:email,
            subject:'Testing Koding 101 Email',
            text:'Justing checking if this email will be sent'
        }
        transporter.sendMail(mail_configs, function(error, info){
            if (error){
                console.log(error)
                return reject({ message: `An error has occured`})
            }
            return resolve({ message: 'Email sent succesfuly' })
        })
    })
}

app.get('/', (req, res) => {
    sendEmail()
    .then((res) => res.send(res.message))
    .catch((err) => res.status(500).send(err.message))
})

app.listen(port, () => {
    console.log(`nodemialerProject is lestening at http://localhost:${port}`)
})
