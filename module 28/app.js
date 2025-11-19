//DOM


// var button1 = document.getElementById("btn1")

// button1.onclick = function(){
    // alert('hello')
// }
  
var button1 = document.querySelector('button')

 button1.onclick = function(){
    alert('hello')
}

//addEventListener
button1.addEventListener('mouseover', function(){
    alert('hover')
})

var button2 = document.getElementById("leave")
button2.onmouseleave = function(){
    alert('leave event')
}
var button3 = document.getElementById("wheel")
button3.onmousewheel = function(){
    alert('wheel event')
}
var button4 = document.getElementById('style')
var text = document.getElementById('txt')

button4.onclick = function(){
    text.style.color = "red"
    text.backgroundColor = "lightgrey"
    text.textAlign = "center"
    text.padding = "20px"
    text.fontSize = "100px"

}

text.onmouseover = function(){
    text.style.csstext = "color: lightblue; text-align: center; font-size: 100px; padding: 20px"
}

var button5 = document.getElementById('classStyle')
var heading2 = document.getElementById('heading2')

button5.addEventListener('click' ,function(){
    heading2.classList.toggle('jsStyle')
})
//shape Challenge: Add buttons in HTML (circle, Rectangle, Triangle), using css after clicking 
//these buttons the shapes will be shown/drawn 