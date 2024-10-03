/* FILENAME:    nav.js
 * AUTHOR:      Jacob Meyer, 200364255
 * DESCRIPTION: This file contains all the functions
 *              required for the navigation menu
 */

function toggleMenu() {
    var menu = document.getElementById("menuContainer");
    
    if (menu.style.display === "block") 
        menu.style.display = "none";
    else
        menu.style.display = "block";
}
