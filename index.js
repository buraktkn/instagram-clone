/*Creating Logo */
const logoDOM = document.querySelector('.logo-field');
logoDOM.innerHTML=`<img src="instagram-text-icon.svg" class="logo" alt="Instagram"></img>`

/*Creating Navbar -> Top to Bottom */
const navItem =[
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=83246&format=png&color=ffffff", name:"Ana Sayfa"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=132&format=png&color=ffffff", name:"Ara"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=9672&format=png&color=ffffff", name:"Keşfet"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=PxI9IPCyBAOD&format=png&color=ffffff", name:"Reels"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=20202&format=png&color=ffffff", name:"Mesajlar"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=87&format=png&color=ffffff", name:"Bildirimler"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=37787&format=png&color=ffffff", name:"Oluştur"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=8302&format=png&color=ffffff", name:"Pano"},
    {section:"main",
        logo:"https://img.icons8.com/?size=100&id=fbLva4ms1ACo&format=png&color=ffffff", name:"Profil"},
    {section:"footer",
        logo:"https://img.icons8.com/?size=100&id=oykyblY20T6o&format=png&color=ffffff", name:"Threads"},
    {section:"footer",
        logo:"https://img.icons8.com/?size=100&id=8113&format=png&color=ffffff", name:"More"},
]

const navbarDOM = document.querySelector('.navbar-field');
navbarDOM.innerHTML= navItem.filter(item=>item.section == 'main').map((item)=> {
    return `
    <a href="#" >
    <div class="row navbar-item">
        <img src="${item.logo}" class="icon"></img>
        <div class="navbar-text">${item.name}</div>
    </div>
    </a>`
}).join('');

/*Creating Navbar -> Threads & More*/
const navbarFooterDOM = document.querySelector('.navbar-footer');
navbarFooterDOM.innerHTML=navItem.filter(item=>item.section == 'footer').map((item=>{
    return `
    <a>
    <div class="row navbar-footer-item">
        <img src="${item.logo}" class="icon"></img>
        <div class="navbar-text">${item.name}</div>
    </div>
    </a>`
})).join('');