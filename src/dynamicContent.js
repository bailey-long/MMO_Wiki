/*************************************************************
 * ANCHOR Dynamic Content
 ************************************************************/

/************************************************************
 * Insert header content
 ***********************************************************/
 document.getElementsByClassName("head")[0].innerHTML =
 `<h1 class="homeLink">Wayfarers</h1>
 <p>Log In</p> <p>Create account</p>`
 
 /************************************************************
  * Insert side panel content  
  ***********************************************************/
 document.getElementsByClassName("panel")[0].innerHTML = 
 `<h2 class="homeLink">Wayfarers</h2>
 <!--List of lists for organization-->
 <ul id="listContainer">
     <li>
         <ul id="navigation">
             <h2>Navigation</h2>
             <li><a href="/index.html">Home</a></li>
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
         <ul id="Popular">
             <h2>Popular</h2>
             <li><a href="/skills/Combat/combat.html">Combat</a></li>
             <li><a href="/skills/Exploration/exploration.html">Exploration</a></li>
             <li><a href="/skills/Questing/questing.html">Questing</a></li>
             <li><a href="/skills/Professions/professions.html">Professions</a></li>
             <li><a href="/skills/Other/other.html">Other</a></li>
         </ul>
     </li>
 </ul>`;
 
 /********************************************************
  * insert footer content
  *******************************************************/
 document.getElementsByClassName("footer")[0].innerHTML =
 `<h1 class="homeLink">Wayfarers</h1>
 <span>Website and MMO by <a href="https://bailey-long.github.io/src/index/" target="blank">Bailey Long</a></span>
 <span>Skill icon art by <a href="https://dtownshend.com/" target="blank">Dom Townshend</a></span>
 <span><a target="_blank" href="https://icons8.com/icon/102913/summer">Summer</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
 <span><a target="_blank" href="https://icons8.com/icon/59841/moon-symbol">Moon Symbol</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></span>
 <span>--------------</span>
 <span><a href="#top" class="backToTop">Back to top</a></span>`;

/***********************************************************
 * ANCHOR add click event listener to logos for navigation
 **********************************************************/
 document.querySelectorAll('.homeLink').forEach(item => {
    item.addEventListener('click', event => {
        window.location.href = "/index.html";
    })
  });

/************************************************************
 * ANCHOR add content to head
 ************************************************************/
document.getElementsByTagName("head")[0].innerHTML = 
`<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-PB77QTDM8B"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-PB77QTDM8B');
</script>
<!-- Header font -->
<link href="https://fonts.cdnfonts.com/css/diablo" rel="stylesheet">` + 
document.getElementsByTagName("head")[0].innerHTML;
/************************************************************
*   ANCHOR Append color theme switcher to pages
************************************************************/
var themeIMG = document.createElement("img");
themeIMG.class = "colorTheme";
themeIMG.alt = "Theme Switcher";
themeIMG.tabIndex = "0";
themeIMG.style.width = "30px";
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    themeIMG.src= "/Content/lightMode.png"
    themeIMG.id = "lightMode";
} else {
    themeIMG.src= "/Content/darkMode.png"
    themeIMG.id = "darkMode";
}
document.getElementsByClassName("head")[0].appendChild(themeIMG);

/************************************************************
*   ANCHOR Change between light and dark mode
************************************************************/
themeIMG.addEventListener("click", function(){
    if(themeIMG.id == "darkMode"){

        /************************************************************
        *   Change to dark mode
        ************************************************************/

        document.getElementById("darkMode").src = "/Content/lightMode.png";
        //set theme selector to lightMode for next click
        document.getElementById("darkMode").id = "lightMode";
        //set cookie to lightMode
        document.cookie = "lightMode";

        document.documentElement.style.setProperty('--exteriorBackground', '#303141');
        document.documentElement.style.setProperty('--contentBackground', '#596e96');
        document.documentElement.style.setProperty('--underline', 'red');
        document.documentElement.style.setProperty('--linkColor', '#1e1e65');
        document.documentElement.style.setProperty('--visitedLinkColor', '#292963');
        document.documentElement.style.setProperty('--footPanelLinkColor', 'steelblue');
        /*Body text color*/
        document.body.style.color = "white";
        
    } else {

        /************************************************************
        *   Change to light mode
        ************************************************************/

        document.getElementById("lightMode").src = "/Content/darkMode.png";
        //set theme selector to darkMode for next click
        document.getElementById("lightMode").id = "darkMode";
        //set cookie to darkMode
        document.cookie = "darkMode";

        document.documentElement.style.setProperty('--exteriorBackground', 'wheat');
        document.documentElement.style.setProperty('--contentBackground', 'antiquewhite');
        document.documentElement.style.setProperty('--underline', 'brown');
        document.documentElement.style.setProperty('--linkColor', 'blue');
        document.documentElement.style.setProperty('--visitedLinkColor', 'purple');
        document.documentElement.style.setProperty('--footPanelLinkColor', 'blue');
        /*Body text color*/
        document.body.style.color = "black";
    }   
});