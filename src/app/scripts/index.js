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
 const features_mobile = d.getElementById('features_mobile')
 const company_mobile = d.getElementById('company_mobile')
 const down_arrow_features_mobile = d.getElementById ('down_arrow_features_mobile')
 const up_arrow_features_mobile = d.getElementById ('up_arrow_features_mobile')
 const down_arrow_company_mobile = d.getElementById ('down_arrow_company_mobile')
 const up_arrow_company_mobile = d.getElementById ('up_arrow_company_mobile')
 const menu_features_mobile = d.querySelector('.menu_features_mobile')
 const menu_company_mobile = d.querySelector('.menu_company_mobile')
 

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

features_mobile.addEventListener('click', ()=>{
  if (menu_features_mobile.classList.contains('hidden')) {
      down_arrow_features_mobile.classList.add('hidden');
      up_arrow_features_mobile.classList.remove('hidden')
      menu_features_mobile.classList.remove('hidden');
    } else {
      down_arrow_features_mobile.classList.remove('hidden');
      up_arrow_features_mobile.classList.add('hidden')
      menu_features_mobile.classList.add('hidden');
    }
})
company_mobile.addEventListener('click', ()=>{
  if (menu_company_mobile.classList.contains('hidden')) {
      down_arrow_company_mobile.classList.add('hidden');
      up_arrow_company_mobile.classList.remove('hidden')
      menu_company_mobile.classList.remove('hidden');
    } else {
      down_arrow_company_mobile.classList.remove('hidden');
      up_arrow_company_mobile.classList.add('hidden')
      menu_company_mobile.classList.add('hidden');
    }
})