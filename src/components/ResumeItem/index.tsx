import { ReactElement, ReactNode } from 'react';
import { Container, 
         Header, 
         HeaderTitle, 
         Total 
        } from './styles';

interface ResumeItemProps{
    title: string;
    value: number;
    Icon: ReactElement;
}

export function ResumeItem({ title, value, Icon } : ResumeItemProps){
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