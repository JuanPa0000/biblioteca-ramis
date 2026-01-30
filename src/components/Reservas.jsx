import { useEffect, useState } from "react";

export default function Reservas() {

    const [reservasList, setReservasList] = useState([]);
    const accessToken = localStorage.getItem('access_token');

    async function getReservasInfo() { // GET reservas de libros
        if(!accessToken) {
            return;
        }

        const res = await fetch("http://127.0.0.1:5000/reservar", {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        const data = await res.json();
        setReservasList(data.msg);
    }

    async function eliminarReserva(reservaId) { // DELETE Reserva de libros
        const response = await fetch(`http://127.0.0.1:5000/reservar?id=${reservaId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        const data = await response.json();
        if(data.msg == "ok") {
            getReservasInfo();
        }
    }

    useEffect(() => {getReservasInfo()}, []);

    return(
        <div className="w-full max-w-[1200px] bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl shadow-2xl items-center">
            <h1 className="text-[var(--principal)] font-bold text-xl p-5">LIBROS RESERVADOS</h1>
            <div className="w-full flex flex-col items-center p-3 gap-5">
                {reservasList.length === 0 ? (
                          <p className="text-[var(--letra)]">No has reservado ningn libro.</p>  
                    ) : 
                    (reservasList.map((reserva, index) => (
                            <div key={index} className="w-full flex justify-between text-[var(--letra)] border-[1px] border-[var(--neutro)] rounded-xl overflow-hidden shadow-md">
                                <div className="flex gap-1">
                                    <img src={`../../public/${reserva[2]}.jpg`} className="w-[6rem] h-auto"/>
                                    <div className="flex flex-col gap-2">
                                        <h2 className="text-xl font-bold">{reserva[1]}</h2>
                                        <p className="">{reserva[3]}</p>
                                        <p className="bg-[var(--claro)] w-fit text-white pl-2 pr-2 p-1 rounded-xl">{reserva[4]}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between p-2">
                                    <p className="bg-[var(--letra)] text-white flex justify-center">{reserva[0].match(/\d{1,2} \w{3} \d{4}/)[0] /*fecha formateada*/}</p>
                                    <button 
                                    onClick={() => {eliminarReserva(reserva[5])}}
                                    className="text-red-400 underline">Cancelar reserva</button>
                                </div>
                            </div>
                    )))
                }
            </div>
        </div>
    )
}