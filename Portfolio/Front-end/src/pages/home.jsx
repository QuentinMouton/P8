import { useEffect } from "react"

import img from "../img/accueil.jpg"

import Menu from "../components/menu"

const Home = () => {
      useEffect(() => {
        const firstPart = document.querySelector('.typeWriter')
        const first = 'développeur web junior !'
    
        function typeWriter(title, word, index) {
          if (index < word.length) {
            setTimeout(() => {
              const typedText = word.substring(0, index + 1) // Obtenir le texte tapé jusqu'à l'index courant
              title.innerHTML = typedText // Mettre à jour le contenu de l'élément title avec le texte tapé
              typeWriter(title, word, index + 1)
            }, 100)
          }
        }
    
        setTimeout(() => {
          typeWriter(firstPart, first, 0)
        }, 500)
      }, [])

    return (
        <div className="relative h-screen w-full bg-black" data-barba="container" data-barba-namespace="home">
            <Menu />
            <img className="h-screen w-screen object-cover absolute opacity-50" src={img} alt="" />
            <div className="fixed w-full h-full flex justify-center items-center z-10">
                <div className="text-justify">
                    <h1 className="text-6xl sixd:text-5xl">Quentin Mouton</h1>
                    <h2 className="text-3xl ml-4 sixd:text-2xl">Je suis <span className="typeWriter text-secol font-bold"></span></h2>
                </div>
            </div>
        </div>
    )
}
export default Home