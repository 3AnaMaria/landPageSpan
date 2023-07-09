import "../styles/index.scss";
const d = document
const features = d.getElementById('features')
const company = d.getElementById('company')
const down_arrow_features = d.getElementById('down_arrow_features')
const down_arrow_company = d.getElementById('down_arrow_company')
// const arrow_up = "../assets/icon-arrow-up.svg"
const arrow_down = "../assets/icon-arrow-down.svg"
const menu_company = d.querySelector('.menu_company')
const menu_features = d.querySelector('.menu_features')
const up_arrow_features = d.getElementById('up_arrow_features')
const up_arrow_company = d.getElementById('up_arrow_company')




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