export default function ExperienceCard() {
    return (
        <div className="m-auto p-3 border rounded-md flex flex-col gap-5 w-3/4">
            <div>
                <h1>Enova Educacional</h1>
                <h1>Estagiario de desenvolvimento fullstack</h1>
                <h1>Nov 2025 - Mar 2026</h1>
            </div>
            <div className="flex flex-col gap-2">
                <p>Desenvolvimento de software, com foco em desenvolvimento web e mobile. Atuação em projetos de software com tecnologias como React, Node.js, PostgreSQL e React Native.</p>
                <h1>Principais tecnologias utilizadas</h1>
                <div className="flex gap-2">
                    <TechBadge name="NextJS"/>
                    <TechBadge name="NestJS"/>
                    <TechBadge name="PostgreSQL"/>
                    <TechBadge name="TypeScript"/>
                    <TechBadge name="Docker"/>
                </div>
            </div>
        </div>
    )
}

export function TechBadge({ name }: { name: string }) {
    return (
        <span className="bg-gray-700 text-white px-2 py-1 rounded-md">{name}</span>
    )
}