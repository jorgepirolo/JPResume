import data from '../data/data'
import './education.css'

export const pintareducation = () => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')

  const divtime = document.createElement('div')
  const divcards = document.createElement('div')

  for (let i = data.education.length - 1; i >= 0; i--) {
    let education = data.education[i]

    const divcard = document.createElement('div')
    const img = document.createElement('img')
    const divdata = document.createElement('div')
    const degree = document.createElement('h3')
    const university = document.createElement('h4')
    const year = document.createElement('p')

    section.id = 'education'
    h2.innerText = 'Education'
    img.src = education.universityLogo
    degree.innerText = education.degree
    university.innerText = education.university
    year.innerText = education.graduationYear
    divcard.classList = 'educard'

    divcard.appendChild(img)
    divcard.appendChild(divdata)
    divdata.appendChild(degree)
    divdata.appendChild(university)
    divdata.appendChild(year)
    divcards.appendChild(divcard)

    if (education.relevantInfo) {
      const relevant = document.createElement('a')
      relevant.href = education.relevantInfo
      relevant.innerText = 'More info...'
      divdata.appendChild(relevant)
    }
  }

  divtime.classList = 'time'
  divcards.classList = 'cards'
  divtime.appendChild(divcards)

  section.appendChild(h2)
  section.appendChild(divtime)

  const main = document.querySelector('main')
  main.appendChild(section)
}
