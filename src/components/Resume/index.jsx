import { Container } from './styles';
import { ResumeItem } from '../ResumeItem';
import { FaRegArrowAltCircleUp, 
         FaRegArrowAltCircleDown, 
         FaDollarSign 
       } from 'react-icons/fa';

export function Resume({ income, expense, total }){
    return(
        <Container>
            <ResumeItem title="Entradas" Icon={<FaRegArrowAltCircleUp/>} value={income}/>
            <ResumeItem title="Saídas" Icon={<FaRegArrowAltCircleDown/>} value={expense}/>
            <ResumeItem title="Total" Icon={<FaDollarSign/>} value={total}/>
        </Container>
    )
}