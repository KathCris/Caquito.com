import { useNavigate } from "react-router-dom";

function Login() {    

    let navigate = useNavigate();
    function Navigation(page) {
        let path = `/${page}`
        navigate(path)
    }


    return (
        <div>
           <h2> Bem vindo ao Caquito.com </h2>
            <div className="flexSup globalInputLogin">
                <div className="flexSup formLogin">
                    <small>E-mail</small>
                    <input type='text' placeholder="Digite o seu e-mail" />
                </div>
                <div className="flexSup formLogin">
                    <small>Senha</small>
                    <input type='password' placeholder="Digite sua senha" />
                </div>
                <div className="flexSup">
                    <button>Entrar</button>  
                </div>
            </div>
            <div className="flexSup globalRegister">
                <button onClick={() => Navigation('register')}>Cadastrar</button>
            </div>
            <div className="flexSup globalForgotPassword">
                <button onClick={() => Navigation('forgotPassword')}>Esqueci minha senha</button>
            </div>
        </div>
    )
}

export default Login;