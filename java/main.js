let x = document.querySelector("div")
let y = [...document.querySelectorAll(".d3")]
let z = [...document.getElementsByTagName("p")]
x.classList.add("d1")
y.forEach((elem)=>{
    elem.style.backgroundColor = "#F5FBDA"
    elem.style.width = "200px"
    elem.style.height = "200px"
    elem.style.borderRadius= "25px"
    elem.style.display = "flex"
    elem.style.justifyContent = "center";
    elem.style.alignItems = "center";
})
function test (){
    x.classList.toggle("red")
}
x.addEventListener("click", test);
z[0].textContent= " Hello wolrd!"
z[0].style.fontSize = "24px"