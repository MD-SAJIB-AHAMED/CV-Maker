let educationCount = 0;
let languageCount = 0;
let skillCount = 0;
let projectCount = 0;

function addEducation() {
    const educationList = document.getElementById("education-list");
    educationCount++;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Education ${educationCount}`;
    input.className = "education-input";
    educationList.appendChild(input);
}

function addLanguage() {
    const languagesList = document.getElementById("languages-list");
    languageCount++;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Language ${languageCount}`;
    input.className = "language-input";
    languagesList.appendChild(input);
}

function addSkill() {
    const skillsList = document.getElementById("skills-list");
    skillCount++;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Skill ${skillCount}`;
    input.className = "skill-input";
    skillsList.appendChild(input);
}

function addProject() {
    const projectsList = document.getElementById("projects-list");
    projectCount++;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Project ${projectCount}`;
    input.className = "project-input";
    projectsList.appendChild(input);
}

function generateCV() {
    document.getElementById("loading").style.display = "block";
    setTimeout(function() {
        document.getElementById("loading").style.display = "none";
        document.getElementById("cv-container").style.display = "block";

        document.getElementById("nameText").textContent = document.getElementById("name").value;
        document.getElementById("titleText").textContent = document.getElementById("title").value;
        document.getElementById("aboutMeText").textContent = document.getElementById("about").value;
        document.getElementById("emailText").textContent = document.getElementById("email").value;
        document.getElementById("phoneText").textContent = document.getElementById("phone").value;
        document.getElementById("addressText").textContent = document.getElementById("address").value;

        const educationInputs = document.querySelectorAll(".education-input");
        const educationText = document.getElementById("educationText");
        educationText.innerHTML = "";
        educationInputs.forEach(input => {
            if (input.value.trim()) {
                const li = document.createElement("li");
                li.textContent = input.value;
                educationText.appendChild(li);
            }
        });

        const languageInputs = document.querySelectorAll(".language-input");
        const languageText = document.getElementById("languageText");
        languageText.innerHTML = "";
        languageInputs.forEach(input => {
            if (input.value.trim()) {
                const li = document.createElement("li");
                li.textContent = input.value;
                languageText.appendChild(li);
            }
        });

        const skillInputs = document.querySelectorAll(".skill-input");
        const skillsText = document.getElementById("skillsText");
        skillsText.innerHTML = "";
        skillInputs.forEach(input => {
            if (input.value.trim()) {
                const li = document.createElement("li");
                li.textContent = input.value;
                skillsText.appendChild(li);
            }
        });

        const projectInputs = document.querySelectorAll(".project-input");
        const projectsText = document.getElementById("projectsText");
        projectsText.innerHTML = "";
        projectInputs.forEach(input => {
            if (input.value.trim()) {
                const li = document.createElement("li");
                li.textContent = input.value;
                projectsText.appendChild(li);
            }
        });

        const pictureInput = document.getElementById("picture").files[0];
        const profilePic = document.getElementById("profilePic");

        if (pictureInput) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.innerHTML = `<img src="${e.target.result}" alt="Profile Picture">`;
            };
            reader.readAsDataURL(pictureInput);
        } else {
            profilePic.innerHTML = "";
        }
    }, 1000);
}

function downloadCV() {
    document.getElementById("loading").style.display = "block";
    setTimeout(function() {
        const element = document.getElementById('cv-container');
        html2pdf().from(element).save('CV.pdf').then(function () {
            document.getElementById("loading").style.display = "none";
        }).catch(function (err) {
            console.error("Error generating PDF: ", err);
            document.getElementById("loading").style.display = "none";
        });
    }, 1000);
}