async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const dados = await conexao.json();

    return dados;
};

async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers : {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} milhões de vizualizações`,
            url: url,
            imagem: imagem,
        })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possivel fazer upload do video.")
    }

    const dados = await conexao.json();

    return dados;
};



async function buscarVideos(termo) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termo}`);
    const dados = await conexao.json();

    return dados;
};

export const conectApi = {
    listaVideos,
    criaVideo,
    buscarVideos
}