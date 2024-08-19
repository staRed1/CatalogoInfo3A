// Dentro do componente, crie a função `removerItemPedidos`.
// A função recebe um parâmetro `id`, que é o identificador do item a ser removido.
// Crie uma variável `listaAux` para armazenar a lista filtrada sem o item com o `id` fornecido.
// Utilize `setListaPedidos` para atualizar o estado com a nova lista filtrada.
// Exemplo: `setListaPedidos(listaAux);`

import { useState } from "react";

export default function Home() {
    const [listaProdutos, setProdutos] = useState([
        {
            id: 1,
            nome: 'The Legend of Zelda: Ocarina of Time',
            preco: "R$ 45,00"
        },
        {
            id: 2,
            nome: "The Legend of Zelda: Majora's Mask",
            preco: "R$ 45,00"
        },
        {
            id: 3,
            nome: "The Legend of Zelda: Twilight Princess",
            preco: "R$ 50,00"
        },
    ]);

    const [listaPedidos, setListaPedidos] = useState([]);

    const adicionarItemPedidos = (objeto) => {
        setListaPedidos([...listaPedidos, objeto]);
    };

    const removerPedidos = (id) => {
        let remover = false;
        const listaAux = listaPedidos.filter((produto) => {
            if (!remover && produto.id === id) {
                remover = true;
                return false; // Não incluir este item na nova lista
            }
            return true; // Incluir os outros itens na nova lista
        });
        setListaPedidos(listaAux); // Atualiza a lista de pedidos
    };

    return (
        <div>
            <h1>Jogos Zelda</h1>
            <h2>Lista de Produtos</h2>
            {
                listaProdutos.map(produto => (
                    <div key={produto.id}>
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>
                        <button onClick={() => adicionarItemPedidos(produto)}>Adicionar ao Pedido</button>
                    </div>
                ))
            }
            <h2>Lista de Pedidos</h2>
            {
                listaPedidos.map((produto, index) => (
                    <div key={index}>
                        <p>{produto.nome}</p>
                        <p>{produto.preco}</p>
                        <button onClick={() => removerPedidos(produto.id)}>Remover</button>
                    </div>
                ))
            }
        </div>
    );
}