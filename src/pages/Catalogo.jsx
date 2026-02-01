import { useState, useEffect, useRef } from "react"
import BookHorizontal from "../components/BookHorizontal"
import Header from "../components/Header"
import Book from "../components/Book"
import Reservas from "../components/Reservas"

export default function Catalogo() {

    const tempRef = useRef(null) // Ref temporal que se puede usar para cualquier cosa
    const [catalog, setCatalog] = useState([,]);
    let categorias = ['Novela', 'Ciencia ficción', 'Thriller', 'Distopía', 'Fantasía', 'Terror', 'Fábula', 'Misterio', 'Clásico', 'Romance', 'Suspenso', 'Filosofía', 'Estrategia', 'Histórica', 'Aventura'];
    const [categorySelected, setCategorySelected] = useState("");

    useEffect(() => { // Get a la base de datos para obtener el catalogo
      fetch('http://127.0.0.1:5000/getCatalog', {
        method: 'GET'
      })
      .then(res => res.json())
      .then(data => setCatalog(data['dicc']))
    }, [])

    function scroll(e, num) { // Scroll
      const scrollContainer = e.target.parentElement.parentElement.childNodes[1];
      scrollContainer.scrollBy({
        left: num,
        behavior: 'smooth',
      })
    }

    return(
        <div className="flex flex-col items-center ">
          <Header />
          <div className="flex flex-col gap-2 max-w-[1200px] w-full xl:flex-row">

            <section className="w-full xl:w-[70%] bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl shadow-xl">
              <form>
                <select 
                className="bg-[var(--letra)] text-white pl-2 pr-2 p-1 rounded-xl m-2"
                value={categorySelected} onChange={(e) => {setCategorySelected(e.target.value)}}>
                  <option value={""} >Seleccionar Categoría</option>
                  <option value={"Novela"} >Novela</option>
                  <option value={"Ciencia ficción"} >Ciencia ficción</option>
                  <option value={"Thriller"} >Thriller</option>
                  <option value={"Distopía"} >Distopía</option>
                  <option value={"Fantasía"} >Fantasía</option>
                  <option value={"Terror"} >Terror</option>
                  <option value={"Fábula"} >Fábula</option>
                  <option value={"Misterio"} >Misterio</option>
                  <option value={"Clásico"} >Clásico</option>
                  <option value={"Romance"} >Romance</option>
                  <option value={"Suspenso"} >Suspenso</option>
                  <option value={"Filosofía"} >Filosofía</option>
                  <option value={"Estrategia"} >Estrategia</option>
                  <option value={"Histórica"} >Histórica</option>
                  <option value={"Aventura"} >Aventura</option>
                </select>
              </form>

              {categorySelected === "" ? (
              
              categorias.map((category) => { 
              return (
              <div className="flex flex-col items-center pl-2 pr-2 relative">
                <h1 className="text-xl text-[var(--letra)] font-bold">{category}</h1>
                <div className="flex overflow-x-auto hide-scrollbar w-full border-[var(--principal)]" ref={tempRef}>
                  {catalog.map((bookInfo, index) => {
                    if(bookInfo[1]==category) {
                      return (
                        <Book bookName={bookInfo[0]} key={index}/> 
                    )}})}
                </div>
                  
                <button 
                onClick={(e) => {scroll(e, -150)}}
                className="absolute left-0 top-[40%] text-[2rem] text-[var(--fondo)] pl-2">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button
                onClick={(e) => {scroll(e, 150)}}
                className="absolute right-0 top-[40%] text-[2rem] text-[var(--fondo)] pr-2">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
              )})
              ) : (
                <div className="w-full xl:w-[800px] flex flex-col gap-5">
                  {catalog.map((element) => {
                    if(element[1] == categorySelected) {
                      return (
                        <BookHorizontal bookSlug={element[0]} />
                      )
                    }
                  })}
                </div>
              )}
            </section>
            
            <Reservas />
          </div>

        </div>
    )
}