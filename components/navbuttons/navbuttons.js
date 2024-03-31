import './navbuttons.css'

export const anavs = ({ texto, id }) => {
  return `<li><a href="${id}" class="navbutton">${texto}</a></li>`
}
