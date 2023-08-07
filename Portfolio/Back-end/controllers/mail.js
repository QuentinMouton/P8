const nodemailer = require ("nodemailer")
const dotenv = require ("dotenv")

dotenv.config()

exports.sendEmail = (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const subject = req.body.subject
    const email = req.body.email
    const message = req.body.message
    
    const fields = [firstName, lastName, subject, email, message]
    let emptyField = null

    for (const i in fields) {
        if (fields[i] === "") {
            emptyField = i
            break // Sortir de la boucle dès qu'un champ vide est trouvé
        }
    }

    if (emptyField !== null) {
        console.log("Le champ vide est " + emptyField)
        console.log(fields[emptyField])
        res.status(400).json({ error: "un champ est vide" })
        return
    }

    //Création d'un transporteur Nodemailer en utilisant un compte Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        }
    })

    //Contenu du mail
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'contact@quentinm-dev.fr',
        subject: `Formulaire - ${subject}`,
        text: `Nom: ${lastName} ${firstName}\nEmail: ${email}\n\n${message}`
    }

    // Envoi du mail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Error sending email:", err)
            res.status(500).json({ message: "Error sending email" })
          } else {
            console.log("Email sent:", info)
            res.status(200).json({ message: `Email sent successfully` })
          }
    })
}
