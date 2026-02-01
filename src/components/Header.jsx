export default function Header() {

    return (
        <div className="flex w-full justify-center m-2">
            <nav className="bg-[var(--principal)] border-[var(--neutro)] rounded-xl shadow-xl">
                <ul className="flex">
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-5 pr-5 p-2 cursor-pointer"><a href="/">Inici</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-5 pr-5 p-2 cursor-pointer"><a href="/novetats">Novetats</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-5 pr-5 p-2 cursor-pointer"><a href="/catalogo">Catàleg</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-5 pr-5 p-2 cursor-pointer"><a href="/nosotros">Història</a></li>
                    <li className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-5 pr-5 p-2 cursor-pointer"><a href="/profile">Perfil</a></li>
                </ul>
            </nav>
        </div>
    )
}