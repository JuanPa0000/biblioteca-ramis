// Se le pasa el nombre del libro como parametro
// lo busca en la db
// Y devuelve el componente renderizado
export default function Book({bookName}) {

    function enviarForm() {
        fetch(`http://127.0.0.1:5000/book?name=${bookName}`, {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => console.log(data['msg']));
    }    

    return (
        <div className="w-[10rem] bg-[var(--claro)] m-2">
            <div className="">
                <img src="../../public/padrericopadrepobre.jpg"  className="w-full"/>
            </div>
            <div>
                <p>Padre rico padre pobre</p>
                <button onClick={() => {enviarForm()}} >Enviar</button>
            </div>
        </div>
    )
}