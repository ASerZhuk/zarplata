const vremy = prompt('Введите время: ') * 60
const procent = (vremy * 15) / 100
const vremy15 = vremy + procent
const summa = Math.round(vremy15 * 8.2)
const tarif = 490
const zarplata = prompt('Введите зарплату: ')
const raznica = summa - zarplata

document.getElementById('vremy').innerHTML = vremy / 60
document.getElementById('zarplata').innerHTML = zarplata
document.getElementById('summa').innerHTML = summa
document.getElementById('raznica').innerHTML = raznica
document.getElementById('trf').innerHTML = (raznica / tarif).toFixed(3)
