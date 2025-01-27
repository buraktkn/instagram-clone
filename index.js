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


/*Creating Stories*/
const users = [
    {id:1, username:"instagram"},
    {id:2, username:"twitter"},
    {id:3, username:"youtube"},
    {id:4, username:"spotify"},
    {id:5, username:"bluesky"},
    {id:6, username:"chatgpt"},
    {id:7, username:"x"},
    {id:8, username:"snapchat"},
    {id:9, username:"ekşi"},
    {id:10, username:"whatsapp"},
    {id:11, username:"threads"},
]
const storiesDOM = document.querySelector('.stories');
storiesDOM.innerHTML=users.map(index=>{
    return `
    <div class="story-item text-center mx-2">
        <div class="story-circle">
            <img src="https://picsum.photos/id/${index.id+23}/56/56" class="rounded-circle story-border" alt="story">
        </div>
        <small class="text-light">${index.username}</small>
    </div>
`
}).join('');


/*Creating Post */
const postInfo = [
    {
        profileImg : 29,
        userName : "webtekno",
        shareTime:35,
        postImageLink:9,
        likeNumberPost:67,
        verifyStatus:true,
        postDescription:"10 saniyede 100 metre koşabilen robot köpek geliştirildi. 10 saniyede 100 metre koşabilen robot köpek geliştirildi.🥶",
        numberOfComment:35
    },
    {
        profileImg : 77,
        userName : "tekinnburakk",
        shareTime:36,
        postImageLink:316,
        likeNumberPost:79,
        verifyStatus:true,
        postDescription:"10 saniyede 100 metre koşabilen robot köpek geliştirildi. 10 saniyede 100 metre koşabilen robot köpek geliştirildi.🥶",
        numberOfComment:53
    },
    {
        profileImg : 45,
        userName : "chatgpt",
        shareTime:36,
        postImageLink:216,
        likeNumberPost:59,
        verifyStatus:true,
        postDescription:"10 saniyede 100 metre koşabilen robot köpek geliştirildi. 10 saniyede 100 metre koşabilen robot köpek geliştirildi.🥶",
        numberOfComment:3
    },
    {
        profileImg : 29,
        userName : "webtekno",
        shareTime:35,
        postImageLink:9,
        likeNumberPost:67,
        verifyStatus:true,
        postDescription:"10 saniyede 100 metre koşabilen robot köpek geliştirildi. 10 saniyede 100 metre koşabilen robot köpek geliştirildi.🥶",
        numberOfComment:35
    },
    {
        profileImg : 77,
        userName : "tekinnburakk",
        shareTime:36,
        postImageLink:316,
        likeNumberPost:79,
        verifyStatus:true,
        postDescription:"10 saniyede 100 metre koşabilen robot köpek geliştirildi. 10 saniyede 100 metre koşabilen robot köpek geliştirildi.🥶",
        numberOfComment:53
    },
];
const postsDOM = document.querySelector('.posts');
postsDOM.innerHTML=postInfo.map(item => {
    return `<!--Post Header Field-->
                        <hr color="#232323" class="mt-2" style="width:90%">
                        <div class="mt-4 d-flex px-5 align-items-center">
                            <img src="https://picsum.photos/id/${item.profileImg}/45/45" class="rounded-circle story-border" alt="profile">
                            <smal class="d-flex ml-1 mr-1 text-light">${item.userName}</smal>
                            <img class="mr-2" src="https://img.icons8.com/?size=15&id=36872&format=png&color=359BF7">
                            <li class="text-white-50">${item.shareTime}s</li>
                            <img src="https://img.icons8.com/?size=25&id=61873&format=png&color=ffffff">
                        </div>
                        <!--Post Image Field-->
                        <div class="mt-1 d-flex px-5 align-items-center">
                            <img src="https://picsum.photos/id/${item.postImageLink}/500/500" class="border border-secondary" >
                        </div>
                        <!--Post Action Field-->
                        <div class="mt-1 d-flex align-items-center " id="action">
                            <img class="mr-1 pl-5" src="https://img.icons8.com/?size=25&id=64767&format=png&color=ffffff">
                            <img class="mr-1" src="https://img.icons8.com/?size=28&id=GpyMr0gdGBwS&format=png&color=ffffff">
                            <img class="mr-1" src="https://img.icons8.com/?size=25&id=Zxm3j29AHmq6&format=png&color=ffffff">
                            <img class="pr-4" src="https://img.icons8.com/?size=25&id=82461&format=png&color=ffffff">
                        </div>
                        <!--Post Like Count Field-->
                        <div class="mt-1 d-flex px-5 align-items-center text-light"><small>${item.likeNumberPost} beğenme</small></div>
                        <!--Post Description Field-->
                        <div class="mt-1  px-5 align-items-center text-light">
                            <small ><b>${item.userName}</b></small>
                            <img src="https://img.icons8.com/?size=15&id=36872&format=png&color=359BF7">
                            <small> ${item.postDescription}</small>
                        </div>
                        <!--Post Comments See Field-->
                        <div class="mt-1  px-5 align-items-center text-secondary">
                            <small class="mr-2">${item.numberOfComment} yorumun tümünü gör</small>
                        </div>
                        <!--Post Comments Field-->
                        <div class="mt-1 d-flex  align-items-center text-secondary">
                            <small class="mr-2 px-5">Yorum ekle..</small>
                            <img src="https://img.icons8.com/?size=15&id=-Znk8-vv55Es&format=png&color=ffffff" class="px-4">
                        </div>`
}).join('')

//Change the color of Like, comment icon with hover
document.querySelectorAll('#action img').forEach(img=>{
    const originalSrc = img.src;
    img.addEventListener('mouseover',()=>{
        img.src = originalSrc.replace('color=ffffff', 'color=adadad');
    });
    img.addEventListener('mouseout', ()=>{
        img.src=originalSrc;
    })
})

// const accountDetailDOM = document.querySelector('.account-detail');
// accountDetailDOM.innerHTML=`<img src="https://picsum.photos/id/23/45/45" class="rounded-circle" alt="profile">
//                     <smal class="d-flex ml-3 text-light fw-lighter">dev_software</smal>
//                     <a href="#">Geçiş yap</a>`

const reccomendAccount = [
    {
        photoId:2,
        userName:"tekinnburakk",
        follower:"dev_software"
    },
    {
        photoId:45,
        userName:"sudeyondem",
        follower:"dev_software"
    },
    {
        photoId:53,
        userName:"acebe_",
        follower:"dev_software"
    },
    {
        photoId:68,
        userName:"a.smttkn",
        follower:"dev_software"
    },
    {
        photoId:523,
        userName:"sekansofficial",
        follower:"dev_software"
    }
]
const reccomendDOM = document.querySelector('.reccomended-account')
reccomendDOM.innerHTML= reccomendAccount.map(item=>{
    return `
    <div class="mt-3 d-flex pl-2 align-items-center account-detail">
    <img src="https://picsum.photos/id/${item.photoId}/45/45" class="rounded-circle" alt="profile">
                    <div class="row ml-2 small-font d-block">
                        <smal class="d-flex  text-light fw-lighter">${item.userName}</smal>
                        <small>${item.follower} takip ediyor</small>
                    </div>
                    <a href="#">Takip</a>
    </div>`        
}).join('');