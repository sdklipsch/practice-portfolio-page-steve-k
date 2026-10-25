document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll(".logo-item");
    const descriptionBox = document.getElementById("description-box");
    const jobDetails = document.querySelectorAll(".job-details");

    logos.forEach(logo => {
        logo.addEventListener("click", () => {
            const targetId = logo.getAttribute("data-target");
            const isAlreadyActive = logo.classList.contains("active");


            logos.forEach(l => l.classList.remove("active"));

            if  (isAlreadyActive) {
                descriptionBox.classList.add("hidden");
                return;
            }

            logo.classList.add("active");

            descriptionBox.classList.remove("hidden");

            jobDetails.forEach(detail => {
                if (detail.id === targetId) {
                    detail.classList.remove("hidden");
                } else {
                    detail.classList.add("hidden");
                }
            });
        });
    });
});
