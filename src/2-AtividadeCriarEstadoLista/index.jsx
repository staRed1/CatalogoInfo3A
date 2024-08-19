// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {

    const[listaProdutos, setProdutos] = useState([
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
           
        </div>
    
    );
    }


