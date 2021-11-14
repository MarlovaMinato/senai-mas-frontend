import { Container, Content} from './styles';

nterface HeaderProps {
    onOpenNewActivyModal: () => void;
    onOpenNewCourseUnitModal: () => void;
}

export function Header({onOpenNewActivyModal, onOpenNewCourseUnitModal}:HeaderProps){
    return(
        <Container>
            <Content>
                <h1>My Activies Space</h1>
                <div>
                    <button> 
                        type="button"
                        onClick={onOpenNewCourseUnitModal}
                    >
                        Nova Unidade Curricular
                    </button>
                    <button 
                        type="button"
                        onClick={onOpenNewActivyModal}
                    > 
                        Nova Atividade               
                    </button>
                </div>
                </Content> 
            </Container>
    )
}