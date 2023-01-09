import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;

    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;

    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px;

    @media (max-width: 750px){
        display: grid;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`

`

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 15px;

    padding: 5px 10px;
    outline: none;
`

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        accent-color: #000;
        margin-left: 20px;
        margin-top: 0;
    }
`

export const Button = styled.button`
    background-color: teal;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;

`