document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// CMS
let PROJECT_ID = "7mw9871z"
let DATASET = "production" 
let Query = encodeURIComponent('*[_type == "testimonials"]')
let URL = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22testimonials%22%5D"

fetch(URL)
    .then((res) => res.json())
    .then(({ result }) => {
        let topCard = document.querySelectorAll(".top-card")
        let profileName = document.querySelectorAll(".name")
        let profileEvent = document.querySelectorAll(".event")
        let review = document.querySelectorAll(".card > p")

        result.forEach((result, index) => {
            profileName[index].textContent = result.name
            profileEvent[index].textContent = result.event
            review[index].textContent = result.review
        })

        
    })

let QueryTwo = encodeURIComponent('*[_type == "review-text"]')
let URLTWO = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22review-text%22%5D"

fetch(URLTWO)
    .then((res) => res.json())
    .then(({ result }) => {
        let photoParagraph = document.querySelector(".bye-wrapper span > p")

        result.forEach((result, index) => {
            photoParagraph.textContent = result.text
        })
    })


