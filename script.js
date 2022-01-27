let comentArea = document.querySelector('.comment-area')
// array com todas publicações
let publicacoes = []
// função para limpar todo o campo do comentario
async function limpar(){
    comentArea.innerHTML = ""
    i = 0
}
// função para publicar o comentario dentro da div "comment-area"

async function publicar(autor, comentario){
    // colocando cada publicação pro array com as publicações
    publicacoes.push({autor:autor, comentario: comentario})

    // criando id para cada comentario baseado na quantidade de items do array 'publicacoes'
    let i = 0
    while(i < publicacoes.length){
        i++
    }
    // validando se o campo comentario está vazio.
    if(comentario == ''){
        alert('Você precisa inserir um comentário.')
    }
    // validando se o campo do autor está vazio
    // caso esteja, o nome do autor ficará como anonimo
    else if(autor == ''){

        comentArea.innerHTML += `
            <div id="${i}" class="content-area">
                <div class="comment">
                    <h4>Autor: anonimo</h4>
                    <hr>
                    <p><strong>Comentario:</strong> ${comentario}</p>
                </div>
                <input  class="btn" type="button" value="Excluir" onclick="excluirComentario(${i})">
            </div>`
        
    }
    // se nenhum campo estiver vazio...
    else{
        comentArea.innerHTML += `
        <div id="${i}" class="content-area">
            <div class="comment">
                <h4>Autor: ${autor}</h4>
                <hr>
                <p><strong>Comentario:</strong> ${comentario}</p>
            </div>
            <input class="btn" type="button" value="Excluir" onclick="excluirComentario(${i})">
        </div>`
    }
}
// função para excluir o proprio comentario
function excluirComentario(id){
    let apagar = document.getElementById(`${id}`)
    apagar.parentNode.removeChild(apagar)
}




