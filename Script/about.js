const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
    if(aboutTabs) {
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });
        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");
        if(activeTab === "experience") {
            const experience = document.querySelector(".experience-list");

            const experienceList = [
                {
                    id: 1,
                    date: "Present",
                    position: "Fresher",
                    company: "Self Projects & Practice",
                    details: "I have built multiple frontend projects using HTML, CSS, and JavaScript, including real-time chat applications and responsive websites. Through these projects, I have gained hands-on experience in UI design, debugging, and performance optimization. I am continuously learning and improving my skills to stay updated with the latest frontend technologies."
                }
            ];

            const experienceContent = experienceList.map((ele) => {
                return `
                    <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.position}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.company}</p>
                        </div>
                        <p>${ele?.details}</p>
                    </div>
                `;
            }).join("");
            if(experience) {
                experience.innerHTML = experienceContent;
            }
        }
        else if(activeTab === "education") {
            const education = document.querySelector(".education-list");

            const educationList = [
                {
                    id: 1,
                    date: "2023 - 2026",
                    department: "Bachelor's in Computer Applications",
                    college: "Amrapali University",
                }, {
                    id: 2,
                    date: "2019 - 2021",
                    department: "ITI (Electronics)",
                    college: "Govt. ITI, NCVT",
                }, {
                    id: 3,
                    date: "2019",
                    department: "Class 12th Science",
                    college: "Uttarakhand Board",
                }, {
                    id: 4,
                    date: "2017",
                    department: "Class 10th",
                    college: "Uttarakhand Board",
                }
            ];

            const educationContent = educationList.map((ele) => {
                return `
                    <div class="experience-box" key=${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.department}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.college}</p>
                        </div>
                    </div>
                `;
            }).join("");
            if(education) {
                education.innerHTML = educationContent;
            }
        }
        else if(activeTab === "skill") {
            const skill = document.querySelector(".skill-list");
            const skillList = [
                {
                    id: 1,
                    name: "HTML",
                    icon: "Upload\\skills\\html.png",
                }, {
                    id: 2,
                    name: "CSS",
                    icon: "Upload\\skills\\css.png",
                }, {
                    id: 3,
                    name: "JavaScript",
                    icon: "Upload\\skills\\js.png",
                }, {
                    id: 4,
                    name: "Node.JS",
                    icon: "Upload\\skills\\node.png",
                }, {
                    id: 5,
                    name: "MongoDB",
                    icon: "Upload\\skills\\mongodb.png",
                }
            ];
            
            const skillContent = skillList.map((ele) => {
                return `
                    <div class="skill-box" key=${ele?.id}>
                        <img src=${ele?.icon} alt=${ele?.name} title=${ele?.name} loading="lazy" />
                        <h3>${ele?.name}</h3>
                    </div>
                `;
            }).join("");
            if(skill) {
                skill.innerHTML = skillContent;
            }
        }
        else if(activeTab === "aboutMe") {
            const aboutMe = document.querySelector(".aboutMe-list");

            const aboutMeList = [
                {
                    id: 1,
                    key: "Name : ",
                    value: "Vishal Nayal"
                }, {
                    id: 2,
                    key: "Date of Birth : ",
                    value: "09 July 2002"
                }, {
                    id: 3,
                    key: "Phone : ",
                    value: "+91 6396488292"
                }, {
                    id: 4,
                    key: "Email : ",
                    value: "vishalnayal325@gmail.com"
                }, {
                    id: 5,
                    key: "Location : ",
                    value: "Bazpur, Uttarakhand"
                }
            ];

            const aboutMeContent = aboutMeList.map((ele) => {
                return `
                    <div class="aboutMe-box" key=${ele?.id}>
                        <span>${ele?.key}</span>
                        <span>${ele?.value}</span>
                    </div>
                `;
            }).join("");
            if(aboutMe) {
                aboutMe.innerHTML = aboutMeContent;
            }
        }
    });
});