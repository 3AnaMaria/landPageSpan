import "../styles/index.scss";
const d = document
const features = d.getElementById('features')
const company = d.getElementById('company')
const down_arrow_features = d.getElementById('down_arrow_features')
const down_arrow_company = d.getElementById('down_arrow_company')
const menu_company = d.querySelector('.menu_company')
const menu_features = d.querySelector('.menu_features')
const up_arrow_features = d.getElementById('up_arrow_features')
const up_arrow_company = d.getElementById('up_arrow_company')



// Menus desktop
 features.addEventListener('click', ()=>{
    if (menu_features.classList.contains('hidden')) {
        down_arrow_features.classList.add('hidden');
        up_arrow_features.classList.remove('hidden')
        menu_features.classList.remove('hidden');
      } else {
        down_arrow_features.classList.remove('hidden');
        up_arrow_features.classList.add('hidden')
        menu_features.classList.add('hidden');
      }
 })
company.addEventListener('click', ()=>{
    if (menu_company.classList.contains('hidden')) {
        down_arrow_company.classList.add('hidden');
        up_arrow_company.classList.remove('hidden')
        menu_company.classList.remove('hidden');
      } else {
        down_arrow_company.classList.remove('hidden');
        up_arrow_company.classList.add('hidden')
        menu_company.classList.add('hidden');
      }
 })

 // Menu mobile
 const mobile_menu = d.getElementById('mobile_menu')
 const menu = d.getElementById('menu')
 const menu_close_icon = d.getElementById('menu_close_icon')
 const menu_icon = d.getElementById('menu_icon')

 menu.addEventListener('click', ()=>{
    if (mobile_menu.classList.contains('hidden')) {
       mobile_menu.classList.remove('hidden')
       menu_close_icon.classList.remove('hidden')
       menu_icon.classList.add('hidden')
      } else {
        mobile_menu.classList.add('hidden')
        menu_close_icon.classList.add('hidden')
        menu_icon.classList.remove('hidden')
      }
 })

const toggleMenu = (clickedEl, openingEl) => {
  clickedEl.addEventListener('click', () => {
      openingEl.classList.toggle('inactive');
})
}