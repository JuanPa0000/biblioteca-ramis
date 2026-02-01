import { useNavigate } from "react-router";

export default function Header() {

    const accessToken = localStorage.getItem("access_token");
    const navigate = useNavigate();

    function cerrarSesion() {
        localStorage.clear();
        navigate("/login")
    }

    return (
        <div className="flex w-full justify-center m-2 gap-1">
            <nav className="bg-[var(--principal)] border-[var(--neutro)] rounded-xl shadow-xl">
                <ul className="flex">
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-4 pr-4 p-2 cursor-pointer"><a href="/">Inici</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-4 pr-4 p-2 cursor-pointer"><a href="/novetats">Novetats</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-4 pr-4 p-2 cursor-pointer"><a href="/catalogo">Catàleg</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-4 pr-4 p-2 cursor-pointer"><a href="/nosotros">Història</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-4 pr-4 p-2 cursor-pointer"><a href="/profile">Perfil</a></li>
                </ul>
            </nav>
            <button 
            className="bg-[var(--principal)] border-[var(--neutro)] rounded-xl pr-2 pl-2 shadow-2xl hover:bg-[--claro] hover:text-[var(--fondo)]"
            onClick={() => {cerrarSesion()}}>
                <i className="fa-solid fa-right-to-bracket text-white text-lg transition"></i></button>
        </div>
    )
}