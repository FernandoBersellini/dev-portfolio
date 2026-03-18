export default function HeroSection() {
    return (
        <section className="m-auto mt-3 w-5/12 flex flex-col gap-5">
            <h1 className="text-4xl font-bold text-center">Desenvolvedor Fullstack</h1>
            <p className="text-center">Sou um desenvolvedor fullstack com experiência em desenvolvimento de software, graduando em Engenharia de Software. Minha stack principal é composta por NextJs para o frontend, NestJs para o backend e PostgreSQL para o banco de dados .</p>

            <div className="flex justify-center gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Contato</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Projetos</button>
            </div>
        </section>
    )
}