import { pintaraboutme } from './components/aboutme/aboutme'
import data from './components/data/data'
import { pintareducation } from './components/education/education'
import { pintarexperience } from './components/experience/experience'
import { pintarheader } from './components/header/header'
import { pintarprojects } from './components/projects/projects'
import './style.css'

pintarheader()

pintaraboutme()

pintareducation()

pintarexperience()

pintarprojects()

const footer = document.querySelector('footer')
const pfoot = document.createElement('p')
pfoot.innerText = 'Created with love by Jorge Pirolo. March 2024 ®'
footer.appendChild(pfoot)

const edu = document.querySelector('#education')
const button = document.createElement('button')
const main = document.querySelector('main')
button.innerText = 'Show experience'
main.insertBefore(button, edu)

const button2 = document.createElement('button')
button2.innerText = 'Show education'
button2.classList = 'noshow'
main.insertBefore(button2, edu)

const showexp = () => {
  const exp = document.querySelector('#experience')
  const edu = document.querySelector('#education')
  exp.classList.toggle('noshow')
  edu.classList.toggle('noshow')
  button.classList.toggle('noshow')
  button2.classList.toggle('noshow')
}

button.addEventListener('click', () => showexp())
button2.addEventListener('click', () => showexp())
