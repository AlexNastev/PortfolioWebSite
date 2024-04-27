//Show more on projects
let showMoreButtons = document.querySelectorAll("#showMore")
Array.from(showMoreButtons).forEach(element => {
    element.addEventListener("click", showProjectInfo);
});

function showProjectInfo(e){
    let button = e.currentTarget;
    let currentProject = button.parentNode;
    let info = currentProject.children[2];
    if(button.textContent == "Show More"){
        info.style.display = "flex";
        button.textContent ="Show Less"
        currentProject.style.height = "880px"
    }else{
        info.style.display = "none";
        button.textContent = "Show More"
        currentProject.style.height = "550px"
    }
}