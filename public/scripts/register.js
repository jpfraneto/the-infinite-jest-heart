let sources = {
    "EN" : "FzZGwkD3Ti8",
    "ES" : "_Lb8l4868xk"
}

let languageInput = document.getElementById("languageInput");
let registerIframe = document.getElementById("registerIframe");
let iframeBox = document.getElementById("iframeBox");
languageInput.addEventListener("input", ()=>{
    let newSource = "https://www.youtube.com/embed/";
    let p = document.querySelector("#iframeBox p");
    if(p){
        iframeBox.removeChild(p);
    }
    if(languageInput.value in sources){
        newSource += sources[languageInput.value];
    } else {
        newSource += sources["EN"];  
        let text = document.createElement("p");
        text.innerText = "I'm sorry, but a welcoming video in your language doesn't exist yet. I tried to keep it accesible and that's why I made it in english. All help is great."
        iframeBox.append(text);
    }
    registerIframe.src = newSource;
    registerIframe.style.display = "block";
    // else if (languageInput.value === "ES") {
    //     newSource += "FzZGwkD3Ti8";
    // }
    // 
}) 