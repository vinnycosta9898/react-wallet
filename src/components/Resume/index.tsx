import { Container } from './styles';
import { ResumeItem } from '../ResumeItem';

export function Resume(){
    return(
        <Container>
            <ResumeItem/>
            <ResumeItem/>
            <ResumeItem/>
        </Container>
    )
}