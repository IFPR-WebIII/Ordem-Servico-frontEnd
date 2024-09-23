// URL da API de ordens de serviço
const apiUrl = 'http://localhost:8080/ordens'; // Altere para o endpoint correto da sua API

// Função para buscar ordens de serviço
function buscarOrdensServico() {

}

// Função para exibir as ordens de serviço na página
function exibirOrdensServico(ordens) {
    

};


// Função para cadastrar nova ordem de serviço
function cadastrarOrdemServico(ordem) {

}

// Lida com o envio do formulário
const form = document.getElementById('ordemServicoForm');

if (form != null) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Coleta os dados do formulário
        const novaOrdem = {
            descricao: form.descricao.value,
            preco: parseFloat(form.preco.value),
            dataAbertura: form.dataAbertura.value,
            status: form.status.value,
            cliente: {
                email: form.cliente.value // Assume que o cliente é identificado por email
            }
        };
    
        // Chama a função para cadastrar a nova ordem
        cadastrarOrdemServico(novaOrdem);
    
        // Limpa o formulário após o envio
        form.reset();
    });
}



// Chama a função para buscar as ordens de serviço quando a página carrega
window.onload = fetchOrdensServico;
