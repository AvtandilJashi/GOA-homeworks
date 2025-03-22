document.getElementById("outer").addEventListener("click", function() {
    console.log("outer clicked");
});

document.getElementById("inner").addEventListener("click", function() {
    console.log("inner clicked");
});

document.getElementById("button").addEventListener("click", function() {
    console.log("button clicked");
});

document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("Clicked item: " + event.target.textContent);
    }
});