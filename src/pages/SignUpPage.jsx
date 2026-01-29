import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUpPage() {
    
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const repeatedPassword = e.target.repeat_password.value;
        const aula = e.target.aula.value;
        const tutor = e.target.tutor.value;

        if(password != repeatedPassword) {
            setErrorMsg("Las contraseñas no coinciden");
            return null;
        }

        const response = await fetch('http://127.0.0.1:5000/sign-up', { //Post a la API
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({name: name, email: email, password: password, aula: aula, tutor: tutor})
        })
        const data = await response.json(); // Data
        
        if(data.msg != 'ok') {
            setErrorMsg(data.msg);
        }
        else {
            alert("Usuario registrado con exito");
            navigate('/login');
        }
    }
    
    return (
        <div className="flex justify-center items-center h-[100vh] md:p-0 p-4">
            <div className="flex shadow-xl rounded-[10px] w-[1000px] h-[600px] overflow-hidden">
                <div className="bg-[url(../../public/loginbg.png)] bg-cover bg-no-repeat bg-center w-full hidden md:flex flex-col justify-end">
                    <h1 className="text-[var(--fondo)] text-[4rem] font-bold flex flex-col pb-[8rem] p-[1rem]">Biblioteca <span>IES Joan Ramis</span></h1>
                </div>
                <div className="bg-[var(--fondo)] p-[3rem] w-full">

                    <form
                    onSubmit={(e) => {handleSubmit(e)}}
                    className="flex flex-col justify-center items-center h-full text-[var(--letra)] gap-3">
                        <h1 className="text-[2rem]">Registrarse</h1>
                        <input placeholder="Nombre" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="name"/>
                        <input placeholder="Email" type="email" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="email"/>
                        <input placeholder="Contraseña" type="password" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="password"/>
                        <input placeholder="Repite la Contraseña" type="password" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="repeat_password"/>
                        <div className="flex w-fit gap-2">
                            <input placeholder="Nº Aula" type="number" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="aula"/>
                            <input placeholder="Tutor" className="border-[1px] rounded-[5px] border-[var(--letra)] w-full p-3" required id="tutor"/>
                        </div>
                        <button type="submit" className="w-full bg-[var(--claro)] p-3 rounded-[5px] hover:bg-[var(--principal)]">Registrarse</button>
                        <p>¿Ya tienes una cuenta? Inicia Sesión <a href="/login" className="text-[var(--principal)]">aquí</a>.</p>
                        <p className="text-red-400">{errorMsg}</p>
                    </form>

                </div>
            </div>
        </div>
    )
}