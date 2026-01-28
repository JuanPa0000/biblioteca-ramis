import { useRef } from "react";

export default function LoginPage() {

    const formRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault(); //Evita que recargue la pagina
        const email = e.target.email.value;
        const password = e.target.password.value;

        const response = await fetch('http://127.0.0.1:5000/login', { //Post a la API
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({email: email, password: password})
        })
        const data = await response.json(); // Data
        if(data.msg) {
            alert(data.msg);
            formRef.current.reset(); //Vaciar formulario
        } 
        else {
            localStorage.setItem("access_token", data.acces_token); // Guardar token de sesion en el localstorage
            //Redirigir al perfil del usuario
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="flex shadow-xl rounded-[10px] w-[1000px] h-[600px] overflow-hidden">
                <div className="bg-[url(../../public/loginbg.png)] bg-cover bg-no-repeat bg-center w-full flex flex-col justify-end">
                    <h1 className="text-[var(--fondo)] text-[4rem] font-bold flex flex-col pb-[8rem] p-[1rem]">Bienvenido <span>de nuevo!</span></h1>
                </div>
                <div className="bg-[var(--fondo)] p-[3rem] w-full">

                    <form
                    ref={formRef} 
                    onSubmit={(e) => {handleSubmit(e)}}
                    className="flex flex-col justify-center items-center h-full text-[var(--letra)] gap-3">
                        <h1 className="text-[2rem]">Iniciar Sesion</h1>
                        <input placeholder="Email" type="email" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="email"/>
                        <input placeholder="Contraseña" type="password" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="password"/>
                        <div className="flex flex-row-reverse w-fit gap-2">
                            <label htmlFor="recordarme" >Recordarme</label>
                            <input type="checkbox" id="recordarme"/>
                        </div>
                        <button type="submit" className="w-full bg-[var(--claro)] p-3 rounded-[5px] hover:bg-[var(--principal)]">Iniciar Sesion</button>
                        <p>¿No tienes una cuenta? Crea una <a href="" className="text-[var(--principal)]">aquí</a>.</p>
                    </form>

                </div>
            </div>
        </div>
    )
}