import { Container, 
         Thead, 
         Tbody, 
         Tr, 
         Th 
       } from './styles';
import { GridItem } from '../GridItem';

export function Grid({ items, setItems }){
    
    function onDelete( id ){
        const newArray = items.filter((transaction) => transaction.id !== id);
        setItems(newArray);
        localStorage.setItem("transactions", JSON.stringfy(newArray));
    }
    return(
        <Container>
            <Thead>
                <Tr>
                    <Th width={40}>Descricao</Th>
                    <Th width={40}>Valor</Th>
                    <Th width={10} alignCenter>
                        Tipo
                    </Th>
                    <Th width={10}></Th>
                </Tr>
            </Thead>

            <Tbody>
                {
                    items?.map((item, index) => (
                        <GridItem key={index} item={item} onDelete={onDelete}/>
                    ))
                }
            </Tbody>
        </Container>
    )
}