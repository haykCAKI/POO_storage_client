
document.getElementById('cadastrarCliente-Btn').addEventListener('click', () => {
    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('dataDeNascimento').value;
    let cpf = document.getElementById('cpf').value;
    let origem = document.getElementById('origem').value;
    let score = document.getElementById('score').value;

    const novoCliente = new Cliente(nome, dataNascimento, cpf, origem, score);
    novoCliente.cadastrarCliente();

    console.log(novoCliente);

    document.getElementById('formularioCliente').reset();
});

document.getElementById('cadastrarProduto-Btn').addEventListener('click', () => {
    let nome = document.getElementById('nomeProduto').value;
    let valor = parseFloat(document.getElementById('valorProduto').value);
    let categoria = document.getElementById('categoria').value;


    const novoProduto = new Produto(nome, valor, categoria);
    novoProduto.cadastrarProduto();

    console.log(novoProduto);

    document.getElementById('formularioProduto').reset();
});


document.getElementById('cadastrarVendedor-Btn').addEventListener('click', () => {
    let nome = document.getElementById('nomeVendedor').value;
    let matricula = document.getElementById('matricula').value;

    const novoVendedor = new Vendedor(nome, matricula);
    novoVendedor.cadastrarVendedor();

    console.log(novoVendedor);

    document.getElementById('formularioVendedor').reset();
})

document.getElementById('cadastrarPedido-Btn').addEventListener('click', () => {

    let pedidoCPF = document.getElementById('pedidoCliente').value;
    let dataPedido = document.getElementById('dataPedido').value;
    let vendedorPedido = document.getElementById('vendedorPedido').value;
    let produtoPedido = document.getElementById('produtoPedido').value;
    let valorPedido = parseFloat(document.getElementById('valorPedido').value);

    let novoPedido = new Pedido(pedidoCPF, dataPedido, vendedorPedido, produtoPedido, valorPedido);
    novoPedido.cadastrarPedido();

    console.log(novoPedido);

    document.getElementById('formularioPedido').reset();


})

document.getElementById('consultarDados-btn').addEventListener('click', () => {
    let mostrarDados = document.getElementById('mostrarDados');

    if (mostrarDados) {
        mostrarDados.innerHTML = '';
    } else {
        console.log('Dados não encontrados')
    }

    const clientes = new Cliente().listarClientes();
    const produtos = new Produto().listarProtudo();
    const vendedor = new Vendedor().listarVendedor();
    const pedidos = new Pedido().listarPedidos();

    mostrarDados.innerHTML += '<h2>Pedidos:</h2>';

    pedidos.forEach(pedido => {

        console.log(pedido);

        let encontrarCliente = clientes.find(clienteP => clienteP.cpf === pedido.clienteCPF);

        let encontrarProduto = produtos.find(produtosP => produtosP.nome === pedido.produtoNome);

        let encontrarVendedor = vendedor.find(vendedorP => vendedorP.matricula === pedido.vendedorMatricula);

        if (encontrarCliente && encontrarProduto && encontrarVendedor) {
            mostrarDados.innerHTML += `
                <div class="encontrarPedidos">
                    <h4>Pedido de ${encontrarCliente.nome}</h4>
                    <p>CPF do Cliente: ${encontrarCliente.cpf}</p>
                    <p>Origem do Cliente: ${encontrarCliente.origem}</p>
                    <p>Score do Cliente: ${encontrarCliente.score}</p>
                    <p>Produto: ${encontrarProduto.nome}</p>
                    <p>Vendedor: ${encontrarVendedor.nome}, ${encontrarVendedor.matricula}</p>
                    <p>Data do Pedido: ${pedido.data}</p>
                    <p>Valor do Produto: R$${pedido.valorProduto.toFixed(2)}</p>
                </div>`;
        } else {
            console.log(`
                  
                `);
        }
    });

    document.getElementById('consultarDados').style.display = 'block';

})

document.getElementById('limparDados-btn').addEventListener('click', () => {
    document.getElementById('consultarDados').style.display = 'none';
});


document.getElementById('fazerConsulta').addEventListener('click', () => {

    let cpfProcurado = document.getElementById('consultarCPF').value;
    let resultadoConsulta = document.getElementById('resultadoConsulta');

    if (!resultadoConsulta) {
        console.log('ERROR: resultado consulta não foi executado como o esperado')
    } else {
        resultadoConsulta.innerHTML = '';
    }

    if (!cpfProcurado) {
        alert('Por favor, insira um CPF válido.');
        return;
    }

    let clientes = new Cliente().listarClientes();
    let produtos = new Produto().listarProtudo();
    let vendedores = new Vendedor().listarVendedor();
    let pedidos = new Pedido().listarPedidos();

    let cliente = clientes.find(cliente => cliente.cpf === cpfProcurado);
    let pedido = pedidos.find(pedido => pedido.clienteCPF === cpfProcurado);

    let produto = null;
    let vendedor = null;

    if (pedido) {

        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].nome === pedido.produtoNome) {
                produto = produtos[i];
                break;
            }
        }

        for (let i = 0; i < vendedores.length; i++) {
            if (vendedores[i].matricula === pedido.vendedorMatricula) {
                vendedor = vendedores[i];
                break;
            }
        }

        if (!produto || !vendedor) {
            console.log('ERROR: Produto ou Vendedor não encontrados.');
        }
    } else {
        console.log('ERROR: Pedido não encontrado.');
    }


    if (cliente && pedido && produto && vendedor) {
        resultadoConsulta.innerHTML += `
            <div class="consultaEspecificaClientes">
                <p><strong>Nome:</strong> ${cliente.nome}</p>
                <p><strong>CPF:</strong> ${cliente.cpf}</p>
                <p><strong>Produto:</strong> ${produto.nome} - R$ ${produto.valor.toFixed(2)}</p>
                <p><strong>Vendedor:</strong> ${vendedor.nome}, ${vendedor.matricula}</p>
                <p><strong>Data do Pedido:</strong> ${pedido.data}</p>
            </div>
        `;
        document.getElementById('consultaEspefica').style.display = 'block';

    } else {
        console.log(`ERROR: Nenhum dado encontrado para o CPF`);
    }

    document.getElementById('sairConsulta').addEventListener('click', () => {
        document.getElementById('consultaEspefica').style.display = 'none';
    })

});

document.getElementById('resetarDados-btn').addEventListener('click',() => {
    localStorage.clear();

    document.getElementById('mostrarDados').innerHTML = '';

    document.getElementById('consultaEspefica').style.display = 'none';
})