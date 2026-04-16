const projectList = [
    {
        id: 1,
        number: "01",
        logo: "Upload/chatapp.png",
        title: "Real-Time Chat Application - Vish'sUp",
        description: "<b>•</b> Developed a real-time chat system using WebSockets for instant bidirectional communication.<br><b>•</b> Implemented features like live messaging, online user tracking, timestamps, and message deletion.<br><b>•</b> Designed a responsive and user-friendly UI for seamless experience across devices.<br><b>•</b> Integrated MongoDB for efficient data storage and retrieval.<br><b>•</b> Deployed the application and handled real-time client-server communication.<br><i>Note: First load may take a few seconds due to server wake-up (free hosting).</i>",
        techStack: ["Node.js", "Express.js","Socket.io", "MongoDB"],
        image: "Upload/projects/chatapp.png",
        liveLink: "https://chat-app-r028.onrender.com",
        githubLink: "https://github.com/nayaljii/chat-app"
    }
];

const project = document.querySelector(".projects");               
let currentIndex = 0;
const renderProject = (index) => {
    const projectContent = projectList[index];
    const previousDisabled = currentIndex === 0;
    const nextDisabled = currentIndex === projectList.length - 1;
    project.innerHTML = `
        <div class="project-info" key=${projectContent?.id}>
            <h3>${projectContent?.number}</h3>
            <span class="project-icon">
                <img src=${projectContent?.logo} alt="logo" title="Project logo" loading="lazy">
                <h2>${projectContent?.title}</h2>
            </span>
            <p>${projectContent?.description}</p>
            <div class="tech-stack">
                ${projectContent?.techStack?.map((tech, i) => {
                    return `<span key=${i}>${tech}</span>`;
                }).join(", ")}
            </div>
            <hr>
            <div class="links">
                <a href=${projectContent?.liveLink} target="_blank">
                <i class="ph ph-link"></i>
                </a>
                <a href=${projectContent?.githubLink} target="_blank">
                    <i class="ph ph-github-logo"></i>
                </a>
            </div>
        </div>
        <div class="carousel">
            <img src=${projectContent?.image} alt="Project preview image" style="width: 100;">
            <div class="arrows">
                <a href="javascript:void(0)" id="previous" class=${previousDisabled?'disabled-btn' : ''}><i class="ph ph-caret-left"></i></a>
                <a href="javascript:void(0)" id="next" class=${nextDisabled?'disabled-btn' : ''}><i class="ph ph-caret-right"></i></a>
            </div>
        </div>
    `;
    document.getElementById("previous").addEventListener("click", (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });
    document.getElementById("next").addEventListener("click", (e) => {
        e.preventDefault();
        if (currentIndex < projectList.length - 1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);