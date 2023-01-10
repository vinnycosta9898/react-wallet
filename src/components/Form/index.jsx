import { Container, 
         InputContainer, 
         Label, 
         Input, 
         RadioGroup, 
         Button 
        } from './styles';

import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

export function Form({ handleAdd }){
    
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setIsExpense] = useState(false);

    function handleSave(){
        if(!desc || !amount){
            alert("Informe a descrição e o Valor")
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo")
            return;
        }

        const transaction = {
            id: uuidv4(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transaction)
        setDesc("");
        setAmount("");
    };

    return(
        <Container>
            <InputContainer>
                <Label>Descrição</Label>
                <Input 
                    value={desc} 
                    onChange={(e) => {setDesc(e.target.value)}}
                />
            </InputContainer>

            <InputContainer>
                <Label>Valor</Label>
                <Input 
                    value={amount} 
                    onChange={(e) => {setAmount(Number(e.target.value))}}
                />
            </InputContainer>

            <RadioGroup>
                <Input 
                    type="radio" 
                    id="rIncome" 
                    defaultChecked 
                    name="group1" 
                    onChange={() => setIsExpense(!isExpense)}
                />
                <Label htmlFor="rIncome">Entrada</Label>

                <Input 
                    type="radio" 
                    id="rExpenses"  
                    name="group1" 
                    onChange={() => setIsExpense(!isExpense)}
                />
                <Label htmlFor="rExpenses">Saída</Label>
            </RadioGroup>
            <Button onClick={handleSave}>Adicionar</Button>

        </Container>
    )
}