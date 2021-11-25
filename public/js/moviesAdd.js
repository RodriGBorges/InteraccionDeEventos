window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    const input = document.querySelector('#titulo')
    let estadoSecreto = 0

    const key = (key) => {
        switch (true) {
            case estadoSecreto === 0 && key.toLowerCase() === 's':
                estadoSecreto++
                break;
            case estadoSecreto === 1 && key.toLowerCase() === 'e':
                estadoSecreto++
                break;
            case estadoSecreto === 2 && key.toLowerCase() === 'c':
                estadoSecreto++
                break;
            case estadoSecreto === 3 && key.toLowerCase() === 'r':
                estadoSecreto++
                break;
            case estadoSecreto === 4 && key.toLowerCase() === 'e':
                estadoSecreto++
                break;
            case estadoSecreto === 5 && key.toLowerCase() === 't':
                estadoSecreto++
                break;
            case estadoSecreto === 6 && key.toLowerCase() === 'o':
                estadoSecreto = 0
                alert('SECRETO MÁGICO')
                break;
        
            default:
                estadoSecreto = 0
                break;
        }
    }

    input.addEventListener('keypress', (e) => {
        key(e.key)
    })

}