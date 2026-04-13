interface TechCardProps {
    category: string;
    techs: string[];
}

export default function TechCard({category, techs}: TechCardProps) {
    return (
        <div className="p-3 border rounded-md flex flex-col gap-5 w-3/4">
            <h1 className="text-center">{category}</h1>
            <div className="flex flex-col gap-2">
                {techs.map((tech) => (
                    <span key={tech}>{tech}</span>
                ))}
            </div>
        </div>
    )
} 