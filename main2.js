
const app2 = document.getElementById('app2')
const gora = document.createElement('div')
const ikona1 = document.createElement('i')
const h2 = document.createElement('h2')
const ikona2 = document.createElement('i')
const divNav = document.createElement('div')
const nav = document.createElement('nav')
const divNav2 = document.createElement('div')
const a = document.createElement('a')
const a1 = document.createElement('a')
const a2 = document.createElement('a')
const div = document.createElement('div')
const ikona3 = document.createElement('i')
const divBurki = document.createElement('div')
const divzdj = document.createElement('div')
const h3 = document.createElement('h2')
const piesdiv = document.createElement('div')
const burek1 = document.createElement('img')

const divZdj2 = document.createElement('div')
const h3Zdj2 = document.createElement('h2')
const divImg = document.createElement('div')
const burek2 = document.createElement('img')

const divZdj3 = document.createElement('div')
const h3Zdj3 = document.createElement('h2')
const divImg2 = document.createElement('div')
const burek3 = document.createElement('img')

const divZdj4 = document.createElement('div')
const h3Zdj4 = document.createElement('h2')
const divImg3 = document.createElement('div')
const burek4 = document.createElement('img')

const divZdj5 = document.createElement('div')
const h3Zdj5 = document.createElement('h2')
const divImg4 = document.createElement('div')
const burek5 = document.createElement('img')

const divZdj6 = document.createElement('div')
const h3Zdj6 = document.createElement('h2')
const divImg5 = document.createElement('div')
const burek6 = document.createElement('img')

const footer = document.createElement('footer')
const divfooter = document.createElement('div')
const inp1 = document.createElement('input')
const divfooter2 = document.createElement('div')
const inp2 = document.createElement('input')
const inp3 = document.createElement('input')
const divfooter4 = document.createElement('div')
const inp4 = document.createElement('input')


app2.appendChild(nav)
nav.appendChild(divNav2)
divNav2.appendChild(a)
a.innerText = "O NAS"
a.setAttribute('href' , 'index.html')
divNav2.appendChild(a1)
a1.setAttribute('href' , 'index2.html')
a1.innerText = "DO ADOPCJI"
divNav2.appendChild(a2)
a2.innerText = "WARUNKI ADOPCYJNE"
a2.setAttribute('href' , 'index3.html')
divNav2.setAttribute('class' , 'kolor-nava')

app2.appendChild(divBurki)
divBurki.appendChild(divzdj)
divBurki.setAttribute('class' , 'burki')
divzdj.appendChild(h3)
h3.innerText = "BUREK1"
divzdj.appendChild(piesdiv)
piesdiv.appendChild(burek1)
burek1.src = 'https://www.smieszneprezenty.com.pl/media/products/bf6e535c5b7786f338ec128a105e2cdb/images/thumbnail/large_MG001.jpg?lm=1600595486'
divzdj.setAttribute('class' , 'borderDogs pantofel')

divBurki.appendChild(divZdj2)
// divZdj2.setAttribute(borderDogs)
divZdj2.appendChild(h3Zdj2)
h3Zdj2.innerText = "Burek2"
divZdj2.appendChild(divImg)
divImg.appendChild(burek2)
burek2.src = 'dog2.png'
divZdj2.setAttribute('class' , 'borderDogs pantofel')

divBurki.appendChild(divZdj3)
// divZdj3.setAttribute(borderDogs)
divZdj3.appendChild(h3Zdj3)
h3Zdj3.innerText = "Burek3"
divZdj3.appendChild(divImg2)
divImg2.appendChild(burek3)
burek3.src = 'dog3.jpg'
divZdj3.setAttribute('class' , 'borderDogs pantofel')

divBurki.appendChild(divZdj4)
// divZdj4.setAttribute(borderDogs)
divZdj4.appendChild(h3Zdj4)
h3Zdj4.innerText = "Burek4"
divZdj4.appendChild(divImg3)
divImg3.appendChild(burek4)
burek4.src = 'dog4.jpg'
divZdj4.setAttribute('class' , 'borderDogs pantofel')

divBurki.appendChild(divZdj5)
// divZdj5.setAttribute(borderDogs)
divZdj5.appendChild(h3Zdj5)
h3Zdj5.innerText = "Burek5"
divZdj5.appendChild(divImg4)
divImg4.appendChild(burek5)
burek5.src = 'dog5.jfif'
divZdj5.setAttribute('class' , 'borderDogs pantofel')


divBurki.appendChild(divZdj6)
// divZdj6.setAttribute(borderDogs)
divZdj6.appendChild(h3Zdj6)
h3Zdj6.innerText = "Burek6"
divZdj6.appendChild(divImg5)
divImg5.appendChild(burek6)
burek6.src = 'dog6.png'
divZdj6.setAttribute('class' , 'borderDogs pantofel')
