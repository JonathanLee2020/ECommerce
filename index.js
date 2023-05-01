console.log("hello gamers we're doing some gaming today")

function openMenu() {
    //adds class to body to let us know the menu is open
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}

