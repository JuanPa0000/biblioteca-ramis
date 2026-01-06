import Header from "./components/Header"
import Book from "./components/Book"
import Calendar from "react-calendar"
import './components/Calendar.css';
import { useEffect, useState, useRef } from "react";

export default function App() {

  const [catalog, setCatalog] = useState([,]);
  let categorias = ['Novela', 'Ciencia ficción', 'Thriller', 'Distopía', 'Fantasía', 'Terror', 'Fábula', 'Misterio', 'Clásico', 'Romance', 'Suspenso', 'Filosofía', 'Estrategia', 'Histórica', 'Aventura'];

  useEffect(() => { // Get a la base de datos para obtener el catalogo
    fetch('http://127.0.0.1:5000/getCatalog', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setCatalog(data['dicc']))
  }, [])

  function scroll(e, num) { // Scroll
    const scrollContainer = e.target.parentElement.parentElement.childNodes[1];
    console.log(scrollContainer.clientWidth)
    scrollContainer.scrollBy({
      left: num,
      behavior: 'smooth',
    })
  }

  const tempRef = useRef(null) // Ref temporal que se puede usar para cualquier cosa

  return (
    <div className="flex flex-col items-center ">
      <Header />
      <div className="flex flex-col gap-2 max-w-[1200px] w-full xl:flex-row">
        <section className="w-full xl:w-[70%] bg-[var(--principal)] flex flex-col">
          
          {categorias.map((category) => { 
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
              className="absolute left-0 top-[40%] text-[2rem] text-[var(--neutro)] pl-2">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
              onClick={(e) => {scroll(e, 150)}}
              className="absolute right-0 top-[40%] text-[2rem] text-[var(--neutro)] pr-2">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          )})}

        </section>
        <section className="w-full bg-[var(--principal)]">
          <Calendar />
        </section>
      </div>
    </div>
  )
}