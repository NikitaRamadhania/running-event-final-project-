document.addEventListener("DOMContentLoaded", function () {

        /* countdown */
        const eventDate = new Date("March 8, 2026 05:00:00").getTime();

        setInterval(() => {

            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / 1000 / 60) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

    }, 1000);

    /* form submit */
    const form = document.querySelector("form");
    const modal = document.getElementById("successModal");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;

        if (name === "" || email === "") {
            alert("Please fill all required fields.");
            return;
        }

        modal.style.display = "flex";
    });

});

/* close modal */
function closeModal() {
    const modal = document.getElementById("successModal");
    modal.style.display = "none";
}