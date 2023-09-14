function addAdoption() {
    // Obtenha os valores dos campos
    const adotanteId = document.getElementById('adotante_id').value;
    const animalId = document.getElementById('animal_id').value;
    const dataAdocao = document.getElementById('data_adoção').value;
    const funcionarioId = document.getElementById('funcionario_id').value;
    const observacoes = document.getElementById('observacoes').value;
   
   
   
    if (adotanteId === "" || animalId === "" || dataAdocao === "" || funcionarioId === "") {
        alert("Por favor, preencha todos os campos antes de adicionar uma adoção.");
        return;
    }
    // Crie um novo container de adoção com os dados
    const adoptionContainer = document.createElement('div');
    adoptionContainer.classList.add('container'); // Adicione a classe do CSS para estilização

    // Adicione os elementos HTML dentro do container
    adoptionContainer.innerHTML = `
        <div><strong>Adotante ID:</strong> ${adotanteId}</div>
        <div><strong>Animal ID:</strong> ${animalId}</div>
        <div><strong>Data de Adoção:</strong> ${dataAdocao}</div>
        <div><strong>Funcionário ID:</strong> ${funcionarioId}</div>
        <div><strong>Observações:</strong> ${observacoes}</div>
    `;

    // Adicione o novo container de adoção ao contêiner principal
    const adoptionsContainer = document.getElementById('adoptions-container');
    adoptionsContainer.appendChild(adoptionContainer);

    // Limpe os campos do formulário
    document.getElementById('adotante_id').value = '';
    document.getElementById('animal_id').value = '';
    document.getElementById('data_adoção').value = '';
    document.getElementById('funcionario_id').value = '';
    document.getElementById('observacoes').value = '';
}

function buscarPorData() {
    const dataBuscada = document.getElementById('buscar_data').value;
    
    // Obtém todos os containers de adoção
    const containers = document.querySelectorAll('.container');

    // Itera sobre os containers e mostra apenas os que têm a data correspondente
    containers.forEach(container => {
        const dataAdocao = container.querySelector('div:nth-child(3)').textContent.split(':')[1].trim();

        if (dataAdocao === dataBuscada) {
            container.style.display = 'block'; // Mostra o container
        } else {
            container.style.display = 'none'; // Esconde o container
        }
    });




// Se a busca estiver vazia, mostre todos os containers novamente
if (dataBuscada === "") {
    containers.forEach(container => {
        container.style.display = 'block'; // Mostra todos os containers
    });
}}
