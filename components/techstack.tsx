import TechCard from "./techcard";

export default function TechStack() {
    return (
        <section>
            <h1 className="text-3xl text-center font-bold mb-5">Tecnologias</h1>
            <div className="flex flex-col gap-5">
                <TechCard />
            </div>
        </section>
    )
}