import ExperienceCard from "./experienceCard";

export default function Experience() {
    return (
        <section className="m-auto">
            <h1 className="text-3xl text-center font-bold mb-5">Experiência</h1>
            <div className="flex flex-col gap-5"> 
                <ExperienceCard />
            </div>
        </section>
    )
}
        