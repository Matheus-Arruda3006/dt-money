import { useEffect, useState } from "react";
import { Header } from "../../Components/header";
import { Summary } from "../../Components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

    
export function Transaction (){

    const [transactions, setTransactions] =useState<Transaction[]>([])

    async function loadTransactions(){
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response .json();
        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions(); 
    }, [])

    return(
     <div>
        <Header/>
        <Summary/>
        <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
            <tbody>
                {transactions.map(transaction => {
                    return(
                        <tr>
                           <td width="50%">{transaction.description}</td>
                            <td> <PriceHighLight variant={transaction.type}>{transaction.price}</PriceHighLight></td>
                            <td>{transaction.category}</td>
                         <  td>{transaction.createdAt}</td>
                        </tr>
                    )
                })}
            </tbody>
        </TransactionsTable>
        </TransactionsContainer>
       
     </div>
    )
}
    