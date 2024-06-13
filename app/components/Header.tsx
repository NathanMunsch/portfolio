export default function Header() {
    return (
        <header className="flex justify-between items-center bg-white p-4 fixed w-full z-10">
            <h1 className="text-left text-4xl font-bold p-4">
                NM
                <span className="text-target text-2xl text-mainBlue">■</span>
            </h1>
            <nav className="container mx-auto p-4">
                <ul className="flex justify-around">
                    <li><a href="#home" className="text-gray-700 hover:text-black hover:font-bold">Accueil</a></li>
                    <li><a href="#about" className="text-gray-700 hover:text-black hover:font-bold">À propos</a></li>
                    <li><a href="#skills" className="text-gray-700 hover:text-black hover:font-bold">Compétences</a></li>
                    <li><a href="#projects" className="text-gray-700 hover:text-black hover:font-bold">Projets</a></li>
                    <li><a href="#experiences" className="text-gray-700 hover:text-black hover:font-bold">Expériences</a></li>
                    <li><a href="#education" className="text-gray-700 hover:text-black hover:font-bold">Formations</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:text-black hover:font-bold">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}