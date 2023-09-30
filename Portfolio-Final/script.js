
var typed = new Typed(".typing", {
    strings:["","Full Stack Developer","UI/UX Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


/* =================== Aside====================*/
const nav=document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function()
    {
        removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
           
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}

function removeBackSection(){
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num){
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element)
 {
    for(let i=0;i<totalNavList;i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
         navList[i].querySelector("a").classList.add("active");
        }
    }
 }
document.querySelector(".hire-me").addEventListener("click",function()
{
    const sectionIndex=this.getAttribute("data-section-index");
    
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()=>{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}

let clip = document.querySelector(".vid")
clip.addEventListener("mouseover", function(e){
    clip.play();
})

clip.addEventListener("mouseout", function(e){
    clip.pause();
})

let clip2 = document.querySelector(".vid2")
clip2.addEventListener("mouseover", function(e){
    clip2.play();
})

clip2.addEventListener("mouseout", function(e){
    clip2.pause();
})

let clip3 = document.querySelector(".vid3")
clip3.addEventListener("mouseover", function(e){
    clip3.play();
})

clip3.addEventListener("mouseout", function(e){
    clip3.pause();
})

let clip4 = document.querySelector(".vid4")
clip4.addEventListener("mouseover", function(e){
    clip4.play();
})

clip4.addEventListener("mouseout", function(e){
    clip4.pause();
})