let pElement = document.createElement("p");
pElement.innerText = "This is a paragraph.";
document.body.appendChild(pElement);

let h2Element = document.createElement("h2");
h2Element.innerText = "Subheading.";
document.body.appendChild(h2Element);
h2Element.innerText = "Updated Subheading.";

let divElement = document.createElement("div");
divElement.innerText = "This is a div.";
document.body.appendChild(divElement);
setTimeout(() => document.body.removeChild(divElement), 2000); 

let ulElement = document.createElement("ul");
let items = ["Item 1", "Item 2", "Item 3"];
items.forEach(text => {
    let li = document.createElement("li");
    li.innerText = text;
    ulElement.appendChild(li);
});
document.body.appendChild(ulElement);

console.log("First child:", ulElement.firstElementChild.innerText);
console.log("Last child:", ulElement.lastElementChild.innerText);

let h3Element = document.createElement("h3");
h3Element.innerText = "Inserted Heading.";
document.body.insertBefore(h3Element, document.body.firstChild);

let spanElement = document.createElement("span");
spanElement.innerText = "This is a span.";
let container = document.getElementById("container");
container.appendChild(spanElement);

console.log("Parent element of span:", spanElement.parentElement);
