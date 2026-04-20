const projectList = [
    {
        id: 1,
        number: "01",
        logo: "Upload/chatapp.png",
        title: "Real-Time Chat Application - Vish'sUp",
        description: "<b>•</b> Developed a real-time chat application enabling instant bidirectional communication.<br><b>•</b> Implemented features like live messaging, online user tracking, timestamps, and message deletion.<br><b>•</b> Built a responsive, user-friendly interface for seamless experience across devices.<br><b>•</b> Integrated AI chatbot support for intelligent, interactive conversations.<br><b>•</b> Deployed the application with efficient data handling and smooth client-server communication.",
        techStack: ["Node.js", "Express.js","Socket.io", "MongoDB", "OpenAI"],
        image: "Upload/projects/chatapp.jpeg",
        liveLink: "https://vishsup-nayaljii.vercel.app",
        githubLink: "https://github.com/nayaljii/chat-app"
    }, {
        id: 2,
        number: "02",
        logo: "",
        title: "Game - TIC TAC TOE",
        description: "<b>•</b> Developed an interactive Tic Tac Toe game with smooth gameplay logic.<br><b>•</b> Implemented turn-based system with real-time win and draw detection.<br><b>•</b> Added restart functionality for continuous gameplay experience.<br><b>•</b> Designed a clean and responsive UI for all devices.<br><b>•</b> Focused on efficient game state management and user interaction.",
        techStack: [""],
        image: "Upload/projects/tic-tac-toe.png",
        liveLink: "https://tic-tac-toe-nayaljii.vercel.app",
        githubLink: "https://github.com/nayaljii/Tic-Tac-Toe"
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