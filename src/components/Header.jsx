export default function Header() {

    const headerButtonsList = ['Inici', 'Novetats', 'Calendari', 'Reservar', 'Catàleg'];

    return (
        <div className="flex w-full justify-center m-2">
            <nav className="bg-[var(--principal)] rounded-[1rem]">
                <ul className="flex">
                    {headerButtonsList.map((headerButton, index) => {
                        return (
                            <button 
                            className="rounded-[1rem] hover:bg-[--claro] pl-5 pr-5 p-2"
                            key={index}>{headerButton}</button>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}