import { Link } from "react-router-dom"

import Menu from "../components/menu"
import Footer from "../components/footer"

const Error = () => {
    return (
        <div className="w-full min-h-screen bg-pricol flex flex-col items-center justify-between">
            <Menu/>
            <h1 className="text-secol text-[288px] mt-24 text-center sixd:text-[144px]">404</h1>
            <p className="text-3xl text-center sixd:text-2xl">Oups, la page que vous demandez n'existe pas !</p>
            <Link to="/" className="text-2xl underline decoration-solid hover:text-secol sixd:text-xl">Retour à la page d'accueil</Link>
            <Footer/>
        </div>
    )
}
export default Error