const listContainer = document.querySelector("ul");
const completedContainer = document.querySelector(".cc2");
const CT = document.querySelector(".completed-task");
const PT = document.querySelector(".pending-task");
const AT = document.querySelector(".all-task");
const inputValue = document.querySelector("input");

var completedTask = 0;
var pendingTask = 0;
var allTask  = 0;

 taskTracker();
$("button").click(function() {
    if(inputValue.value === ""){
        alert("write something!");
    }
    else{
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
    } 
    inputValue.value = "";
    saveData();          
});
$(".cc2").hide();
document.addEventListener("click", function(e){
    if(e.target.classList.length === 0 && e.target.tagName === "IMG" && e.target.clientHeight === 16){
        $(e.target).fadeOut(150);
        $(e.target.parentElement.lastChild).show(150).delay(3000).hide(150);  
        $(e.target).delay(3050).fadeIn(150);
    }
    else if(e.target.className === "cc1" || e.target.className === "drop-down" || e.target.className === "drop-down rotate"){
        $(".completed-container").toggleClass("padding-class");
        $(".cc2").slideToggle(100);
        $(".cc1 img").toggleClass("rotate");
    }

    else if(e.target.className === "del-all"){
        $(".cc1 div").delay(100).fadeOut(100).fadeIn(100);
        document.querySelector(".cc2").innerHTML = "";
    }

    else if(e.target.className === "done-img"){
        let done = e.target.parentElement.parentElement.querySelector("p").innerHTML;
        let li = document.createElement("li")
        li.innerHTML = done;
        (e.target.parentElement.parentElement).remove();
        completedContainer.appendChild(li);
    }
    else if (e.target.className === "del-img"){
        (e.target.parentElement.parentElement).remove();
    }
    completedTask = document.querySelectorAll(".cc2 li").length;
    pendingTask = document.querySelectorAll(".list-container li").length;
    allTask  = completedTask + pendingTask;
    saveData();
    taskTracker();
    
});
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("data2", completedContainer.innerHTML);
    localStorage.setItem("CTdata", completedTask);
    localStorage.setItem("PTdata", pendingTask);
    localStorage.setItem("ATdata", allTask);
}
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
    completedContainer.innerHTML = localStorage.getItem("data2");
    CT.innerHTML = localStorage.getItem("CTdata");
    PT.innerHTML = localStorage.getItem("PTdata");
    AT.innerHTML = localStorage.getItem("ATdata");
}
function taskTracker() {        
    $(".all-task").text(allTask);
    $(".pending-task").text(pendingTask);
    $(".completed-task").text(completedTask);
}
getData(); 