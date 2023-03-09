const vremy = prompt('Введите отработанное время: ')
const procent = 8.20*60*1.15
const zarplata = prompt('Введите зарплату: ')
const summa = procent/zarplata
const raznica = vremy - summa

document.getElementById('vremy').innerHTML = vremy
document.getElementById('zarplata').innerHTML = zarplata
document.getElementById('summa').innerHTML = summa
document.getElementById('raznica').innerHTML = raznica
