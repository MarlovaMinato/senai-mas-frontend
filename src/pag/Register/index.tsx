import {FiArrowLeft, FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import { Button } from '../../components/Button'
import {Container, Content, FormContainer, InputContainer, Ba} from './styles';

export function Register(){
    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form action="">
                        <InputContainer>
                            <FiUser size={40}/>
                            <input 
                                type="text"
                                placeholder="Nome" />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}/>
                            <input 
                                type="password"
                                placeholder="Senha" />
                        </InputContainer>
                        <Button> type="submit">Cadastrar</Button>
                    </form>
                    <link to="/">
                        <FiArrowLeft size={40}/>
                        Voltar para login
                    </link>
                </FormContainer>

            </Content>
            <background />
        </Container>
    )
}