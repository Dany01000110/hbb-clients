const togglePasswordorigine = document.querySelector("#togglePasswordorigin");
const hiddePasswordorigine = document.querySelector("#hiddePasswordorigin");
const password = document.querySelector("#passwordorigin");

togglePasswordorigine.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("hidden");
    hiddePasswordorigine.classList.toggle("hidden");
});

hiddePasswordorigine.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("hidden");
    togglePasswordorigine.classList.toggle("hidden");
});

const togglePasswordnew = document.querySelector("#togglePasswordnew");
const hiddePasswordnew = document.querySelector("#hiddePasswordnew");
const passwordnew = document.querySelector("#newpassword");

togglePasswordnew.addEventListener("click", function () {
    // toggle the type attribute
    const type = passwordnew.getAttribute("type") === "password" ? "text" : "password";
    passwordnew.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("hidden");
    hiddePasswordnew.classList.toggle("hidden");
});

hiddePasswordnew.addEventListener("click", function () {
    // toggle the type attribute
    const type = passwordnew.getAttribute("type") === "password" ? "text" : "password";
    passwordnew.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("hidden");
    togglePasswordnew.classList.toggle("hidden");
});

const togglePasswordnewconfirm = document.querySelector("#togglePasswordnewconfirm");
const hiddePasswordnewconfirm = document.querySelector("#hiddePasswordnewconfirm");
const passwordnewconfirm = document.querySelector("#newpasswordconfirm");

togglePasswordnewconfirm.addEventListener("click", function () {
    // toggle the type attribute
    const type = passwordnewconfirm.getAttribute("type") === "password" ? "text" : "password";
    passwordnewconfirm.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("hidden");
    hiddePasswordnewconfirm.classList.toggle("hidden");
});

hiddePasswordnewconfirm.addEventListener("click", function () {
    // toggle the type attribute
    const type = passwordnewconfirm.getAttribute("type") === "password" ? "text" : "password";
    passwordnewconfirm.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("hidden");
    togglePasswordnewconfirm.classList.toggle("hidden");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});