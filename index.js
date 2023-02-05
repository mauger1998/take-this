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
let Query = encodeURIComponent('*[_type == "home-hero-text"]')
let URL = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22home-hero-text%22%5D"






let QueryTwo = encodeURIComponent('*[_type == "home--01-intro"]')
let URLTWO = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22home-01-intro%22%5D"

fetch(URLTWO)
    .then((res) => res.json())
    .then(({ result }) => {
        let introtext = document.querySelector(".introduction-wrapper p:nth-child(2)")

        result.forEach((result, index) => {
            introtext.textContent = result.text
        })
    })




let QueryThree = encodeURIComponent('*[_type == "home-01.5-text"]')
let URLTHREE = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22home-01.5-text%22%5D"

fetch(URLTHREE)
    .then((res) => res.json())
    .then(({ result }) => {
        let textOnePointFive = document.querySelector(".banner-wrapper P:first-child")

        result.forEach((result, index) => {
            textOnePointFive.textContent = result.text
        })
    })

let QueryFour = encodeURIComponent('*[_type == "SectionTwo"]')
let URLFOUR = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22SectionTwo%22%5D"


fetch(URLFOUR)
    .then((res) => res.json())
    .then(({ result }) => {
       let sectionTwoHeading = document.querySelector(".news-wrapper h2")
       let sectionTwoText = document.querySelectorAll(".item-flex p")

        result.forEach((result, index) => {
            sectionTwoHeading.textContent = result.heading
            sectionTwoText[0].textContent = result.firstText
            sectionTwoText[1].textContent = result.secondText
        })
    })


let QueryFive = encodeURIComponent('*[_type == "SectionThreeCard"]')
let URLFIVE = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22SectionThreeCard%22%5D"


fetch(URLFIVE)
    .then((res) => res.json())
    .then(({ result }) => {
       let cardHeading = document.querySelectorAll(".card .share")
       let cardText = document.querySelectorAll(".card-text")

        result.forEach((result, index) => {
            cardHeading[index].textContent = result.heading
            cardText[index].textContent = result.text
        })
    })
    



let QuerySix = encodeURIComponent('*[_type == "SectionThreeHeading"]')
let URLSIX = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22SectionThreeHeading%22%5D"


fetch(URLSIX)
    .then((res) => res.json())
    .then(({ result }) => {
       let sectionThreeHeading = document.querySelector(".why-wrapper h2")

        result.forEach((result, index) => {
            sectionThreeHeading.textContent = result.heading
        })
    })


let QuerySeven = encodeURIComponent(`*[_type == 'SectionTwo']{
    "imageUrlOne": firstImage.asset->url,
    "imageUrlTwo": secondImage.asset->url
  }`)
let URLSEVEN = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'SectionTwo'%5D%7B%0A%20%20%20%20%22imageUrlOne%22%3A%20firstImage.asset-%3Eurl%2C%0A%20%20%20%20%22imageUrlTwo%22%3A%20secondImage.asset-%3Eurl%0A%20%20%7D"


fetch(URLSEVEN)
    .then((res) => res.json())
    .then(({ result }) => {
       let sectionTwoImages = document.querySelectorAll(".grid-image")

        result.forEach((result, index) => {
            sectionTwoImages[0].src = result.imageUrlOne
            sectionTwoImages[1].src = result.imageUrlTwo
            
        })
    })
    
