function gerador() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('ftab')
    if(num.value == 0) {
        alert('Número não encontrado')
        num.value = ''
        tab.innerHTML =''
    } else {
        var n = Number(num.value)
        tab.innerHTML=''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${c} x ${n} = ${c*n}`
            tab.appendChild(item)
            num.value = ''
            num.focus()
        }
    }
}