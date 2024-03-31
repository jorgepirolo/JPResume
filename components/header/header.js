import data from '../data/data'
import './header.css'
import { anavs } from '../navbuttons/navbuttons'

export const pintarheader = () => {
  const header = document.querySelector('header')

  const name = document.createElement('h1')
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  name.innerText = data.name

  ul.innerHTML = `
  ${anavs({ texto: 'About me', id: '#aboutme' })}
  ${anavs({ texto: 'Education', id: '#education' })}
  ${anavs({ texto: 'Experience', id: '#experience' })}
  ${anavs({ texto: 'Projects', id: '#projects' })}
  `

  nav.appendChild(ul)
  header.appendChild(name)
  header.appendChild(nav)
}
