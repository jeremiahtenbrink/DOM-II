// Your code goes here
const logo = document.querySelector(".logo-heading");
logo.onmouseover = (event) => {
    logo.classList.add("skew");
};

logo.onmouseleave = (event) => {
    logo.classList.remove("skew");
};

const busImg = document.querySelector(".intro");

document.onkeypress = (event) => {
    let hasHeading = false;
    debugger;
    let heading = null;
        busImg.childNodes.forEach((child) => {
       if (child.nodeName=== "H1"){
           hasHeading = true;
           heading = child;
       }
    });
    
    if (!hasHeading) {
        heading = document.createElement("h1");
        busImg.append(heading);
        heading.textContent = event.key;
    }else {
        heading.textContent = heading.textContent + event.key;
    }
   
};

document.onwheel = (event) => {
    let root = document.documentElement;
    let size = root.style.getPropertyValue('--font-size');
    if (size === ""){
        size = 100;
    }
    
    if(size.toString().includes("%")){
        size = size.replace("%", "");
        size = parseFloat(size);
        debugger;
    }
    
    debugger;
    if (event.wheelDelta < 0) {
        size = size * .9;
    }else {
        size = size * 1.1;
    }
    root.style.setProperty('--font-size', size + "%");
    
};

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    
    button.setAttribute("draggable", true);
    button.ondrag = (event) => {
        button.textContent = "I'm being dragged";
    };
    button.ondragend = (event) => {
        button.textContent = "I've been dropped."
    };
});

window.onload = (event) => {
    alert("The page has loaded.");
};

const navigationButtons = document.querySelectorAll(".nav a");
navigationButtons.forEach((nav) => {
   nav.onfocus = (event) => {
       debugger;
       event.target.style.opacity = .6;
   };
   
   
});

window.addEventListener("copy", (event) => {
    alert("You are not allow to copy text here.");
});