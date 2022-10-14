var link_contraste_branco = document.getElementById('contraste_branco')

console.log(link_contraste_branco);

link_contraste_branco.addEventListener('click', function(evento){
    evento.preventDefault()

    // Alterando a cor de fundo do site
    // var site = document.querySelector('body')
    // site.style.backgroundColor = 'white' // #fff

    var todas = document.querySelectorAll('*')

    // Percorrendo todas as tags e alterando a cor de fundo para BRANCO
    todas.forEach(function(tag){
        tag.style.backgroundColor = 'white' // #fff
        tag.style.color = '#000'
    })

});

var link_contraste_preto = document.getElementById('contraste_preto')

console.log(link_contraste_preto);

link_contraste_preto.addEventListener('click', function(evento){
    evento.preventDefault()

    // Alterando a cor de fundo do site
    // var site = document.querySelector('body')
    // site.style.backgroundColor = 'white' // #fff

    var todas = document.querySelectorAll('*')

    // Percorrendo todas as tags e alterando a cor de fundo para PRETO
    todas.forEach(function(tag){
        tag.style.backgroundColor = 'black' // #fff
        tag.style.color = 'rgb(255,255,255)'
    })

});