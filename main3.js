const app2 = document.getElementById('app3')

const divNav = document.createElement('div')
const nav = document.createElement('nav')
const divNav2 = document.createElement('div')
const a = document.createElement('a')
const a1 = document.createElement('a')
const a2 = document.createElement('a')

app2.appendChild(nav)
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