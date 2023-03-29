import { useEffect } from "react";
import { Header } from "../../Components/header";
import { Summary } from "../../Components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction (){

    useEffect(() => {
        fetch('https://localhost:3333/transactions').then(response => {
            response.json().then(data => console.log(data));
        })
    }, [])


    return(
     <div>
        <Header/>
        <Summary/>
        <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
            <tbody>
                <tr>
                    <td width="50%">Desenvolvimento de Site</td>
                    <td> <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight></td>
                    <td>Venda</td>
                    <td>13/03/2023</td>
                </tr>
                <tr>
                    <td width="50%">Whopper</td>
                    <td><PriceHighLight variant="outcome">- R$ 30,00</PriceHighLight></td>
                    <td>Alimentação</td>
                    <td>17/03/2023</td>
                </tr>
            </tbody>
        </TransactionsTable>
        </TransactionsContainer>
       
     </div>
    )
}
    