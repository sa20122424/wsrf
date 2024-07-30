let arr = [`Gilos`, `Olma`, `Banan`, `Nok`]
alert ("Arryning uzunligi: "+ arr.length)

let confirmation = confirm("Ok ni bosing agar arrylardan birino yo'q qilishni hohlasangiz!")

if (confirmation) {
    arr.pop()
    alert ("Sizdan arry olib tashlandi va sizda qoldi: "+ arr.length)
}else {
    alert ("Arry o'chirilmadi: "+ arr.length)
}