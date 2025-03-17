function toggleSkills() {
    let skillsContainer = document.getElementById("skills-container");
    let skillsBtn = document.getElementById("skills-btn");

    if (skillsContainer.style.display === "none" || skillsContainer.style.display === "") {
        skillsContainer.style.display = "flex";
        skillsBtn.textContent = "Hide Skills";
    } else {
        skillsContainer.style.display = "none";
        skillsBtn.textContent = "Show Skills";
    }
}
