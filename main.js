const musicas = [
    {
        nome: "A Casa É Sua",
        artista: "Casa Worship",
        genero: "Gospel",
        duracao: "7:12"
    },
    {
        nome: "Todavia Me Alegrarei",
        artista: "Samuel Messias",
        genero: "Gospel",
        duracao: "5:08"
    },
    {
        nome: "Ninguém Explica Deus",
        artista: "Preto no Branco",
        genero: "Gospel",
        duracao: "5:45"
    },
    {
        nome: "Oceanos",
        artista: "Hillsong United",
        genero: "Gospel",
        duracao: "8:56"
    },
    {
        nome: "Lugar Secreto",
        artista: "Gabriela Rocha",
        genero: "Gospel",
        duracao: "6:29"
    },
    {
        nome: "É Tudo Sobre Você",
        artista: "Morada",
        genero: "Gospel",
        duracao: "5:21"
    },
    {
        nome: "Deserto",
        artista: "Maria Marçal",
        genero: "Gospel",
        duracao: "4:37"
    },
    {
        nome: "Raridade",
        artista: "Anderson Freire",
        genero: "Gospel",
        duracao: "4:50"
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let musica of musicas) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${musica.nome}</td>
        <td>${musica.artista}</td>
        <td>${musica.genero}</td>
        <td class="duracao">${musica.duracao}</td>
    `;

    corpoTabela.appendChild(linha);
}