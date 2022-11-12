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
             <li><a href="/skills/Overview/index.html">Skills</a></li>
             <li><a href="/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/Quests/Overview/index.html">Questing</a></li>
             <li><a href="/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 
     <li>
         <ul id="recentChanges">
             <h2>Recent Changes</h2>
             <li><a href="/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/skills/Other/other.html">Other</a></li>
         </ul>
     </li>   
     <li> 
         <ul id="guides">
             <h2>Guides</h2>
             <li><a href="/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 
     <li>
         <ul id="community">
             <h2>Community</h2>
             <li><a href="/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 </ul>`;
 
 /********************************************************
  * ANCHOR insert footer content
  *******************************************************/
 document.getElementsByClassName("footer")[0].innerHTML =
 `<h1 class="homeLink">MMO</h1>
 <span>Website and MMO by <a href="https://bailey-long.github.io/src/index/" target="blank">Bailey Long</a></span>
 <span>Skill icon art by <a href="https://dtownshend.com/" target="blank">Dom Townshend</a></span>
 <span><a target="_blank" href="https://icons8.com/icon/102913/summer">Summer</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
 <span><a target="_blank" href="https://icons8.com/icon/102914/night">Night</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
 <span><br></span>`;

/***********************************************************
 * ANCHOR add click event listener to headers for navigation
 **********************************************************/
 document.querySelectorAll('.homeLink').forEach(item => {
    item.addEventListener('click', event => {
        window.location.href = "/index.html";
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
darkIMG.src= "/Content/darkMode.png"
darkIMG.id = "darkMode";
darkIMG.class = "colorTheme";
darkIMG.alt = "Theme Switcher";
darkIMG.tabIndex = "0";
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

        document.getElementById("darkMode").src = "/Content/lightMode.png";
        //set theme selector to lightMode for next click
        document.getElementById("darkMode").id = "lightMode";
        //set cookie to lightMode
        document.cookie = "lightMode";

        /*Make clicked links fit the color theme*/
        document.querySelectorAll("a").forEach(function(a){
            a.style.color = "lightgrey";
        });

        document.documentElement.style.setProperty('--exteriorBackground', '#303141');
        document.documentElement.style.setProperty('--contentBackground', '#596e96');
        document.documentElement.style.setProperty('--underline', 'red');
        document.body.style.color = "white";
        
    } else {

        /************************************************************
        *   Change to dark mode
        ************************************************************/

        document.getElementById("lightMode").src = "/Content/darkMode.png";
        //set theme selector to darkMode for next click
        document.getElementById("lightMode").id = "darkMode";
        //set cookie to darkMode
        document.cookie = "darkMode";
        
        /*Make clicked links fit the color theme*/
        document.querySelectorAll("a").forEach(function(a){
            a.style.color = "purple";
        });

        document.documentElement.style.setProperty('--exteriorBackground', 'wheat');
        document.documentElement.style.setProperty('--contentBackground', 'antiquewhite');
        document.documentElement.style.setProperty('--underline', 'brown');
        document.body.style.color = "black";
    }   
});