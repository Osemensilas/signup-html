const seePasswords = document.querySelectorAll(".see-password");
const hidePasswords = document.querySelectorAll(".hide-password");

for (let i = 0; i < seePasswords.length; i++) {
    let seePassword = seePasswords[i];

    seePassword.addEventListener("click", function(e) {
        let seePass = e.target;
        let hidePass = e.target.parentElement.children[3];

        seePass.classList.add("active");
        hidePass.classList.add("active");

        e.target.parentElement.children[1].type = "text";
    });
}

for (let i = 0; i < hidePasswords.length; i++) {
    let hidePassword = hidePasswords[i];

    hidePassword.addEventListener("click", function(e) {
        let hidePass = e.target;
        let seePass = e.target.parentElement.children[2];

        seePass.classList.remove("active");
        hidePass.classList.remove("active");

        e.target.parentElement.children[1].type = "password";
    });
}