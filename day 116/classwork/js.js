    let form = document.getElementById("registerForm");

        

        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let message = document.getElementById("message");
        let body = document.body;

        if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
            alert("გთხოვთ, შეავსოთ ყველა ველი!");
            return;
        }

        if (password !== confirmPassword) {
            body.style.backgroundColor = "red";
            message.style.color = "white";
            message.textContent = "გაფრთხილება: პაროლები არ დაემთხვქ!";
            return;
        }

        body.style.backgroundColor = "green";
        message.style.color = "white";
        message.textContent = "Successfully Login!";
    

