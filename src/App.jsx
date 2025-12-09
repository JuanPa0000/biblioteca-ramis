import Header from "./components/Header"
import Book from "./components/Book"

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />

      <div className="flex flex-col gap-2 w-[1000px] lg:flex-row">
        <section className="h-[100vh] w-full bg-[var(--principal)]">
          <h1>Ciencia Ficción</h1>
          <div>
            <Book bookName={'cienanosdesoledad'}/> 
          </div>
        </section>
        <section className="h-[100vh] w-full lg:w-[40%] bg-[var(--principal)]"></section>
      </div>
    </div>
  )
}