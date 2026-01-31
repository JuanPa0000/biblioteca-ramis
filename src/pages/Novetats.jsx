import Header from "../components/Header";

export default function Novetats() {
    return (
        <div className="flex flex-col items-center gap-2">
            <Header />
            <section className="w-full max-w-[1200px] bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl shadow-xl">
                
                <div className="w-full flex justify-center font-bold p-4">
                    <h1 className="text-2xl text-[var(--principal)]">Novetats</h1>
                </div>

                <article className="flex md:flex-row  flex-col-reverse gap-2 w-full p-2 flex">
                    <img src="../../public/x_jornades_Terol.jpg" className="w-full" />
                    <div className="text-[var(--letra)] md:w-full flex gap-2 flex-col">
                        <h1 className="text-[var(--principal)] text-xl">X Jornades Instituts històrics</h1>
                        <p>Com cada any, del 30 de juny al 3 de juliol de 2016, tindran lloc les X Jornades d’instituts històrics.
                             L’institut organitzador és, en aquest cas, l’IES Vega del Túria de Terol.</p>
                        <p>Com cada any, del 30 de juny al 3 de juliol de 2016, tindran lloc les X Jornades d’instituts històrics.
                             L’institut organitzador és, en aquest cas, l’IES Vega del Túria de Terol.</p>
                    </div>
                </article>

                <article className="flex flex-col md:flex-row w-full p-2 bg-[var(--neutro)] gap-2 ">
                    <div className="text-[var(--letra)] w-full flex flex-col gap-2">
                        <h1 className="text-xl text-[var(--principal)]">Instruments Científics</h1>
                        <p>Acabam de publicar al nostre museu virtual les fitxes de dos instruments científics i les d’una sèrie de fotografies antigues d’Itàlia.
                             Els instruments en qüestió són un opisòmetre del s. XIX i una premsa de contacte de començaments del s. XX. Pel que fa a les fotografies,
                              es tracta d’unes setanta-set còpies a albúmina sobre paper de la segona meitat del s. XIX. Quant a aquestes, volem aprofitar l’ocasió per 
                              agrair la feina realitzada per Natàlia Mercadal, ex-alumna del centre, que durant el curs passat va col·laborar en la seva catalogació, i
                               també la realitzada per Clara Cussó, ex-professora del centre i que de manera voluntària va realitzar la fotografia de les còpies i dugué a 
                               terme les feines per permetre’n la seva conservació. Marga Bennàsar ha coordinat ambdues feines.</p>
                    </div>
                    <img src="IJR_IMG_01_01_DSC0641.jpg" className="w-full" />
                </article>

                <section className="flex flex-col md:flex-row border-[1px] border-black">
                    <article className="w-full p-2 text-[var(--letra)] flex flex-col gap-2">
                        <div>
                            <h1 className="text-[var(--principal)] text-lg">Reconeixement a L'institut Alfonso X El Sabio, de Múrcia</h1>
                            <p>En el B.O.E. de dia 28 de gener de 2016 surt publicada la concessió de la placa d'honor de l'Ordre Civil d'Alfonso X El Sabio a l'
                                 institut Alfonso X de Múrcia.</p>
                            <p>Com diu el B.O.E. : “De acuerdo con lo dispuesto en el Real Decreto 954/1988, de 2 de septiembre, por el que se regula la Orden Civil
                                 de Alfonso X el Sabio, mediante dicha orden se premiará a las personas físicas y jurídicas y a las Entidades que se hayan distinguido</p>
                        </div>
                        <img src="Mecenatge_A_Pallisser.jpg" className="w-full"/>
                    </article>

                    <article className="w-full bg-[var(--neutro)] p-2 text-[var(--letra)] flex flex-col gap-2">
                        <div>
                            <h1 className="text-[var(--principal)] text-lg">L'edifici de institut Ramon Llull fa cent anys</h1>
                            <p>L'institut Ramon Llull, de Palma, està de celebració. Es compleixen cent anys que l'institut va deixar l'antic convent de Monti-Sion —el 25 de gener de 1916—
                                 per passar a ocupar un nou edifici, la seva actual ubicació, a la plaça des Tub.</p>
                            <p>L'institut Ramon Llull és hereu de l'antic Institut Balear, el primer institut provincial de tot l'Estat espanyol, fundat el 1835. El nostre centre, en els seus primers anys
                                 de funcionament, depenia d'aquest institut i va tenir molta relació amb el que va ser el seu primer director, Francesc Manuel de los Herreros.</p>
                        </div>
                        <img src="Crida.jpg" className="w-full" />
                    </article>
                </section>

                <article className="flex flex-col text-[var(--letra)] p-2 items-center gap-2 text-center mt-10">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl text-[var(--principal)]">La feina d'aquest curs</h1>
                        <p>Arribades aquestes dates, actualitzem la web del nostre museu virtual amb la feina realitzada al llarg del curs 2013-14 per la comissió
                             de l'arxiu i patrimoni històric de l'institut.</p>
                        <p>
                            Hem afegit dues fotos de dos professors i directors de l'institut a l'apartat Història: Galeria professors i alumnes. Hem ampliat les 
                            col·leccions d'instruments científics i de cartografia, així com hem seguit incorporant alguns vídeos d'instruments en funcionament: 
                            Aparell per demostrar l'aixatament de la terra, Hemisferis de Magdebourg, Telègraf, Aparell de Chladni, Banc d'òptica, Generador elèctric,
                             Doble conus de Nollet i Mesurador trigonomètric.
                        </p>
                        <p>La novetat que presentam aquest curs és l'inici de la catalogació de les làmines d'Història Natural.</p>
                    </div>
                    <div className="w-full max-w-[800px]">  
                        <img src="IJR-HN-LAM-01-09.jpg" className="w-full" />
                    </div>
                </article>


            </section>
        </div>
    )
}