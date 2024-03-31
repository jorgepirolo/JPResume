import data from '../data/data'
import './experience.css'

export const pintarexperience = () => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')

  const divtime = document.createElement('div')
  const divcards = document.createElement('div')

  for (let i = data.workExperience.length - 1; i >= 0; i--) {
    let experience = data.workExperience[i]

    const divcard = document.createElement('div')
    const img = document.createElement('img')
    const divdata = document.createElement('div')
    const position = document.createElement('h3')
    const company = document.createElement('h4')
    const years = document.createElement('p')
    const desc = document.createElement('p')

    section.id = 'experience'
    h2.innerText = 'Work Experience'
    img.src = experience.companyLogo
    position.innerText = experience.position
    company.innerText = experience.company
    years.innerText = `${experience.startDate} - ${experience.endDate}`
    desc.innerText = experience.description

    divcard.classList = 'expcard'
    desc.classList = 'descript'

    divcard.appendChild(divdata)
    divcard.appendChild(img)
    divcard.appendChild(desc)
    divdata.appendChild(position)
    divdata.appendChild(company)
    divdata.appendChild(years)

    divcards.appendChild(divcard)

    img.addEventListener('mouseenter', () => {
      desc.classList.toggle('showp')
    })
    img.addEventListener('mouseleave', () => {
      desc.classList.toggle('showp')
    })
  }

  divtime.classList = 'time'
  divcards.classList = 'cards'
  divtime.appendChild(divcards)

  section.appendChild(h2)
  section.appendChild(divtime)
  section.classList = 'noshow'

  const main = document.querySelector('main')
  main.appendChild(section)
}
