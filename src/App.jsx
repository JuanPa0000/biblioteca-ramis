import Header from "./components/Header"
import Book from "./components/Book"
import Calendar from "react-calendar"
import './components/Calendar.css';
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";

export default function App() {

  const navigate = useNavigate();
  const [catalog, setCatalog] = useState([,]);
  let categorias = ['Novela', 'Ciencia ficción', 'Thriller'/*'Distopía', 'Fantasía', 'Terror', 'Fábula', 'Misterio', 'Clásico', 'Romance', 'Suspenso', 'Filosofía', 'Estrategia', 'Histórica', 'Aventura'*/];

  useEffect(() => { // Get a la base de datos para obtener el catalogo
    fetch('http://127.0.0.1:5000/getCatalog', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setCatalog(data['dicc']))
  }, [])

  const fechasEventos = [
    new Date(2026, 1, 16),
    new Date(2026, 1, 25),
    new Date(2026, 3, 8),
  ];

  function scroll(e, num) { // Scroll
    const scrollContainer = e.target.parentElement.parentElement.childNodes[1];
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

        <section className="w-full xl:w-[70%] bg-[var(--fondo)] flex flex-col border-[1px] border-[var(--neutro)] rounded-xl shadow-xl">

          <div className="flex justify-between w-full mb-20">
            <img src="logo.jpg" className="w-[13rem] sm:w-[20rem]"/>
            <div className="flex flex-col p-10 text-center items-center justify-between">
              <h1 className="text-[var(--principal)] font-bold">Biblioteca Digital IES Joan Ramis i Ramis.</h1>
              <p className="hidden sm:flex text-[var(--letra)]">Este espacio está pensado para que puedas encontrar libros, reservarlos fácilmente y descubrir novedades y actividades del centro.
                 Todo en un solo lugar, rápido y sencillo.</p>
              <button
              className="bg-[var(--letra)] text-white rounded-sm pl-2 pr-2 p-1 hover:bg-[#2e3a59cf] transition"
              onClick={() => {navigate('/nosotros')}}
              >Nosotros</button>
            </div>
          </div>
          <hr />
          <div className="bg-[url(../../public/el-principito-ilustracion-portada-libro-1024x537.jpg)] h-[300px] flex flex-col justify-center items-center gap-5 relative">
            <h1 className="text-2xl text-[var(--principal)] font-bold">El Principito</h1>
            <p className="text-[var(--letra)]">Un niño de otro mundo enseña a ver la vida con otros ojos.</p>
            <button 
            className="bg-[var(--principal)] text-white rounded-sm pl-2 pr-2 p-1 shadow-md shadow-[var(--principal)] hover:bg-[var(--claro)] transition"
            onClick={() => {navigate('/reservar?name=elprincipito')}}
            >Reserva ahora</button>
            <p className="bg-red-500 text-white pl-2 pr-2 p-1 rounded-r-2xl absolute top-0 left-0">Libro de la semana</p>
          </div>

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
              className="absolute left-0 top-[40%] text-[2rem] text-[var(--fondo)] pl-2">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button
              onClick={(e) => {scroll(e, 150)}}
              className="absolute right-0 top-[40%] text-[2rem] text-[var(--fondo)] pr-2">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          )})}

          <div className="flex flex-col p-2 pt-[3rem] pb-[3rem] text-center items-center gap-5 text-[var(--letra)] bg-[var(--neutro)]">
            <p>Contamos con un catálogo de más de 50 libros de diferentes categorías, ¡haz click aqui abajo para reservar uno ya mismo!</p>
            <button 
            onClick={() => {navigate("/catalogo")}}
            className="bg-[var(--letra)] text-white pl-5 pr-5 p-2 font-bold hover:bg-[#2e3a59cf] transition">VER CATÁLOGO COMPLETO</button>
          </div>
        </section>

        <section className="w-full bg-[var(--fondo)] border-[1px] border-[var(--neutro)] rounded-xl shadow-xl ">
        <Calendar
          tileClassName={({ date }) =>
            fechasEventos.some(
              (d) => d.toDateString() === date.toDateString()
            )
              ? "fecha-especial"
              : null
          }
        />
          <div className="flex flex-col text-[var(--letra)] items-center">
            <h1 className="text-white text-lg font-bold p-2 bg-[var(--claro)] w-full flex justify-center">Eventos:</h1>
            <article className="bg-[var(--neutro)] flex flex-col gap-1 border-[1px] border-[var(--letra)] p-1">
              <h2 className="text-black">Taller de robótica - 16-02-2026</h2>
              <p>los estudiantes construirán mini-drones y aprenderán programación básica para hacerlos volar. Una oportunidad práctica para explorar tecnología, trabajo en equipo y creatividad mientras compiten amistosamente por el dron más estable y rápido.</p>
              <img src="Taller-de-robotica-en-el-colegio-Santa-Teresa-Lisieux.jpg" />
            </article>
            <article className="flex flex-col gap-1 border-[1px] border-[var(--letra)] p-1">
              <h2 className="text-black">Concurso de microrrelatos - 25-02-2026</h2>
              <p>los alumnos escribirán historias de máximo 100 palabras sobre amistad o aventuras. Se leerán en voz alta y se premiarán la originalidad y el humor, fomentando la creatividad y la expresión literaria en un ambiente divertido.</p>
              <img src="Literatura-jovenes-y-adultos-1024x512.jpeg" />
            </article>
            <article className="bg-[var(--neutro)] flex flex-col gap-1 border-[1px] border-[var(--letra)] p-1">
              <h2 className="text-black">Jornada científica exprés - 08-04-2026</h2>
              <p>demostraciones de química, retos de física y experimentos sorprendentes preparados por los alumnos. Aprender haciendo, competir sanamente y descubrir que la ciencia también mola fuera del libro.</p>
              <img src="quimica-taller.jpg" />
            </article>
          </div>

          <div>
            <h1 className="text-white text-lg font-bold p-2 bg-[var(--claro)] w-full flex justify-center">Especiales:</h1>
            <img  src="1PFRMq.gif"/>
            <button 
            className="text-[var(--letra)] text-lg p-2 border-[3px] border-[var(--letra)] w-full flex justify-center hover:bg-[var(--letra)] hover:text-white transition"
            onClick={() => {navigate("/reservar?name=donquijotedelamancha")}}
            >Don Quijote de la mancha</button>

            <img  src="b4a9987cff95f26f3242c19c2f89ca44.gif"/>
            <button 
            className="text-[var(--letra)] text-lg p-2 border-[3px] border-[var(--letra)] w-full flex justify-center hover:bg-[var(--letra)] hover:text-white transition"
            onClick={() => {navigate("/reservar?name=losmiserables")}}
            >Los miserables</button>
          </div>
        </section>
        
      </div>
    </div>
  )
}