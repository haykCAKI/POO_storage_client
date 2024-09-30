class Cliente {

    constructor(nome, dataNascimento, cpf, origem, score) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.origem = origem;
        this.score = score;
    }

    validarCliente() {
        if (!this.nome || !this.dataNascimento || !this.cpf || !this.origem || !this.score) {
            console.log('Preencha corretamente o que se pede')
            return false;
        }
        console.log('Os campos foram preenchidos corretamente')
        return true;
    }

    cadastrarCliente() {

        if (this.validarCliente()) {
            let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
            clientes.push(this);
            localStorage.setItem('clientes', JSON.stringify(clientes));
        } else {
            console.log('ERROR: Não foi preenchido corretamente');
        }

    }

    listarClientes() {
        return JSON.parse(localStorage.getItem('clientes')) || [];
    }


}

class Produto {

    constructor(nome, valor, categoria) {
        this.nome = nome;
        this.valor = valor;
        this.categoria = categoria;
    }

    validarProduto() {
        if (!this.nome || !this.valor || !this.categoria) {
            console.log('Error! Validação incompletas')
            return false;
        }
        console.log('Os campos foram preenchidos corretamente')
        return true;
    }


    cadastrarProduto() {
        if (this.validarProduto()) {
            let produto = JSON.parse(localStorage.getItem('produtos')) || [];
            produto.push(this);
            localStorage.setItem('produtos', JSON.stringify(produto)) || [];
            console.log('Validação aceita')
        } else {
            console.log('Ocorreu algum erro na hora da validação')
        }

    }

    listarProtudo() {
        return JSON.parse(localStorage.getItem('produtos')) || [];
    }
}

class Vendedor {

    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }

    validarVendedor() {
        if (!this.nome || !this.matricula) {
            console.log('Preencha como se pede')
            return false;
        }
        console.log('Todos os campos foram preechidos')
        return true;

    }


    cadastrarVendedor() {
        if (this.validarVendedor()) {
            let vendedor = JSON.parse(localStorage.getItem('vendedores')) || [];
            vendedor.push(this);
            localStorage.setItem('vendedores', JSON.stringify(vendedor));
            console.log('Dados preenchidos');
            return true;
        } else {
            console.log('Dados não foram preenchidos corretamente');
            return false;
        }
    }

    listarVendedor() {
        return JSON.parse(localStorage.getItem('vendedores')) || [];
    }

}


class Pedido {

    constructor(clienteCPF, data, vendedorMatricula, produtoNome, valorProduto) {

        this.clienteCPF = clienteCPF;
        this.data = data;
        this.vendedorMatricula = vendedorMatricula;
        this.produtoNome = produtoNome;
        this.valorProduto = valorProduto;
    }

    validarPedidos() {

        if (!this.clienteCPF || !this.data || !this.vendedorMatricula || !this.produtoNome || !this.valorProduto) {
            console.log('Informe corretamente os valores pedidos')
            return false;
        }
        console.log('Os valores foram preenchidos corretamente')
        return true;
    }

    cadastrarPedido() {
        if (this.validarPedidos()) {
            let pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
            pedidos.push(this);
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
            console.log('Dados mandados com sucesso');
            return true;
        } else {
            console.log('ERROR: aconteceu algo na hora de mandar os dados');
            return false;
        }
    }

    listarPedidos() {
        return JSON.parse(localStorage.getItem('pedidos')) || [];
    }


    exibirPedidos() {
        let clientesP = JSON.parse(localStorage.getItem('clientes')) || [];
        let produtosP = JSON.parse(localStorage.getItem('produtos')) || [];
        let vendedoresP = JSON.parse(localStorage.getItem('vendedores')) || [];
        let pedidosP = JSON.parse(localStorage.getItem('pedidos')) || [];

        let exibirDados = '';

        pedidosP.forEach(pedidos => {

            let cliente;
            let produto;
            let vendedor;

            for (let i = 0; i < clientesP.length; i++) {
                if (clientesP[i].cpf === pedidos.clienteCPF) {
                    cliente = clientesP[i];
                }
            }

            for (let i = 0; i < produtosP.length; i++) {
                if (produtosP[i].nome === pedidos.produtoNome) {
                    produto = produtosP[i];
                    break;
                }
            }

            for (let i = 0; i < vendedoresP.length; i++) {
                if (vendedoresP[i].matricula === pedidos.vendedorMatricula) {
                    vendedor = vendedoresP[i];
                    break;
                }
            }

            if (cliente && produto && vendedor) {
                exibirDados += `<div class="clientePedidos-exibirDados">`;
                exibirDados += `<h3>Pedido de ${cliente.nome}</h3>`
                exibirDados += `<p>Produto: ${produto.nome} - R$ ${produto.valor}</p>`;
                exibirDados += `<p>Vendedor: ${vendedor.nome}</p>`;
                exibirDados += `<p>Data do Pedido: ${pedidosP.data}</p>`;
                exibirDados += `</div>`;
            }

        });

        return exibirDados;
    }
}