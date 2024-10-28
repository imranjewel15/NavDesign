let hamburgerIcon = document.querySelector(".hamburgerIcon");
let menu = document.querySelector(".menu");
let beforeIcn = document.querySelector(".beforeIcn");
let rightPart = document.querySelector(".rightPart");
let logo = document.querySelector(".logo");
let EyeShow = document.querySelector(".EyeShow");
let inputField = document.querySelector(".inputField");
let signIn = document.querySelector(".signInArea");
let form = document.querySelector(".form");
let btn = document.querySelector(".btn");
let user = document.querySelector(".user");

hamburgerIcon.addEventListener("click",()=>{
    rightPart.style.left="0";
})
beforeIcn.addEventListener("click",()=>{
    rightPart.style.left="-600px";
})
EyeShow.addEventListener("click", ()=>{
    if(EyeShow.classList == "fa-solid fa-eye EyeShow"){
        inputField.type = "text"
        EyeShow.classList = "fa-solid fa-eye-slash EyeClose";
    }
    else{
        inputField.type = "password"
        EyeShow.classList = "fa-solid fa-eye EyeShow"
    }
})
// signIn.addEventListener("click", ()=>{
// if(form.style.display== "none"){
//     form.style.display= "block";
// }
// else{
//     form.style.display= "none";
// }
// });
btn.addEventListener("click", ()=>{
    signIn.innerHTML = user.value + "(Signed In)"
    signIn.style.color = "#eeeeee";
})