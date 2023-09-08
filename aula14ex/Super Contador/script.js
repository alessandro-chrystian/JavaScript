function contador() {
    var ini = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var pas = document.getElementById('txtpas')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        res.innerHTML= ''
        res.innerHTML+= 'Contando: '
    } if(p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }
     if (i < f) {
        for(var c = i;c <= f;c+= p) {
            res.innerHTML += `${c} `
        }
    } else {
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} `
        }
    }
}