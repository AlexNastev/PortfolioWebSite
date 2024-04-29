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
        button.textContent ="Show Less";
        currentProject.style.height = "880px";
    }else{
        info.style.display = "none";
        button.textContent = "Show More";
        currentProject.style.height = "550px";
    }
}

//Carusel script
const buttons = document.querySelectorAll("[data-carusel-button]")
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const offset = button.dataset.caruselButton === "next" ? 1: -1;
        const slides = button.closest("[data-carusel]").querySelector('[data-slides]');

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) {
            newIndex = slides.children.length - 1;
        }
        if (newIndex >= slides.children.length) {
            newIndex = 0
        }

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active
    }
)
})


//Download CV
document.querySelector(".cvButton").addEventListener("click", function() {
    const pdfUrl = "/MISC/Alexs Resume.pdf";
    
    // Create an anchor element
    const a = document.createElement("a");

    // Set the href attribute of the anchor element to the URL of the PDF file
    a.href = pdfUrl;

    // Set the download attribute of the anchor element to the desired filename
    a.download = "Alexs Resume.pdf";

    // Simulate a click on the anchor element
    a.click();
});