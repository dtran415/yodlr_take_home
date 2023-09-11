document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email");
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const user = {
            email: email.value,
            firstName: firstName.value,
            lastName: lastName.value
        };
        axios.post("/users", user).then((response) => {
            if (response.status === 200) {
                const messageDiv = document.getElementById("message");
                messageDiv.innerHTML = `User ${email.value} created`;
                email.value = "";
                firstName.value = "";
                lastName.value = "";
            } else {
                alert("Error creating user");
            }
        }).catch((error) => {
            alert(error);
        })
    })
})