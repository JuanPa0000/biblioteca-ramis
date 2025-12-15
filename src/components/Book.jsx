// Se le pasa el nombre del libro como parametro
// lo busca en la db
// Y devuelve el componente renderizado

import { useEffect } from "react";
import { useState } from "react";

export default function Book({bookName}) {

    const [bookInfo, setBookInfo] = useState({});

    useEffect(() => {
        fetch(`http://127.0.0.1:5000/book?name=${bookName}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {setBookInfo(data['dicc'])});
    }, [])

    return (
        <div className="w-[10rem] bg-[var(--neutro)] m-2 h-[25rem] flex flex-col">
            <div className="">
                <img src={`../../public/${bookInfo.slug}.jpg`}  className="w-full"/>
            </div>
            <div className="flex h-full flex-col justify-between p-[0.5rem]">
                <div>
                    <p className="text-[0.8rem] text-[var(--letra)]">{bookInfo.autor}</p>
                    <hr className="border-t-1 border-[var(--letra)] mb-1"/>
                    <p>{bookInfo.name}</p>
                </div>
                <button className="bg-[var(--letra)] text-[var(--neutro)] w-[10rem] p-3 transform translate-x-[-0.5rem] translate-y-[0.5rem]">RESERVAR</button>
            </div>
        </div>
    )
}