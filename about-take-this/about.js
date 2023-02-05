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
let Query = encodeURIComponent('*[_type == "aboutHero"]')
let URL = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22aboutHero%22%5D"





    let QueryTwo = encodeURIComponent('*[_type == "about01Text"]')
    let URLTWO = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22about01Text%22%5D"
    
    fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
            let about01Text = document.querySelector(".introduction-wrapper p")
    
            result.forEach((result, index) => {
                about01Text.textContent = result.text
            })
        })


    
    


    
    

