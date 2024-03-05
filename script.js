// Method to show cards based on category or brand
const openCards = (event, type) => {

    // Initialized all the cards
    const cardContainers = document.querySelectorAll(".rightDataCards")
    cardContainers.forEach((element) => {
        element.style.display = "none"
    })
    // Showing only the desired cards
    document.querySelector(type).style.display = "flex"

    // Initialized all the tabs
    const tabLinks = document.querySelectorAll(".tablink")
    tabLinks.forEach((element) => {
        element.style.color = "#757575"
    })
    document.querySelector(".allBrowseButton").style.color = "#000000"

    // Current tab
    event.currentTarget.style.color = "#F91313"
}

// Method to show all the cards 
const openAllCards = (event) => {
    const cardContainers = document.querySelectorAll(".rightDataCards")
    cardContainers.forEach((element) => {
        element.style.display = "flex"
    })

    const tabLinks = document.querySelectorAll(".tablink")
    tabLinks.forEach((element) => {
        element.style.color = "#757575"
    })
    event.currentTarget.style.color = "#F91313"

}

// Method to toggle side menu bar
const toggleSideMenu = () => {

    const element = document.querySelector(".sideMenu")
    // console.log(element)
    element.classList.toggle("translateYFull")
    document.querySelector(".coverOverlaySideMenu").classList.toggle("removeElement")

}