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

let Query = encodeURIComponent('*[_type == "musicHero"]')
let URL = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22musicHero%22%5D"
    


let QueryTwo = encodeURIComponent(`*[_type == "imageGrid"] {
    "imageUrl": image.asset->url
  }`)
let URLTWO = "https://7mw9871z.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22imageGrid%22%5D%20%7B%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%0A%7D"
    
    fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
            let imageGridImages = document.querySelectorAll(".swiper-wrapper img")
    
            result.forEach((result, index) => {
                imageGridImages[index].src = result.imageUrl
            })
        })



        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed:400,
            autoHeight:true,
            autoplay:true,
            spaceBetween: 100,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          });