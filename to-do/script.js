

   
    const isAuthenticated = localStorage.getItem('authenticated');
    
    if (isAuthenticated !== 'true') {
        
        window.location.href = '../login/index.html';
    }
    
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

function AddTask(){
    if(inputBox.value ===''){
        alert("You Must Write Something");
    }
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveData();
}   
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}
function logout() {
    localStorage.removeItem('authenticated');  
    window.location.href = '../login/index.html'; }
// showTask();

