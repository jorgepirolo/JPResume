import data from '../data/data'
import './projects.css'

export const pintarprojects = () => {
  const section = document.createElement('section')
  const h2 = document.createElement('h2')
  const articles = document.createElement('div')

  for (const project of data.projects) {
    const proj = document.createElement('article')
    const img = document.createElement('img')
    const title = document.createElement('h3')
    const desc = document.createElement('p')
    const link = document.createElement('a')

    img.src = project.preview
    title.innerText = project.title
    desc.innerText = project.description
    link.href = project.link
    link.innerText = 'Go check it!'
    link.target = '_blank'

    proj.appendChild(img)
    proj.appendChild(title)
    proj.appendChild(desc)
    proj.appendChild(link)
    articles.appendChild(proj)
  }

  h2.innerText = 'Recent Projects'
  section.id = 'projects'
  section.appendChild(h2)
  section.appendChild(articles)

  const main = document.querySelector('main')
  main.appendChild(section)
}
