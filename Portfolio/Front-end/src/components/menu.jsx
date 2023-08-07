import { Link } from 'react-router-dom'
import { gsap } from 'gsap'


const Menu = () => {
    const mail = 'contact@quentinm-dev.fr'

    function openMenu(e){
        const tl = gsap.timeline()
        const menuRight = document.querySelector('.menu-right')
        const menuLeft = document.querySelector('.menu-left')
        const openIco = document.querySelector('.ico-open')
        const closeIco = document.querySelector('.ico-close')
        if (menuRight.classList.contains('open') && menuLeft.classList.contains('open')){
            //Ferme le menu
            openIco.classList.remove('hidden')
            closeIco.classList.add('hidden')
            menuRight.classList.remove('open')
            menuRight.classList.add('translate-x-full')
            menuLeft.classList.remove('open')
            menuLeft.classList.add('-translate-x-full')
            tl.to('.sep', {
                height: 0,
                duration: 0
            })
        } else {
            //Ouvre le menu
            openIco.classList.add('hidden')
            closeIco.classList.remove('hidden')
            menuRight.classList.add('open')
            menuRight.classList.remove('translate-x-full')
            menuLeft.classList.add('open')
            menuLeft.classList.remove('-translate-x-full')
            tl.to('.sep', {
                duration: 0.75,
                height: '100%',
                delay: 0.60
            })
            tl.from('.menu-right-items', {
                y: 40,
                opacity: 0,
                stagger: 0.25,
                delay: 0.7
            }, "<-0.8")
            tl.from('.menu-left-items', {
                y: 40,
                opacity: 0,
                stagger: 0.25,
                delay: 0.5
            }, "<-0.8")
        }
    }
    
    return (
        <div className='truncate'>
            <button className="fixed top-4 right-4 z-50" onClick={openMenu} aria-label='bouton menu'>
                <i className="fa-solid fa-bars fa-2xl ico-open"></i>
                <i className="fa-solid fa-xmark fa-2xl ico-close hidden"></i>
            </button>
            <div className="menu-right fixed flex items-center h-screen w-1/2 right-0 translate-x-full transition-transform duration-700 bg-black opacity-90 z-40">
                <div className="flex flex-col justify-between h-1/4 absolute left-4 text-3xl">
                    <Link className='menu-right-items flex justify-start items-center hover:bg-secol hover:rounded-xl' onClick={(e) => {window.open('https://github.com/SheepmaanDev', '_blank')}}>
                        <i className="fa-brands fa-github w-12 p-1.5"></i>
                        <p>GitHub</p>
                    </Link>
                    <Link className='menu-right-items flex justify-start items-center hover:bg-secol hover:rounded-xl' onClick={(e) => {window.open('https://www.linkedin.com/in/quentin-mouton-28151325a/', '_blank')}}>
                        <i className="fa-brands fa-linkedin w-12 p-1.5"></i>
                        <p>Linkedin</p>
                    </Link>
                    <Link className='menu-right-items flex justify-start items-center hover:bg-secol hover:rounded-xl' onClick={(e) => {window.open('https://twitter.com/SheepMaanDev')}}>
                        <i className="fa-brands fa-twitter w-12 p-1.5"></i>
                        <p>Twitter</p>
                    </Link>
                    <Link className='menu-right-items flex justify-start items-center hover:bg-secol hover:rounded-xl' onClick={(e) => {window.open(`mailto:${mail}`)}}>
                        <i className="fa-solid fa-envelope w-12 p-1.5"></i>
                        <p>Mail</p>
                    </Link>
                </div>
            </div>
            <div className='sep fixed left-1/2 -transform-x-1/2 w-1 bg-secol z-40'></div>
            <div className='menu-left fixed flex items-center h-screen w-1/2 left-0 -translate-x-full transition-transform duration-700 bg-black opacity-90 z-40'>
                <div className='flex flex-col justify-between h-1/4 absolute right-2 text-3xl'>
                    <Link className='menu-left-items flex justify-end items-center hover:text-secol' to="/">
                        <p>Accueil</p>
                        <i className="fa-solid fa-house w-12 p-1.5 ml-2"></i>
                    </Link>
                    <Link className='menu-left-items flex justify-end items-center hover:text-secol' to="/about">
                        <p>À propos</p>
                        <i className="fa-solid fa-circle-info w-12 p-1.5 ml-2"></i>
                    </Link>
                    <Link className='menu-left-items flex justify-end items-center hover:text-secol' to="/portfolio">
                        <p>Portfolio</p>
                        <i className="fa-solid fa-folder w-12 p-1.5 ml-2"></i>
                    </Link>
                    <Link className='menu-left-items flex justify-end items-center hover:text-secol' to="/contact">
                        <p>Contact</p>
                        <i className="fa-solid fa-address-book w-12 p-1.5 ml-2"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Menu