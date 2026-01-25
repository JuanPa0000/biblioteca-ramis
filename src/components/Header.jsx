import { Link } from "react-router";

export default function Header() {

    const headerButtonsList = ['Inici', 'Novetats', 'Calendari', 'Reservar', 'Catàleg'];

    return (
        <div className="flex w-full justify-center m-2">
            <nav className="bg-[var(--principal)] border-[var(--neutro)] rounded-xl shadow-xl">
                <ul className="flex">
                    {headerButtonsList.map((headerButton, index) => {
                        return (
                            <Link 
                            className="rounded-xl text-[var(--fondo)] hover:bg-[--claro] hover:text-[var(--fondo)] pl-5 pr-5 p-2"
                            key={index} to={`${headerButton}`}>{headerButton}</Link>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}