(function () {
    emailjs.init("HdgwpW0sXNb45MWMe");
})();

const form = document.getElementById("contact-form");
const successMsg = document.getElementById("success-msg");
const button = form.querySelector("button");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    button.innerHTML = "Sending...";
    button.disabled = true;

    emailjs.sendForm("service_hitz4cj", "template_69hv0lr", this)
        .then(function () {
            successMsg.style.display = "block";
            form.reset();

            button.innerHTML = '<i class="bi bi-send"></i> Send Message';
            button.disabled = false;
        }, function (error) {
            alert("Failed to send message ❌");
            console.log(error);

            button.innerHTML = '<i class="bi bi-send"></i> Send Message';
            button.disabled = false;
        });
});

