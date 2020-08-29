function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.getElementById('foto')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Informações incorreta!!`)

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menino.png')
            } else if (idade > 12 && idade < 60) {
                img.setAttribute('src', 'adulto.jpeg')
            } else {
                img.setAttribute('src', 'velho.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src', 'menina.jpg')
            } else if (idade > 12 && idade < 60) {
                img.setAttribute('src', 'adulta.jpg')
            } else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
        res.appendChild(img)
    }
}