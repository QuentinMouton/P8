const MentionsLegal = () => {
    function openMention(){
        const container = document.getElementById('mentions')
        if(container.classList.contains('open')){
            container.classList.remove('open')
            container.classList.remove('hidden')
        } else {
            container.classList.add('open')
            container.classList.add('hidden')
        }
    }
    return (
        <div className="text-center h-4/5 ">
            <button className="hover:text-secol" onClick={openMention}>Mentions légales</button>
            <div id="mentions" className="open hidden bg-tricol px-5 py-6 fixed bottom-0 left-[16.5%] w-2/3 z-50 sixd:w-4/5 sixd:left-[10%] sevd:overflow-y-scroll sevd:h-4/5">
                <div className="flex justify-center">
                    <h1 className="text-center text-3xl mt-2 sevd:text-2xl">Mentions légales</h1>
                    <button className="absolute top-3 right-4 hover:text-secol" onClick={openMention} aria-label="bouton fermer" ><i className="fa-solid fa-xmark fa-2xl"></i></button>
                </div>
                <div className="text-justify">
                    <h2 className="underline decoration-solid text-xl">Propriétaire du site :</h2>
                    <p className="mb-2"><strong>MOUTON Quentin</strong></p>
                    <h2 className="underline decoration-solid text-xl">Hébergement :</h2>
                    <p className="mb-2">o2switch : Chemin des Pardiaux 63000 Clermont-Ferrand</p>
                    <h2 className="underline decoration-solid text-xl">Texte Droits D'accès Mentions Légales :</h2>
                    <p className="mb-2">Le site <strong>quentinm-dev.fr</strong> ne conserve, ne stocke aucune donnée personnelle concernant ses visiteurs.</p>
                    <h2 className="underline decoration-solid text-xl">Propriété Intellectuelle :</h2>
                    <p>Toute reproduction ou diffusion totale ou partielle du site <strong>quentinm-dev.fr</strong> sans l'autorisation expresse du directeur de publication, est interdite. Le contenu est disponible pour un usage privé et non collectif. Nous nous réservons le droit de modifier le contenu de ce site web de toutes les façons que ce soit, à tout moment et pour n'importe quelle raison, et ce, sans notification préalable particulière. Nous nous engageons à ne pas vendre ou distribuer vos données personnelles à tout autre organisme.</p>
                </div>
            </div>
        </div>
    )
}
export default MentionsLegal