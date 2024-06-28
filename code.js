const vremy = prompt('Введите отработанное время: ')
const procent = 10*60*1.15
const zarplata = prompt('Введите зарплату: ')
const summa = (zarplata/procent).toFixed(1)
const raznica = (vremy - summa).toFixed(1)

document.getElementById('vremy').innerHTML = vremy
document.getElementById('zarplata').innerHTML = zarplata
document.getElementById('summa').innerHTML = summa
document.getElementById('raznica').innerHTML = raznica
