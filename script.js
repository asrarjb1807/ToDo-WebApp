const listContainer = document.querySelector("ul");
const CT = document.querySelector(".completed-task");
const PT = document.querySelector(".pending-task");
const AT = document.querySelector(".all-task");
const inputValue = document.querySelector("input");
var completedTask = 0;
var pendingTask = 0;
var allTask  = 0;

function taskTracker() {        
    $(".completed-task").text(completedTask);
    $(".all-task").text(allTask);
    $(".pending-task").text(pendingTask);
}

taskTracker(); 
$("button").click(function() {
    $("button").fadeOut(150).fadeIn(150);
    let li = document.createElement("li")
    listContainer.prepend(li);

        let p = document.createElement("p");
        li.appendChild(p);
        p.innerHTML = inputValue.value;

        let img = document.createElement("img");
        li.appendChild(img); 

        let div = document.createElement("div");
        li.appendChild(div);
        $("li div").hide();

            let img1 = document.createElement("img");
            img1.classList.add("done-img")
            div.appendChild(img1);

            let img2 = document.createElement("img");
            img2.classList.add("del-img")
            div.appendChild(img2);
    saveData();
});

document.addEventListener("click", function(e){
    if(e.target.classList.length === 0 && e.target.tagName === "IMG" && e.target.clientHeight === 16){
        $(e.target).fadeOut(150);
        $(e.target.parentElement.lastChild).show(150).delay(3000).hide(150);  
        $(e.target).delay(3050).fadeIn(150);
    }
    if(e.target.className === "done-img"){
        (e.target.parentElement.parentElement).remove();
        completedTask += 1;
    }
    if(e.target.className === "del-img"){
        (e.target.parentElement.parentElement).remove();
    }
    
    pendingTask = document.querySelectorAll("li").length;
    allTask  = completedTask + pendingTask;

    taskTracker();
    saveData();
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
    localStorage.setItem("CTdata", completedTask);
    localStorage.setItem("PTdata", pendingTask);
    localStorage.setItem("ATdata", allTask);
}
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
    CT.innerHTML = localStorage.getItem("CTdata");
    PT.innerHTML = localStorage.getItem("PTdata");
    AT.innerHTML = localStorage.getItem("ATdata");
}

getData(); 
