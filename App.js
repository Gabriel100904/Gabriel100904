let q1 = document.querySelector('#q1')
let q2 = document.querySelector('#q2')
let q3 = document.querySelector('#q3')
let q4 = document.querySelector('#q4')
let q5 = document.querySelector('#q5')
let q6 = document.querySelector('#q6')
let q7 = document.querySelector('#q7')
let q8 = document.querySelector('#q8')
let q9 = document.querySelector('#q9')
let q10 = document.querySelector('#q10')
let resultado = document.querySelector('#resultado')

let verificar = document.querySelector('#verificar')
verificar.addEventListener('click',verificarResultado)



function verificarResultado(){
    let pontos = 0
    if (q1.value = 'Rio de Janeiro'){
        pontos += 10
    } else {
        pontos -= 5
    }

    if (q2.value = 'Ferruccio Lamborghini'){
        pontos += 10
    } else {
        pontos -= 5
    }
    if (q3.value = '1914'){
        pontos += 10
    } else {
        pontos -= 5

    if (q4.value = 'Ferdinand Porsche'){
        pontos += 10
    } else {
            pontos -= 5

    if (q5.value = 'Tom Holland'){
            pontos += 10
    } else {
            pontos -= 5
    if (q6.value = 'Magnavox Odyssey'){
             pontos += 10
    } else {
             pontos -= 5
               
     if (q7.value = 'Martin Cooper'){
        pontos += 10
    } else {
        pontos -= 5
        if (q8.value = 'Henry Ford'){
            pontos += 10
        } else {
            pontos -= 5

            if (q9.value = 'Martin Goodman'){
                pontos += 10
            } else {
                pontos -= 5
     if (q10.value = 'Malcolm Wheeler-Nicholson'){
            pontos += 10
    } else {
            pontos -= 5
           
            resultado.innerHTML = "<h3>Resultado</h3> <br> Pontos: " + pontos
} verificar
