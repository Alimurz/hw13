const inpText = document.getElementsByClassName("inp-text")[0]; 
const checkBoxes = document.getElementsByClassName("checkboxes")[0]; 

let Data = new Date();
let Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();
// + Hour + ":" + Minutes + ":" + Seconds);


function addTask(){ 
    if(inpText.value === ''){ 
        alert("Где текст?!") 
    } else{ 
        let li = document.createElement("li"); 
        li.innerHTML = inpText.value; 
        checkBoxes.appendChild(li); 
        let p = document.createElement("p")
        p.innerHTML = `Время создания ${Hour}: ${Minutes}`
        let span = document.createElement("span")
       span.innerHTML = "\u00d7";
       li.appendChild(span)
       li.appendChild(p)
    } 
    inpText.value = '';
}
checkBoxes.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

console.log(Data);

    