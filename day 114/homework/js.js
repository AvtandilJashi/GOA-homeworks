document.getElementById("changeColor").addEventListener("click", function () {
    let colorDiv = document.getElementById("colorDiv");
    colorDiv.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

document.getElementById("changeImage").addEventListener("click", function () {
    let image = document.getElementById("image");
    image.src = image.src.includes("image1.jpg") ? "image2.jpg" : "image1.jpg";
});

document.getElementById("toggleText").addEventListener("click", function () {
    let text = document.getElementById("textToggle");
    text.style.display = text.style.display === "none" ? "block" : "none";
});

let counter = 0;
document.getElementById("increaseCounter").addEventListener("click", function () {
    counter++;
    document.getElementById("counterSpan").innerText = counter;
});

document.getElementById("checkAnswer").addEventListener("click", function () {
    let options = document.getElementsByName("quiz");
    let result = document.getElementById("quizResult");
    for (let option of options) {
        if (option.checked) {
            result.innerText = option.value === "Paris" ? "Correct!" : "Wrong Answer!";
            break;
        }
    }
});
