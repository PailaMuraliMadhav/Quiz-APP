const main=document.querySelector("h1");
// main.innerHTML = "Hello World!";// This line sets the text content of the h1 element to "Hello World!"
// main.textContent="<h3>Welcome </h3>";//this line sets the text content of the h1 element to "<h3>Welcome </h3>", which is not valid HTML for an h1 element.
// main.innerHTML="<h3>Welcome </h3>";//this line sets the inner HTML of the h1 element to "<h3>Welcome </h3>", which is valid HTML and will render as a heading inside the h1 element.
// console.log(main)

// // if you want to change CSS
// main.style.color="red";
// // background-color="blue";// This line is incorrect because it does not specify which element's background color to change.
// main.style.backgroundColor="blue";// This line sets the background color of the h1 element to blue.
// // .Cammel Cases used
// main.addEventListener("click",()=>{
//     console.log("Helo BhAAi");
    
// }) //to perform an action when the h1 element is clicked, you can add an event listener to it. This line adds a click event listener to the h1 element, which will log "Helo BhAAi" to the console when the h1 is clicked.

// main.addEventListener("mouseover",()=>{
//     main.style.color="red";
//     main.innerHTML="GG GG GG GG"
//     main.style.backgroundColor="blue";
// })// This line adds a mouseover event listener to the h1 element, which will change the text color to red, set the inner HTML to "GG GG GG GG", and change the background color to blue when the mouse hovers over the h1 element.


main.addEventListener("click",abc)

function abc(){
    main.style.color="green";
    main.style.backgroundColor="yellow";
    console.log("GG Bhaai");
}
