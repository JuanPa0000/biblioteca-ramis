import Header from "../components/Header";

export default function Nosotros() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Header />
            <section className="w-full max-w-[1200px] bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl overflow-hidden shadow-xl">
                <div className="w-full bg-[var(--letra)] text-white flex flex-col p-5">
                    <h1 className="text-[2.5rem] font-bold">Sobre nosotros</h1>
                    <div className="flex sm:flex-row flex-col justify-between gap-2">
                        <p className="w-full">La Biblioteca Digital del IES Joan Ramis i Ramis nace con la idea de modernizar el acceso a la lectura y a los recursos educativos del centro, sin perder la esencia de lo que siempre ha sido una biblioteca: un lugar para aprender, descubrir y crecer.

                        Nuestro objetivo es facilitar a alumnos y profesores una herramienta sencilla donde consultar el catálogo, reservar libros y estar al día de novedades y actividades culturales. Queremos que la biblioteca sea algo vivo, no solo una sala con estanterías, sino un punto de encuentro entre el conocimiento y la tecnología.
                        </p>
                        <p className="w-full">
                            Creemos en el valor de los libros, en la educación de calidad y en aprovechar las herramientas digitales para hacer el aprendizaje más accesible. Por eso, esta plataforma combina tradición y futuro: lectura de siempre, gestión moderna.

                            Este proyecto está pensado para toda la comunidad educativa del Ramis: estudiantes, profesorado y personal del centro. Aquí todos tienen su espacio.

                            Porque leer sigue siendo importante. Y ahora, además, es más fácil.
                        </p>
                    </div>
                </div>

                <div
                    className="h-[400px] bg-fixed bg-center "
                    style={{ backgroundImage: "url('/ramis-desde-fuera.jpg')" }}
                />
                
                <div className="flex flex-col text-[var(--letra)] p-5">
                    <h1 className="text-[2.5rem] font-bold">Historia del centro</h1>
                    <div className="flex sm:flex-row flex-col justify-between gap-5">
                        <div className="w-full">
                            <p>
                                 L'ensenyament secundari, o una segona ensenyança entre les primeres lletres i la Universitat, data del segle XIX. El model educatiu de la Revolució francesa (públic, laic, controlat per l'Estat) és el que s'estén arreu d'Europa al llarg del segle. A l'Estat espanyol, aquest procés d'implantació comença el 1812 a les Corts de Cadis per culminar amb la primera Llei General d'Instrucció Pública ─coneguda com a Llei Moyano─ de 9 de setembre de 1857, signada per la reina Isabel II i per Claudio Moyano, ministre de Foment. Abans, el Pla Pidal (Reial Decret de 17 de setembre de 1845) havia suposat l'establiment de les bases legals d'actuació en el tema de l'ensenyament secundari i va ser revalidat i assumit després per la Llei Moyano. Així, es crea un nou tipus d'establiment: l'Institut. I se n'obre un en cada capital de província (dos a Madrid). D'aquesta manera, abans de la meitat de segle, l'Estat espanyol compta amb més de 50 instituts, els anomenats "Provincials" (A Balears, l'anomenat Institut Balear, l'actual Ramon Llull, de Palma). 
                            </p>
                            <img src="/668da78207cea.jpeg"/>
                        </div>
                        <p className="w-full">
                             Maó, però, com que no és capital de província, no pot optar a tenir un Institut. Els alumnes que volien seguir estudis havien de sortir de Menorca i això només s'ho podien permetre uns pocs. Al llarg del segle XIX, queda constància dels esforços dels maonesos per aconseguir-ne un, d'Institut. Però el primer centre d'ensenyament "superior" que varen poder aconseguir és l'Escola de Nàutica, fundada l'any 1855 (Reial Ordre de 15 d'abril de 1855). En principi, s'esperava que suplís la manca de centres d'ensenyament secundari a l'illa (a més d'altres objectius econòmics que es pretenien assolir), però en la pràctica no va tenir l'èxit esperat. Per altra banda, la Llei Moyano (1857) inclourà les escoles de Nàutica com a ensenyaments professionals, especificant el llistat d'establiments acreditats, però la de Maó no hi consta, amb la qual cosa perd el seu status de "superior" i queda reduïda a "elemental". La Llei Moyano (art. 124 i 125) estableix al seu art. 124: "En las poblaciones donde haya Instituto, se refundirán en él las Escuelas elementales que existieran de Industria, Agricultura, Comercio, Náutica u otras de estudios de aplicación de segunda enseñanza". A Maó no hi havia cap Institut on poder-se "refondre", però, a l'art. 125, podem llegir: "En los pueblos donde existan Escuelas de esta clase y no Instituto, se procurará establecerlo, y en tal caso, se estará a lo dispuesto en el artículo anterior". I això és precisament el que s'intenta en el nostre cas: es demana la creació d'un institut justament perquè hi ha una escola de Nàutica. 
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}