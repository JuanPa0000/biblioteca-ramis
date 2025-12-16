import Header from "./components/Header"
import Book from "./components/Book"
import Calendar from "react-calendar"
import './components/Calendar.css';
import { useEffect, useState } from "react";

export default function App() {

  const [catalog, setCatalog] = useState([,]);
  
  let categorias = ['Novela', 'Ciencia ficción', 'Distopía', 'Fábula', 'Misterio', 'Fantasía', 'Clásico', 'Terror', 'Romance', 'Suspenso', 'Thriller', 'Filosofía', 'Estrategia', 'Histórica', 'Aventura'];

  useEffect(() => {
    fetch('http://127.0.0.1:5000/getCatalog', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setCatalog(data['dicc']))
  }, [])

  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-2 max-w-[1200px] lg:flex-row">
        <section className="h-full w-full bg-[var(--principal)] flex flex-col gap-20">
          
          {categorias.map((category) => { return (
            <div className="flex flex-col items-center">
              <h1 className="text-xl text-[var(--letra)] font-bold">{category}</h1>
              <div className="flex flex-wrap justify-center">
                {catalog.map((bookInfo, index) => {
                  if(bookInfo[1]==category) {
                    return (
                      <Book bookName={bookInfo[0]} key={index}/> 
                  )}})}
              </div>
            </div>
          )})}

        </section>
        <section className="h-[100vh] w-full lg:w-[50%] bg-[var(--principal)]">
          <Calendar />
        </section>
      </div>
    </div>
  )
}