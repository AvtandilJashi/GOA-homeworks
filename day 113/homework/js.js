let myDiv = document.getElementById("myDiv");
myDiv.classList.add("highlight");

myDiv.classList.remove("highlight");

let toggleButton = document.getElementById("toggleButton");
let targetDiv = document.getElementById("targetDiv");

toggleButton.addEventListener("click", function () {
    targetDiv.classList.toggle("active");
});

let checkParagraph = document.getElementById("checkParagraph");
console.log(checkParagraph.classList.contains("important"));

let replaceDiv = document.getElementById("replaceDiv");
replaceDiv.classList.replace("red", "blue");

let itemDiv = document.getElementById("itemDiv");
console.log(itemDiv.classList.item(1));

let myList = document.getElementById("myList");

let newItem = document.createElement("li");
newItem.innerText = "New list item";
myList.appendChild(newItem);

myList.removeChild(myList.firstElementChild);

myList.children[1].innerText = "Updated Item 3";

let myParagraph = document.getElementById("myParagraph");
myParagraph.innerText = "New text content!";

let styledDiv = document.getElementById("styledDiv");
styledDiv.style.backgroundColor = "lightblue";
styledDiv.style.color = "darkblue";

let anotherListItem = document.createElement("li");
anotherListItem.innerText = "Another new item";
myList.appendChild(anotherListItem);

let removableList = document.getElementById("removableList");
removableList.removeChild(removableList.children[1]);

let myImage = document.getElementById("myImage");
myImage.src = "new-image.jpg";
myImage.alt = "Updated image";
