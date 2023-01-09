import { Container, 
         InputContainer, 
         Label, 
         Input, 
         RadioGroup, 
         Button 
        } from './styles';

import { useState } from 'react';

export function Form(){
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
    const [isExpense, setExpense] = useState(false);

    function handleSave(){
        if(!desc || !amount){
            alert("Informe a descrição e o Valor")
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo")
            return;
        }
    }

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
                    onChange={() => setExpense(!isExpense)}
                />
                <Label htmlFor="rIncome">Entrada</Label>

                <Input 
                    type="radio" 
                    id="rExpenses"  
                    name="group1" 
                    onChange={() => setExpense(!isExpense)}
                />
                <Label htmlFor="rExpenses">Saída</Label>
            </RadioGroup>
            <Button onClick={handleSave}>Adicionar</Button>

        </Container>
    )
}