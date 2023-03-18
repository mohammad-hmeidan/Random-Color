let body = document.querySelector(".body")
let refreshBtn = document.getElementById("refresh-btn")
function generatePalete(){
    body.innerHTML = ''
    for(let i=0;i<20;i++){
        let randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
        randomColor = `#${randomColor.padStart(6,"0")}`
        let newDiv = document.createElement("div");
        newDiv.className = 'box'
        newDiv.innerHTML = `<div class="background" style="background-color:${randomColor};"></div>
        <span>${randomColor}</span>
        `
        newDiv.addEventListener("click",()=>copyColor(newDiv,randomColor))
        body.appendChild(newDiv)
    }
}
generatePalete();
const copyColor = (ele,hexVal)=>{
    navigator.clipboard.writeText(hexVal).then(()=>{
    ele.children[1].innerHTML = `copeid`
    setTimeout(()=>{
        ele.children[1].innerHTML = hexVal
    },1000)
    })
}
refreshBtn.addEventListener("click",generatePalete)