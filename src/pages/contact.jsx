import Menu from "../components/menu"
import Footer from "../components/footer"

import ImgContact from "../img/contactImg.png"
import ImgValid from "../img/valid.png"
import ImgInvalid from "../img/invalid.png"

const Contact = () => {

    async function handleSubmit(e){
        e.preventDefault()
        let firstName = document.getElementById('firstName').value
        let lastName = document.getElementById('lastName').value
        let subject = document.getElementById('subject').value
        let email = document.getElementById('email').value
        let message = document.getElementById('message').value

        const mail = {
            firstName: firstName,
            lastName: lastName,
            subject: subject,
            email: email,
            message: message
        }
        try{
            const res = await fetch("https://api.quentinm-dev.fr/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(mail),
            })
            if(res.status === 200){
                const data = await res.json()
                // console.log(data)
                const valid = document.getElementById('form')
                valid.innerHTML = ""
                const messageValid = document.createElement('h2')
                messageValid.setAttribute("class", "text-3xl text-center fifd:text-2xl sixd:text-xl")
                messageValid.innerText = "Votre message a bien été envoyé"
                const imgValid = document.createElement('img')
                imgValid.src = `${ImgValid}`
                valid.appendChild(messageValid)
                valid.appendChild(imgValid)
            } else if(res.status === 500){
                throw new Error("Erreur interne du serveur")
            } else if(res.status === 400){
                const title = document.getElementById('title')
                title.innerHTML = ""
                title.innerHTML = `<h2 class="text-secol">Tous les champs ne sont pas renseignés</h2>`
            } else {
                throw new Error("Erreur inconnue")
            }
        } catch (err){
            // console.error("Error:", err)
            const invalid = document.getElementById("form")
            invalid.innerHTML = ""
            const messageInvalid = document.createElement('h2')
            messageInvalid.setAttribute("class", "text-3xl text-center fifd:text-2xl sixd:text-xl")
            messageInvalid.innerText = "Erreur lors de l'envoi de votre message veuillez réessayer plus tard"
            const imgInvalid = document.createElement('img')
            imgInvalid.src = `${ImgInvalid}`
            invalid.appendChild(messageInvalid)
            invalid.appendChild(imgInvalid)
        }
    }

    return (
    <div className="w-full min-h-screen bg-pricol flex flex-col justify-between items-center">
        <Menu />
        <h1 className="absolute text-center text-5xl mt-10 sixd:text-4xl"><span className="text-secol">Contactez</span> moi</h1>
        <div className="flex justify-center items-center mt-24 gap-10 h-2/3 w-full mx-20">
            <form onSubmit={handleSubmit} id="form" className="flex flex-col justify-around items-center gap-8 h-2/3 w-1/3 bg-tricol p-10 rounded-3xl thid:w-2/3 foud:w-[90%]">
                <h2 id="title" className="text-2xl text-center mt-4">M'envoyer un message</h2>
                <div className="w-full flex gap-7 mt-2 fird:flex-col">
                    <input name="lastName" id="lastName" placeholder="Nom" type="text" aria-label="champ nom" className="w-1/2 h-10 rounded-xl bg-black p-2 fird:w-full" required/>
                    <input name="firstName" id="firstName" placeholder="Prenom" type="text" aria-label="champ prenom" className="w-1/2 h-10 rounded-xl bg-black p-2 fird:w-full" required/>
                </div>
                <input name="email" id="email" placeholder="Adresse email" type="mail" aria-label="champ email" className="w-full h-10 rounded-xl bg-black p-2" required/>
                <input name="subject" id="subject" placeholder="Sujet du message" type="text" aria-label="champ sujet du message" className="w-full h-10 rounded-xl bg-black p-2" required/>
                <textarea name="message" id="message" placeholder="Message" type="text" rows={7} aria-label="champ message" className="w-full rounded-xl bg-black p-2" required/>
                <button type="submit" value="send" className="bg-secol w-1/3 h-9 rounded-xl text-xl mb-4">Envoyer</button>
            </form>
            <img className="h-full rounded-xl object-cover thid:hidden" src={ImgContact} alt="" />
        </div>
        <Footer />
    </div>
    )
}
export default Contact
