import { ActivyTable } from "../../components/ActiveTables";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

import {Container} from './styles'

export function Dashboard(){
    return(
        <>
            <Header />
            <Containers>
                <Summary />
                <ActivyTable />
            </Containers>
            </>
    )
}