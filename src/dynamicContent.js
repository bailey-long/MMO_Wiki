/*************************************************************
 * ANCHOR Dynamic Content
 ************************************************************/

/************************************************************
 * Insert header content
 ***********************************************************/
 document.getElementsByClassName("head")[0].innerHTML =
 `<h1 class="homeLink">Wayfarers</h1>
 <p class="registerLogin" >Log In</p> <p class="registerLogin">Create account</p>`
 
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
<link rel="preload stylesheet" href="https://fonts.cdnfonts.com/css/diablo" as"font">` + 
document.getElementsByTagName("head")[0].innerHTML;

/************************************************************
*   ANCHOR Append color theme switcher to pages and set initial theme
************************************************************/
var themeIMG = document.createElement("img");
themeIMG.id = "themeSwitcher";
themeIMG.class = "colorTheme";
themeIMG.alt = "Theme Switcher";
themeIMG.tabIndex = "0";
themeIMG.style.width = "30px";
//One time check for default browser color scheme
if (localStorage.getItem("themeChosen") != "true"){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem("themeChosen", "true");
        localStorage.setItem("theme", "darkMode");
        themeIMG.src= "/Content/darkMode.png" // sun image
    } else {
        localStorage.setItem("themeChosen", "true");
        localStorage.setItem("theme", "lightMode");
        themeIMG.src= "/Content/lightMode.png" // moon image
    }
}

if (localStorage.getItem("theme") == "lightMode"){
    themeIMG.src= "/Content/lightMode.png" // moon image
} else {
    themeIMG.src= "/Content/darkMode.png" // sun image
}

document.getElementsByClassName("head")[0].appendChild(themeIMG);


/************************************************************
*   ANCHOR Change between light and dark mode on click
************************************************************/
themeIMG.addEventListener("click", function(){
    //set transition for elements
    document.getElementsByClassName("content")[0].style.transition = "background-color 0.5s ease-in-out";
    document.getElementsByTagName("body")[0].style.transition = "background-color 0.5s ease-in-out";
    if(localStorage.getItem("theme") == "lightMode"){

        /************************************************************
        *   Change to dark mode
        ************************************************************/
        themeIMG.src= "/Content/darkMode.png" // sun image
        //set local storage to darkMode
        localStorage.setItem("theme", "darkMode");
        document.documentElement.style.setProperty('--exteriorBackground', '#303141');
        document.documentElement.style.setProperty('--contentBackground', '#42567a');
        document.documentElement.style.setProperty('--underline', 'red');
        document.documentElement.style.setProperty('--linkColor', '#1e1e65');
        document.documentElement.style.setProperty('--visitedLinkColor', '#292963');
        document.documentElement.style.setProperty('--footPanelLinkColor', 'steelblue');
        //Body text color
        document.body.style.color = "white";
        
    } else {

        /************************************************************
        *   Change to light mode
        ************************************************************/
        themeIMG.src= "/Content/lightMode.png" // moon image
        //set local storage to lightMode
        localStorage.setItem("theme", "lightMode");
        document.documentElement.style.setProperty('--exteriorBackground', 'wheat');
        document.documentElement.style.setProperty('--contentBackground', 'antiquewhite');
        document.documentElement.style.setProperty('--underline', 'brown');
        document.documentElement.style.setProperty('--linkColor', 'blue');
        document.documentElement.style.setProperty('--visitedLinkColor', 'purple');
        document.documentElement.style.setProperty('--footPanelLinkColor', 'blue');
        //Body text color
        document.body.style.color = "black";
    }   
});

/************************************************************
*   ANCHOR Check on page load for local storage theme 
    (same code as above, but without the click event and the local storage check is reversed)
************************************************************/
if(localStorage.getItem("theme") == "darkMode"){

    /************************************************************
    *   Change to dark mode
    ************************************************************/
    themeIMG.src= "/Content/darkMode.png" // sun image
    //set local storage to darkMode
    localStorage.setItem("theme", "darkMode");
    document.getElementsByClassName("content")[0].removeAttribute("transition");
    document.getElementsByTagName("body")[0].removeAttribute("transition");
    document.documentElement.style.setProperty('--exteriorBackground', '#303141');
    document.documentElement.style.setProperty('--contentBackground', '#42567a');
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
    themeIMG.src= "/Content/lightMode.png" // moon image
    //set local storage to lightMode
    localStorage.setItem("theme", "lightMode");
    document.getElementsByClassName("content")[0].removeAttribute("transition");
    document.getElementsByTagName("body")[0].removeAttribute("transition");
    document.documentElement.style.setProperty('--exteriorBackground', 'wheat');
    document.documentElement.style.setProperty('--contentBackground', 'antiquewhite');
    document.documentElement.style.setProperty('--underline', 'brown');
    document.documentElement.style.setProperty('--linkColor', 'blue');
    document.documentElement.style.setProperty('--visitedLinkColor', 'purple');
    document.documentElement.style.setProperty('--footPanelLinkColor', 'blue');
    /*Body text color*/
    document.body.style.color = "black";
}   