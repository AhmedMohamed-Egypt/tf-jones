const heading = document.querySelector('.serviceWord')
let items = document.querySelectorAll('.carousel:not(.js) .carousel-item')

if(heading){


   const words = heading.textContent.trim().split(' ')
   const txt = words.map((item,index)=>{
   if(index===words.length-1){
    return `<span class="afterElement"><span class="word-style">${item}</span></span>`
   }else {
    return `<span class="">${item}</span>`
   }

   
   }).join(' ')
   console.log(txt)
  heading.innerHTML = txt
}

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=0; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})