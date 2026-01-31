import { useEffect, useState } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router";
import Reservas from "../components/Reservas";

export default function Profile() {

    const [userInfoList, setUserInfoList] = useState([]);

    const navigate = useNavigate();

    useEffect( () => {

        const accesToken = localStorage.getItem('access_token');

        if(!accesToken) {
            navigate("/login");
            return;
        }

        async function getUserInfo() { // GET datos del usuario
            const res = await fetch("http://127.0.0.1:5000/profile", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accesToken}`,
                }
            })
            const data = await res.json();
            setUserInfoList(data);
        }
        getUserInfo();
    }, [])

    
    return(
        <div className="flex flex-col items-center gap-2">
            <Header />
            <section className="w-full max-w-[1200px] bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl shadow-xl">
                
                <div className="bg-[url(../../public/ramis-desde-fuera.jpg)] w-full h-[200px] sm:h-[300px] bg-cover flex flex-col justify-end">
                    <img src="../../public/profile-avatar.webp" className="shadow-xl rounded-[100%] border-4 border-[var(--fondo)] w-[8rem] sm:w-[12rem] transform translate-y-[5rem] sm:translate-y-[7rem]"/>
                </div>

                <div className="pl-[9rem] sm:pl-[13rem] flex text-[var(--letra)] justify-between h-full">
                    <div>
                        <h1 className="font-bold text-[1.3rem] sm:text-[2rem] ">{userInfoList.username}</h1>
                        <p className="text-gray-400">{userInfoList.email}</p>
                        <div className="flex gap-10 text-md sm:text-lg pt-2 pb-2">
                            <p><i className="fa-solid fa-graduation-cap"></i>Aula: <span className="text-black font-bold">{userInfoList.aula}</span></p>
                            <p><i className="fa-solid fa-star"></i>Tutor: <span className="text-black font-bold">{userInfoList.tutor}</span></p>
                        </div>
                    </div>
                    <div className="p-3 flex flex-col justify-between items-end">
                        <button className="w-fit">
                            <i className="fa-solid fa-pencil transition-all duration-200 hover:text-[1.1rem]"></i>
                        </button>
                        <a href="/" className="text-[var(--principal)] underline p-3 hidden sm:flex">{"Ver catálogo >>"}</a>
                    </div>
                </div>
            </section>

            <Reservas />
        </div>
    )
}