function carregar() {
var data = new Date()
var horas = data.getHours()
var h = document.getElementById('horas')
var res = document.getElementById('res')
var img = document.createElement('img')
var titulo = document.getElementById('titulo')
if (horas >= 5 && horas < 12 ) {
    titulo.innerHTML='Bom dia!'
    img.setAttribute('src', 'manha.png')
    res.appendChild(img)
    document.body.style.background = 'green'
    h.innerHTML =`São ${horas} horas`
    } else if(horas >= 12 && horas < 18) {
        titulo.innerHTML='Boa Tarde!'
        h.innerHTML= `São ${horas} horas.`
        img.setAttribute('src','tarde.png')
        res.appendChild(img)
        document.body.style.background ='#fdbd33'
    } else if(horas >= 18 && horas <= 23 ) {
        titulo.innerHTML='Boa Noite!'
        h.innerHTML=`São ${horas} horas.`
        img.setAttribute('src', 'noite.png')
        res.appendChild(img)
        document.body.style.background ='#040f2d'
        } else {
            titulo.innerHTML= 'Boa Madrugada!'
            h.innerHTML=`São ${horas} horas.`
            img.setAttribute('src', 'madrugada.png')
            res.appendChild(img)
            document.body.style.background = 'black'
    }
h.style.textAlign ='center'
res.style.textAlign = 'center'
}