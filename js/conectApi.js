async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const dados = await conexao.json();

    return dados;
};


export const conectApi = {
    listaVideos
}
