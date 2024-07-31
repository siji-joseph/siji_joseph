/** ======================= Toggle Icon Navbar ======================= */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".nav-bar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/** ======================= Scroll active link ======================= */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const link = document.querySelector('header nav a[href*=' + id + ']');
            if (link) {
                link.classList.add('active');
            }

            // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            // navLinks.forEach.apply(links => {
            //     links.classList.remove('active');
            //     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            // });
        }
    });
    /** ======================= Sticky navbar ======================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /** ======================= remove toggle icon and navbar ======================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

}

/** ======================= Scroll reveal ======================= */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .skill-left', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content, .skill-right', {origin: 'right'});

/** ======================= typed js  ======================= */
const typed = new Typed('.multiple-text', {
    strings: ['Software developer', 'Application Support Specialist'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
})

function sendEmail() {

    console.log(document.getElementById("name").value)

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_88xenbi";
    const templateId = "template_odh3l9n";

    emailjs.send(serviceID, templateId, params).then(res => 
        {
            document.getElementById('name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('phone').value = ""
            document.getElementById('subject').value = ""
            document.getElementById('message').value = ""
            console.log(res);
            alert("your message sent successfully");
        }
    ).catch(err => console.log(err));
}


const circles = document.querySelectorAll(".circle");
circles.forEach(elem => {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i=0; i< dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for(i=0; i<percent; i++) {
        pointsMarked[i].classList.add("marked");
    }

})

