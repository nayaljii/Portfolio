const media = document.querySelector('.contact-media');

const contactList = [
    {
        id: 1,
        icon: "ph ph-phone-call",
        name: "Phone: ",
        value: "+91 6396488292",
        href: "tel:+916396488292",
    }, {
        id: 2,
        icon: "ph ph-envelope",
        name: "Email: ",
        value: "vishalnayal325@gmail.com",
        href: "mailto:vishalnayal325@gmail.com",
    },{
        id: 3,
        icon: "ph ph-whatsapp-logo",
        name: "WhatsApp: ",
        value: "+91 6396488292",
        href: "https://wa.me/qr/VOEIPG4RE3XGB1",
    }, {
        id: 4,
        icon: "ph ph-map-pin",
        name: "Address: ",
        value: "Bazpur, Uttarakhand (262401)",
        href: "https://maps.app.goo.gl/sKdy5DxioNLHVEVr5",
    }
];

const contactContent = contactList.map((ele) => {
    return `
        <div class="media">
            <span><i class="${ele?.icon}"></i></span>
            <div class="contact-value">
                <p>${ele?.name}</p>
                <a href="${ele?.href}" target="_blank">${ele?.value}</a>
            </div>
        </div>
    `
}).join("");
if (media) media.innerHTML = contactContent;

// Send email using EmailJS

const sendBtn = document.querySelector('#send-msg');

const originalText = sendBtn.innerHTML;
const originalStyle = {
    backgroundColor: sendBtn.style.backgroundColor,
    color: sendBtn.style.color,
    border: sendBtn.style.border,
    boxShadow: sendBtn.style.boxShadow,
};

document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    
    sendBtn.innerHTML = '<i class="ph ph-spinner spinner"></i> Sending...';
    sendBtn.style.backgroundColor = '#4CAF50';
    sendBtn.style.color = '#fff';
    sendBtn.style.border = 'none';
    sendBtn.style.boxShadow = 'none';

    sendBtn.disabled = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        sendBtn.innerHTML = originalText;

        Object.assign(sendBtn.style, originalStyle);
        return Toastify({
            text: "Please fill in all fields.",
            duration: 2000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "rgb(206, 16, 16)",
            },
            }).showToast();
    }

    emailjs.send('service_ba8dfgm', 'template_tkh60q8', {
        name,
        email,
        phone,
        message,
    }).then(() => {
        Toastify({
            text: `Thanks ${name}, message sent 🚀`,
            duration: 2000,
            gravity: "top",
            position: "center",
            close: true,
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "rgb(9, 222, 38)",
            },
        }).showToast();
        setTimeout(() => {
            sendBtn.innerHTML = originalText;
            Object.assign(sendBtn.style, originalStyle);
            sendBtn.disabled = false;
        }, 2000);
    document.getElementById('contact-form').reset();
    })
    .catch((error) => {
        console.log(error);
        console.log("Status:", error.status);
        console.log("Text:", error.text);
    });
    // .catch((error) => {
    //     console.error('Error sending message:', error);
    //     Toastify({
    //         text: "Failed to send message. Please try again later.",
    //         duration: 2000,
    //         gravity: "top",
    //         position: "center",
    //         close: true,
    //         stopOnFocus: true, // Prevents dismissing of toast on hover
    //         style: {
    //             background: "rgb(206, 16, 16)",
    //         },
    //     }).showToast();
    //     setTimeout(() => {
    //         sendBtn.innerHTML = originalText;
    //         Object.assign(sendBtn.style, originalStyle);
    //         sendBtn.disabled = false;
    //     }, 2000);
    // });
});