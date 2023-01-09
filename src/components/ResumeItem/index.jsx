import { Container, 
         Header, 
         HeaderTitle, 
         Total 
        } from './styles';

export function ResumeItem({ title, value, Icon }){
    return(
        <Container>
            <Header>
                <HeaderTitle>{title}</HeaderTitle>
                {Icon}
            </Header>
            <Total>{value}</Total>
        </Container>
    )
}