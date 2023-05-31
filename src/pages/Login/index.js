import { useNavigate } from "react-router-dom";
import  { useState } from 'react';

function Login() {    

    // Dynamic page redirect function
    let navigate = useNavigate();
    function Navigation(page) {
        let path = `/${page}`
        navigate(path)
    }

    // read input email and password
    const [valueEmail, setValueEmail] = useState('');
    const [valuePassword, setValueSenha] = useState('');

    const readChangeEmail = (event) => {
        setValueEmail(event.target.value);
    };
    const readChangePassword = (event) => {
        setValueSenha(event.target.value);
    };

    // Check login function
    function checkLogin(){
        if(valueEmail === 'caquito@gmail.com' && valuePassword === '123456'){
            alert('Bem vindo xuxu')
            Navigation('home')

        } else if (valueEmail !== 'caquito@gmail.com' && valuePassword === '123456') {
            alert('Email errado, por favor insira o email cadastrado')
        } else if (valueEmail === 'caquito@gmail.com' && valuePassword !== '123456') {
            alert('Senha errada, por favor insira a senha correta')
        } else {
            alert('Email não cadastrado, por favor cadastre o email para ter acesso')
        }
    };


    return (
        <div>
           <h2> Bem vindo ao Caquito.com </h2>
            <div className="flexSup globalInputLogin">
                <div className="flexSup formLogin">
                    <small>E-mail</small>
                    <input value={valueEmail} onChange={readChangeEmail} type='text' placeholder="Digite o seu e-mail" />
                </div>
                <div className="flexSup formLogin">
                    <small>Senha</small>
                    <input type='password' value={valuePassword} onChange={readChangePassword} placeholder="Digite sua senha" />
                </div>
                <div className="flexSup">
                    <button onClick={() => checkLogin()}>Entrar</button>  
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