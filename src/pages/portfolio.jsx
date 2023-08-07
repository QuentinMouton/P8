import { useState } from 'react'
import { ProjectsList } from '../data/projects'

import Menu from '../components/menu'
import Modal from '../components/modal'
import Footer from '../components/footer'

const Portfolio = () => {
    const [activeProjectId, setActiveProjectId] = useState(null)
    const openModal = (projectId) => { setActiveProjectId(projectId) }
    const closeModal = () => { setActiveProjectId(null) }

    return (
    <div className="w-full min-h-screen bg-pricol flex flex-col justify-between items-center">
        <Menu />
        <h1 className='text-center text-5xl my-10 sixd:text-4xl'>Mon <span className='text-secol'>portfolio</span></h1>
        <div className="flex flex-wrap justify-center items-center mx-20 sixd:w-full">
            {ProjectsList.map((project) => (
                <div key={project.id} className='flex justify-center items-center w-120 my-2 sevd:w-full'>
                    <div className='w-1/2 sevd:hidden'>
                        <img className='h-72 object-cover' src={project.cover} alt="" />
                    </div>
                    <div className='h-full w-1/2 bg-black flex flex-col justify-center items-center text-center -ml-20 mt-20 p-5 sixd:p-3 sixd:h-60 sevd:h-full sevd:m-0 '>
                        <h2 className='text-secol text-2xl'>{project.name}</h2>
                        <p className='text-lg mt-4 sixd:text-base'>{project.minDescription}</p>
                        <button className="button mt-4 text-white border-2 border-secol py-2.5 px-5 transition-all relative text-lg z-10
                        after:content-['_'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full after:bg-black after:-z-20
                        before:content-['_'] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-full before:bg-secol before:transition-all before:duration-500 before:-z-10
                        hover:before:w-full sixd:text-base" onClick={() => openModal(project.id)}>En savoir plus ...</button>
                    </div>
                    {activeProjectId === project.id && (
                        <Modal visible={true} close={closeModal} id={activeProjectId} name={project.name} pictures={project.cover} desc1={project.description1} desc2={project.description2} skills={project.skills} repo={project.repo} site={project.site} />
                    )}
                </div>
            ))}
        </div>
        <Footer/>
    </div>
    )
}
export default Portfolio