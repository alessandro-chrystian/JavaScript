function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#a1a028'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#efab6d'
    } else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#353b4d'
    }
}