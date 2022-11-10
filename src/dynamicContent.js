/************************************************************
 *  ANCHOR Insert header content
 ***********************************************************/
 document.getElementsByClassName("head")[0].innerHTML =
 `<h1 class="homeLink">MMO</h1>`
 
 /************************************************************
  * ANCHOR Insert side panel content  
  ***********************************************************/
 document.getElementsByClassName("panel")[0].innerHTML = 
 `<h1 class="homeLink">MMO</h1>
 <!--List of lists for organization-->
 <ul id="listContainer">
     <li>
         <ul id="navigation">
             <h2>Navigation</h2>
             <li><a href="/src/index/index.html">Home</a></li>
             <li><a href="/src/skills/Crafting/crafting.html">Crafting</a></li>
             <li><a href="/src/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/src/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/src/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/src/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/src/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 
     <li>
         <ul id="recentChanges">
             <h2>Recent Changes</h2>
             <li><a href="/src/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/src/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/src/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/src/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/src/skills/Other/other.html">Other</a></li>
         </ul>
     </li>   
     <li> 
         <ul id="guides">
             <h2>Guides</h2>
             <li><a href="/src/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/src/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/src/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/src/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/src/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 
     <li>
         <ul id="community">
             <h2>Community</h2>
             <li><a href="/src/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/src/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/src/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/src/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/src/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 </ul>`;
 
 /********************************************************
  * ANCHOR insert footer content
  *******************************************************/
 document.getElementsByClassName("footer")[0].innerHTML =
 `<h1 class="homeLink">MMO</h1>
 <span><a target="_blank" href="https://icons8.com/icon/102913/summer">Summer</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
 <span><a target="_blank" href="https://icons8.com/icon/102914/night">Night</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>`;

/***********************************************************
 * ANCHOR add click event listener to headers for navigation
 **********************************************************/
 document.querySelectorAll('.homeLink').forEach(item => {
    item.addEventListener('click', event => {
        window.location.href = "/src/index/index.html";
    })
  });

/************************************************************
 * ANCHOR add fonts to head
 ************************************************************/
document.getElementsByTagName("head")[0].innerHTML += 
`<link href="https://fonts.cdnfonts.com/css/diablo" rel="stylesheet">`

/************************************************************
*   ANCHOR Append color theme switcher to pages
************************************************************/
var darkIMG = document.createElement("img");
darkIMG.src= "/src/Content/darkMode.png"
darkIMG.id = "darkMode";
darkIMG.class = "colorTheme";
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
        //set theme selector to lightMode for next click
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
        *   Change to dark mode
        ************************************************************/

        document.getElementById("lightMode").src = "/src/Content/darkMode.png";
        //set theme selector to darkMode for next click
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