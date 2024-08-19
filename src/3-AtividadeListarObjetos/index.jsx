// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: 'The legend of Zelda: Ocarina of time',
            preco: "R$ 45,00"
        },
        {
            id:2,
            nome: "The legend of Zelda: Majora's Mask",
            preco: "R$ 45,00"
        },
        {
            id:3,
            nome: "The legend of Zelda: Twiligth Princess",
            preco: "R$ 50,00"
        },
    ]);
       
    return(
        <div>
            <h1>Jogos Zelda</h1>
           
                {
                listaProdutos.map(produto => (
                    <div key={produto.id}>
                       <p>{produto.nome}</p>
                       <p>{produto.preco}</p>
                    </div>
                ))};
       
        </div>
    
    );
    }