/************************************************************
*   ANCHOR Append color theme switcher to pages
************************************************************/
var darkIMG = document.createElement("img");
darkIMG.src= "/src/Content/darkMode.png"
darkIMG.id = "darkMode";
darkIMG.style.width = "30px";
document.getElementsByClassName("head")[0].appendChild(darkIMG);

/************************************************************
*   ANCHOR Change between light and dark mode
************************************************************/
document.getElementById("darkMode").addEventListener("click", function(){
    
    if(darkIMG.id == "darkMode"){

        /************************************************************
        *   Change to light mode
        ************************************************************/

        document.getElementById("darkMode").src = "/src/Content/lightMode.png";
        document.getElementById("darkMode").id = "lightMode";

        /*Make clicked links fit the color theme*/
        document.querySelectorAll("a").forEach(function(a){
            a.style.color = "lightgrey";
        });

        document.body.style.backgroundColor = "#303141";
        document.getElementsByClassName("content")[0].style.backgroundColor = "#596e96";
        document.body.style.color = "white";
        
    } else {

        /************************************************************
        *   Change to light mode
        ************************************************************/

        document.getElementById("lightMode").src = "/src/Content/darkMode.png";
        document.getElementById("lightMode").id = "darkMode";
        
        /*Make clicked links fit the color theme*/
        document.querySelectorAll("a").forEach(function(a){
            a.style.color = "purple";
        });

        document.body.style.backgroundColor = "wheat";
        document.getElementsByClassName("content")[0].style.backgroundColor = "antiquewhite";
        document.body.style.color = "black";
    }   
});