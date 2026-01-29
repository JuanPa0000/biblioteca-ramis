import { useEffect } from "react"
import Header from "../components/Header"
import { useNavigate } from "react-router";

export default function Profile() {

    const navigate = useNavigate();

    useEffect( () => {

        const accesToken = localStorage.getItem('access_token');

        if(!accesToken) {
            navigate("/login");
            return;
        }

        async function getUserInfo() {
            const res = await fetch("http://127.0.0.1:5000/profile", {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${accesToken}`,
                }
            })
            const data = await res.json();
            console.log(data);
        }
        getUserInfo();
    }, [])
    
    return(
        <div className="flex flex-col items-center ">
            <Header />
            <section className="w-full max-w-[1200px] bg-center bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl shadow-xl">
                
                <div className="bg-[url(../../public/ramis-desde-fuera.jpg)] w-full h-[300px] bg-cover flex flex-col justify-end">
                    <img src="../../public/profile-avatar.webp" className="w-full shadow-xl rounded-[100%] border-4 border-[var(--fondo)] w-[12rem] transform translate-y-[7rem]"/>
                </div>

                <div>

                </div>
            </section>
        </div>
    )
}