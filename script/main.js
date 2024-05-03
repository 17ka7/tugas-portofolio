//Toggle & Navigation Responsive 
const nav = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav") 

    burger.addEventListener("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");

    } );
};

nav();

// clear form before unload

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }    
};

