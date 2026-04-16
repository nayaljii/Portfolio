// const servicesList = [{
//         id:1,
//         icon:"ph-code",
//         text:"Creative Web Design",
//         para:"Crafting visually stunning and user-friendly websites that leave a lasting impression. From concept to creation, we bring your vision to life with innovative design and seamless functionality."
//     },{
//         id:2,
//         icon:"ph-paint-brush",
//         text:"UX/UI Design",
//         para:"Turning ideas into visually appealing and modern website designs. We create user-friendly interfaces that enhance the overall user experience, ensuring your website not only looks great but also functions seamlessly."
//     },{
//         id:3,
//         icon:"ph-bug",
//         text:"Debugging & Optimization",
//         para:"Fixing bugs and optimizing code for better performance. We identify and resolve issues in your website's code, ensuring it runs smoothly and efficiently, providing an optimal user experience."
//     },{
//         id:4,
//         icon:"ph-monitor",
//         text:"Real-Time Web Apps",
//         para:"Building dynamic and interactive web applications that provide real-time updates and seamless user experiences. We leverage cutting-edge technologies to create responsive and engaging web apps that meet your specific needs."
//     },{
//         id:5,
//         icon:"ph-rocket",
//         text:"Fast & Efficient Development",
//         para:"Delivering high-quality web solutions within tight deadlines. We streamline the development process to ensure your project is completed on time and within budget, without compromising on quality."
//     }];
// const services = document.getElementsByClassName('service-list');

// const innerContent = servicesList.map((l) => {
//     return `
//     <div class="box" key=${l?.id}>
//         <div class="head-icons">
//             <i class="ph ${l?.icon}"></i>
//             <span><i class="ph ph-caret-down"></i></span>
//         </div>
//         <h3>${l?.text}</h3>
//         <span class="spacer"></span>
//         <p>${l?.para}</p>
//     </div>`;
// }).join("");
            
// Array.from(services).forEach((ele) => {
//     ele.innerHTML = innerContent;
// });