import data from '../data/data'
import './aboutme.css'

export const pintaraboutme = () => {
  const main = document.querySelector('main')

  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  const img = document.createElement('img')
  const skills = document.createElement('div')
  for (const skill of data.skills) {
    const p = document.createElement('p')
    p.innerText = skill
    p.classList = 'skill'
    skills.appendChild(p)
  }
  const about = document.createElement('p')
  const address = document.createElement('p')
  const contact = document.createElement('a')

  h2.innerText = 'About me'
  img.src = data.avatar
  about.innerText = data.aboutMe
  address.innerText = data.address
  contact.innerText = 'Contact me'
  contact.href = `mailto:${data.email}`

  section.id = 'aboutme'
  skills.classList = 'skills'
  about.classList = 'define'

  section.appendChild(h2)
  section.appendChild(img)
  section.appendChild(skills)
  section.appendChild(about)
  section.appendChild(address)
  section.appendChild(contact)

  main.appendChild(section)
}
