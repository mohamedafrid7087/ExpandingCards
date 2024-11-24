const panels = document.querySelectorAll('.panel')
panels.forEach( panel => {
    panel.addEventListener('click', ()=>{   
        removeActiveClasses()       // removes the active classes first 
        panel.classList.add('active')  // and adds all the active classes 
    })

})

function removeActiveClasses(){  // remove class 
    panels.forEach( panel => {    // for each panel removes the active classes 
    panel.classList.remove('active')
})
}