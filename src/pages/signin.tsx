import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import logo from "../../public/imgs/logo.svg"

export default function SignIn(){
    return(
        <Container>
            <LogoImg src={logo} alt="logo" />
            <h1>Bem vindo ao <span>Meu Time</span>, o seu sabe-tudo de futebol!</h1>
            <FormStyle>
                <input
                type="text"
                placeholder="Digite a sua API Key"
                required
                />
            </FormStyle>
            <Button>Entrar</Button>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #27263d;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Roboto";
    color: white;

    span {
      font-weight: 700;
    }
`

const LogoImg = styled(Image)`
  height: 110px;
  margin-bottom: 32px;
`

const FormStyle = styled.div`
    width: 60%;
    margin-top: 64px;

  input {
    width: 100%;
    height: 42px;
    background: #393654;
    border: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 14px;
    padding-left: 20px;
    outline: 1px solid #393654;
    transition: 0.5s;
    margin-bottom: 24px;
    color: white;
  }

  input:focus {
    outline: 1px solid #504d6d;
  }

  input::placeholder {
    color: white;
  }
`

const Button = styled.div`
    width: 60%;
    height: 42px;
    background: white;
    border: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 16px;
    transition: 0.5s;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #27263d;
    font-weight: 700;
`