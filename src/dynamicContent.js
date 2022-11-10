var darkIMG = document.createElement("img");
darkIMG.src= "/src/Content/darkMode.png"
darkIMG.id = "darkMode";
darkIMG.style.width = "30px";
document.getElementsByClassName("head")[0].appendChild(darkIMG);

document.getElementById("darkMode").addEventListener("click", function(){
    if(darkIMG.id == "darkMode"){
        document.getElementById("darkMode").src = "/src/Content/lightMode.png";
        document.getElementById("darkMode").id = "lightMode";
        document.body.style.backgroundColor = "#303141";
        document.getElementsByClassName("content")[0].style.backgroundColor = "#596e96";
        document.body.style.color = "white";
        /*Make clicked links fit the color theme*/
        document.querySelectorAll("a").forEach(function(a){
            a.style.color = "lightgrey";
        });
    } else {
        document.getElementById("lightMode").src = "/src/Content/darkMode.png";
        document.getElementById("lightMode").id = "darkMode";
        document.body.style.backgroundColor = "wheat";
        document.getElementsByClassName("content")[0].style.backgroundColor = "antiquewhite";
        document.body.style.color = "black";
        /*Make clicked links fit the color theme*/
        document.querySelectorAll("a").forEach(function(a){
            a.style.color = "purple";
        });
    }   
});