const inpText = document.getElementsByClassName("inp-text")[0]; 
const checkBoxes = document.getElementsByClassName("checkboxes")[0]; 

let Data = new Date();
let Hour = Data.getHours();
Minutes = Data.getMinutes();
Seconds = Data.getSeconds();


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
    saveData();
}
checkBoxes.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data",checkBoxes.innerHTML);
}
function showTask(){
    checkBoxes.innerHTML = localStorage.getItem("data");
}
showTask();
