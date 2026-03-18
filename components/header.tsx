import { Globe, Sun } from "lucide-react";

export default function Header() {
    return (
        <header className="m-auto mt-3 w-6/12 flex justify-between items-center">
            <div>
                <h1>Fernando Bersellini</h1>
            </div>

            <div className="flex gap-3 items-center">
                <nav>
                    <ul className="flex gap-3">
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Tecnologias</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>

                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    <Globe />
                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    <Sun />
                </button>
            </div>

        </header>
    );
}