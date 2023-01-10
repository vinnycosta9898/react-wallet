import { Tr, Td} from './styles';

import { FaRegArrowAltCircleUp,
         FaRegArrowAltCircleDown,
         FaTrash
       } from 'react-icons/fa';

export function GridItem({ item, onDelete }){
    return(
        <Tr>
            <Td>{item.desc}</Td>
            <Td>{item.amount}</Td>
            <Td>
                {
                    item.expense ? (
                        <FaRegArrowAltCircleDown color="red"/>
                    ) : (
                        <FaRegArrowAltCircleUp color="green"/>
                    )
                }
            </Td>

            <Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)}/>
            </Td>
        </Tr>
    )
}