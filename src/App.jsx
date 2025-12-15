import Header from "./components/Header"
import Book from "./components/Book"
import Calendar from "react-calendar"
import './components/Calendar.css';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="flex flex-col gap-2 w-[1200px] lg:flex-row">
        <section className="h-[100vh] w-full bg-[var(--principal)]">
          <h1>Ciencia Ficción</h1>
          <div className="flex flex-wrap">
            <Book bookName={'cienanosdesoledad'}/>
            <Book bookName={'fahrenheit451'}></Book>
            <Book bookName={'elviejoyelmar'}></Book>
            <Book bookName={'1984'}></Book>
            <Book bookName={'elprincipito'}></Book>
            <Book bookName={'lasombradelviento'}></Book>
          </div>
        </section>
        <section className="h-[100vh] w-full lg:w-[50%] bg-[var(--principal)]">
          <Calendar />
        </section>
      </div>
    </div>
  )
}