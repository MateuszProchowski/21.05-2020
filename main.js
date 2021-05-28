const app = document.getElementById('app')
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

app.appendChild(gora)
gora.setAttribute('class' , 'gora')
gora.appendChild(ikona1)
ikona1.setAttribute('class' , 'fas fa-dog grid-item1')
// ikona1.setAttribute('class', 'grid-item1')
gora.appendChild(h2)
h2.innerText = "SCHRONISKO"
h2.setAttribute('class', 'schronisko')
gora.appendChild(ikona2)
ikona2.setAttribute('class' , 'fas fa-cat grid-item2')


app.appendChild(nav)
// nav.appendChild(ikona2)
nav.appendChild(divNav2)
divNav2.appendChild(a)
a.innerText = "O NAS"
a.setAttribute('href' , 'index.html')
divNav2.appendChild(a1)
a1.innerText = "DO ADOPCJI"
a1.setAttribute('href' , 'index2.html')
divNav2.appendChild(a2)
a2.innerText = "WARUNKI ADOPCYJNE"
a2.setAttribute('href' , 'index3.html')
divNav2.setAttribute('class' , 'kolor-nava')

app.appendChild(div)
div.appendChild(ikona3)
ikona3.setAttribute('class' , "fas fa-search iconup")

app.appendChild(divBurki)
divBurki.appendChild(divzdj)
divBurki.setAttribute('class' , 'burki')
divzdj.appendChild(h3)
h3.innerText = "BUREK1"
divzdj.appendChild(piesdiv)
piesdiv.appendChild(burek1)
burek1.src = 'https://www.smieszneprezenty.com.pl/media/products/bf6e535c5b7786f338ec128a105e2cdb/images/thumbnail/large_MG001.jpg?lm=1600595486'
divzdj.setAttribute('class' , 'borderDogs imghover')

divBurki.appendChild(divZdj2)
// divZdj2.setAttribute(borderDogs)
divZdj2.appendChild(h3Zdj2)
h3Zdj2.innerText = "Burek2"
divZdj2.appendChild(divImg)
divImg.appendChild(burek2)
burek2.src = 'dog2.png'
divZdj2.setAttribute('class' , 'borderDogs')

divBurki.appendChild(divZdj3)
// divZdj3.setAttribute(borderDogs)
divZdj3.appendChild(h3Zdj3)
h3Zdj3.innerText = "Burek3"
divZdj3.appendChild(divImg2)
divImg2.appendChild(burek3)
burek3.src = 'dog3.jpg'
divZdj3.setAttribute('class' , 'borderDogs')

divBurki.appendChild(divZdj4)
// divZdj4.setAttribute(borderDogs)
divZdj4.appendChild(h3Zdj4)
h3Zdj4.innerText = "Burek4"
divZdj4.appendChild(divImg3)
divImg3.appendChild(burek4)
burek4.src = 'dog4.jpg'
divZdj4.setAttribute('class' , 'borderDogs')

divBurki.appendChild(divZdj5)
// divZdj5.setAttribute(borderDogs)
divZdj5.appendChild(h3Zdj5)
h3Zdj5.innerText = "Burek5"
divZdj5.appendChild(divImg4)
divImg4.appendChild(burek5)
burek5.src = 'dog5.jfif'
divZdj5.setAttribute('class' , 'borderDogs')

divBurki.appendChild(divZdj6)
// divZdj6.setAttribute(borderDogs)
divZdj6.appendChild(h3Zdj6)
h3Zdj6.innerText = "Burek6"
divZdj6.appendChild(divImg5)
divImg5.appendChild(burek6)
burek6.src = 'dog6.png'
divZdj6.setAttribute('class' , 'borderDogs')

app.appendChild(footer)
footer.setAttribute('class' , 'footer grid-footer')
footer.appendChild(divfooter)
divfooter.appendChild(inp1)
inp1.setAttribute('class' , 'inp1')
inp1.setAttribute('placeholder' , 'IMIE I NAZWISKO')
footer.appendChild(divfooter2)
divfooter2.appendChild(inp2)
inp2.setAttribute('class' , 'inp2')
inp2.setAttribute('placeholder' , 'NUMER TELEFONU')
divfooter2.appendChild(inp3)
inp3.setAttribute('class' , 'inp3')
inp3.setAttribute('placeholder' , 'E-MAIL')
footer.appendChild(divfooter4)
divfooter4.appendChild(inp4)
inp4.setAttribute('class' , 'inp4')
inp4.setAttribute('placeholder' , 'WIADOMOŚĆ')