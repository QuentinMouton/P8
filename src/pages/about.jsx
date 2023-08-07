import React, { useEffect } from 'react'
import { gsap } from "gsap"
import { skillsList } from "../data/skills"

import Menu from "../components/menu"
import Footer from "../components/footer"

import dev from '../img/charlesdeluvio-pjAH2Ax4uWk-unsplash.jpg'
import github from '../img/github.svg'
import codepen from '../img/codepen.svg'

const About = () => {
    
    useEffect(() => {
        skillsList.forEach((skill) => {
          const barOverlayText = skill.ref.querySelector('.bar-overlay-text')
          const barProgressWrap = skill.ref.querySelector('.bar-progress-wrap')
            
          gsap.fromTo(barProgressWrap, { width: 0 },
            {
              width: barOverlayText.textContent,
              duration: 4,
              ease: 'power2.out',
            }
          )
          gsap.from(barOverlayText, {
            textContent: barOverlayText.textContent,
            duration: 4,
            ease: 'power2.out',
          })
        })
      }, [])
    

    return (
        <div className="w-full min-h-screen bg-pricol flex flex-col items-center">
            <Menu />
            <h1 className='text-center text-5xl my-10 sixd:text-4xl sixd:mt-12'><span className="text-secol">À propos</span> de moi</h1>
            <div className="w-4/5 flex justify-center items-center gap-10 secd:w-4/5 fird:w-[95%]">
                <div className="w-1/2 thid:w-4/5 sixd:w-[95%]">
                    <h2 className="text-3xl secd:text-2xl">Je suis un <span className="text-secol">développeur web junior</span>, <br/> basé en Loire-Atlantique</h2>
                    <p className="text-xl mt-7 text-justify secd:text-lg sixd:text-base ">
                        Après 10ans en tant que réparateur (software/hardware), conseiller, 
                        vendeur en informatique, auprès de particuliers et professionnels, j'ai 
                        décidé de me former chez OpenClassrooms au metier du web en suivant une 
                        formation de développeur web. Grace à cette formation j'ai pu acquérir 
                        de nombreuses compétences que j'ai pu mettre à profit à travers les divers 
                        projets que j'ai eu à réaliser au cours de celle-ci.
                    </p>
                </div>
                <div className="w-[40%] secd:w-2/3 thid:hidden">
                    <img className="object-cover" src={dev} alt="" />
                </div>
            </div>
            <div className="w-full m-20">
                <h2 className="text-center text-4xl sixd:text-3xl">Suivre mon <span className="text-secol">travail</span></h2>
                <div className="w-full flex flex-wrap justify-center items-center gap-10 mt-10 foud:flex-col">
                    <button className="w-1/5 h-72 border-2 bg-tricol border-tricol rounded-2xl flex flex-col justify-around items-center overflow-hidden fird:w-1/3 foud:w-1/2 fifd:w-2/3" onClick={(e) => {window.open('https://github.com/SheepmaanDev', '_blank')}}>
                        <img className="mt-3 bg-secol rounded-2xl hover:shadow-[0_0_0_400px_#c70039] transition-all duration-[900ms] ease-in-out z-10" src={github} alt="" />
                        <h3 className="mt-5 mb-2 text-3xl z-20 sixd:text-2xl">Github</h3>
                        <p className="mb-3 mx-5 text-xl z-20 fifd:text-lg">C'est un site qui permet le travail collaboratif mais aussi stocker et partager ses projets.</p>
                    </button>
                    <button className="w-1/5 h-72 border-2 bg-tricol border-tricol rounded-2xl flex flex-col justify-around items-center overflow-hidden fird:w-1/3 foud:w-1/2 fifd:w-2/3" onClick={(e) => {window.open('https://codepen.io/Quentin-MOUTON', '_blank')}}>
                        <img className="mt-3 bg-secol rounded-2xl hover:shadow-[0_0_0_400px_#c70039] transition-all duration-[900ms] ease-in-out z-10" src={codepen} alt="" />
                        <h3 className="mt-5 mb-2 text-3xl z-20 sixd:text-2xl">Codepen</h3>
                        <p className="mb-3 mx-5 text-xl z-20 fifd:text-lg">C'est un site qui permet de tester et présenter des extraits de code en HTML, CSS et JS.</p>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col items-center">
                <h2 className="text-center text-4xl sixd:text-3xl">Mes <span className="text-secol">compétences</span></h2>
                <div className='container flex flex-wrap justify-center items-center gap-10 w-full my-14 thid:flex-col'>
                    {skillsList.map((e, index) => (
                        <div className="anim inline-block w-[40%] thid:w-4/5 thid:mx-5" key={e.id} ref={(el) => (e.ref = el)}>
                            <h3 className="text-center text-xl">{e.name}</h3>
                            <div className='bar-background bg-tricol w-full h-10 p-1 rounded-2xl flex items-center'>
                                <div className='bar-progress-wrap bg-secol w-full h-4/5 p-1 rounded-2xl'>
                                    <div className='bar-progress flex items-center h-full'>
                                        <div className='bar-overlay-text ml-auto text-xl'>{e.eval}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default About