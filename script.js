// const para=getElementById("para")
// para.textcontain

// const para=document.querySelectorAll(" .para")
// para[0].textContent="THIS is updated one"
// para[1].computedStyleMap.colour="green"
// console.log

// const para=document.querySelectorAll(" .para")
// para[0].innerHTML="<h1>THIS is heading</h1>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")



// function show(){
//     alert("you have clicked the button")
//  }

// button.addEventListener('mouseover',show)
// button.removeEventListener('click'), show)

// const btn=document.querySelector("#btn")
// const stop=document.querySelector('#stop')
    
// btn.addEventlistener('keyup', (event)=>{
//     console.log(event.key)
// })

// stop.addEventlistener('click', function(){
//     btn.removeEventListener('click', show)
//})

const form=document.querySelector("form")
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    console.log(event.srcElement[0].value)
    console.log(event.srcElement[1].value)
    console.log(event)
    console.log("button clicked")
})