import TechCard from "./techcard";
import { programmingLanguages, frameworks, databases, tools } from "@/data/stack";

export default function TechStack() {
    return (
        <section className="m-auto mt-3 w-6/12">
            <h1 className="text-3xl text-center font-bold mb-5">Tecnologias</h1>
            <div className="flex gap-5">
                <TechCard category="Linguagens" techs={programmingLanguages}/>
                <TechCard category="Frameworks" techs={frameworks}/>
                <TechCard category="Bancos de Dados" techs={databases}/>
                <TechCard category="Ferramentas" techs={tools}/>
            </div>
        </section>
    )
}