const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

// console.log(rightbtn)
adressbtn.addEventListener('click', function(){
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener('click', function(){
    document.querySelector('.adress-form').style.display = "none"
})

// slider-----------------------------------------------------------------------------------------------------
const rightbtn = document.querySelector('.hnd-right')
const leftbtn = document.querySelector('.hnd-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
// console.log(imgNumber.length)
let index = 0

rightbtn.addEventListener ("click", function(){
    index = index + 1
    if(index > imgNumber.length -1){
        index = 0
    } 
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNumberLi[index].classList.add("active")

})
leftbtn.addEventListener ("click", function(){
    index = index - 1
    if(index < 0){
        index = imgNumber.length - 1
    } 
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNumberLi[index].classList.add("active")
})

// Slider 1----------------------------------------------------------------------------------------------------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
// console.log(imgNumberLi)
imgNumberLi.forEach(function(image, index){
    image.addEventListener("click", function(){
        removeactive ()
        document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
        image.classList.add("active")
    })
})
function removeactive (){
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}

// slider 2-------------------------------------------------------------------------------------------------------
function imgAuto (){
    index++
    if(index > imgNumber.length - 1 ){
        index = 0
    }
    removeactive ()
    document.querySelector(".slider-content-left-top").style.right = index * 100 + "%"
    imgNumberLi[index].classList.add("active")
    // console.log(index)
}
setInterval(imgAuto,5000)


// -----------------slider product---------------------------------------------------------------------------------
const rightbtntwo = document.querySelector('.hnd-right-two')
const leftbtntwo = document.querySelector('.hnd-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
// console.log(rightbtntwo)
// console.log(leftbtntwo)
let i = 0
rightbtntwo.addEventListener ("click", function(){
    i++
    if(i > imgNumbertwo.length -1){
        i = 0
    } 
    document.querySelector(".slider-product-one-content-items-content").style.right = i * 100 + "%"
})
leftbtntwo.addEventListener ("click", function(){
    i--
    if(i < 0){
        i = imgNumbertwo.length - 1
    } 
    document.querySelector(".slider-product-one-content-items-content").style.right = i * 100 + "%"
})