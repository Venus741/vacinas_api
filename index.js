async function conferir_pontos() {
    
    const nome_do_bairro = document.getElementById('lista').value;

    try {
        const response = await fetch(`http://localhost:3000/bairros/${nome_do_bairro}`)
        
        if(!response.ok) {
            throw new error('Erro ao buscar os dados no bairro');

        }

        const data = await response.json();

        document.getElementById('nome').textContent = `Bairro: ${data.nome}`;
        document.getElementById('localidade').textContent = `Localidade: ${data.localidade}`;
        document.getElementById('funcionamento').textContent = `Funcionamento: ${data.funcionamento}`;
        document.getElementById('inicio').textContent = `Início: ${data.inicio}`;
        document.getElementById('termino').textContent = `Término: ${data.termino}`;
        document.getElementById('vacinas').textContent = `Vacinas: ${data.vacinas}`;


    } catch (error) {
        console.error('Erro ao buscar os dados do bairro:', error);
        alert('Erro ao buscar os dados do bairro.');
    }
}