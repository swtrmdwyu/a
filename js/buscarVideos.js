import { conectApi } from "./conectApi.js";
import constroiCard from "./mostrarVideos.js";

const termo = document.querySelector("[data-pesquisa]").value;

async function buscarVideo(evento) {
    evento.preventDefault();

    const termo = document.querySelector("[data-pesquisa]").value;
    const busca = await conectApi.buscarVideos(termo);
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    };

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ));

    if (busca.lenght == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
    };
};


const btnPesquisa = document.querySelector("[data-btn-pesquisa]");

btnPesquisa.addEventListener("click", evento => buscarVideo(evento));
