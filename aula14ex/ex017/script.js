function gerador() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('txttab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var tabnum = Number(num.value)
        tab.innerHTML=''
        for (c =1;c <= 10;c++) {
            var item = document.createElement('option')
            item.text =`${tabnum} x ${c} = ${tabnum*c}`
            item.value=`tab${c}`
            tab.appendChild(item)
        }
    }
}