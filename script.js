const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

// Set Intro as active by default
window.addEventListener('load', () => {
    links.forEach(link => {
        if (link.getAttribute('href') === '#hero') {
            link.classList.add('active');
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    // Close other open items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) item.classList.remove("active");
    });

    // Toggle current item
    faqItem.classList.toggle("active");
  });
});

(() => {
    const card = document.getElementById('nexio-card');
    const frontSide = document.getElementById('nexio-frontSide');
    const backSide = document.getElementById('nexio-backSide');
    const nameInput = document.getElementById('nexio-nameInput');
    const roleInput = document.getElementById('nexio-roleInput');
    const companyInput = document.getElementById('nexio-companyInput');
    const cardName = document.getElementById('nexio-cardName');
    const cardRole = document.getElementById('nexio-cardRole');
    const cardCompany = document.getElementById('nexio-cardCompany');
    const qrFront = document.getElementById('nexio-qrFront');
    const qrBack = document.getElementById('nexio-qrBack');
    const logoImg = document.getElementById('nexio-logoImg');

    let flipTimer = null;

    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        resetAutoFlipTimer();
    });

    function resetAutoFlipTimer() {
        if (flipTimer) clearTimeout(flipTimer);
        if (card.classList.contains('flipped')) {
            flipTimer = setTimeout(() => {
                card.classList.remove('flipped');
            }, 3000);
        }
    }

    card.addEventListener('mousedown', () => clearTimeout(flipTimer));
    card.addEventListener('mouseup', resetAutoFlipTimer);

    nameInput.addEventListener('input', () => {
        cardName.textContent = (nameInput.value || "YOUR NAME").toUpperCase();
    });

    const updateRoleCompany = () => {
        cardRole.textContent = (roleInput.value || "ROLE").toUpperCase();
        cardCompany.textContent = (companyInput.value || "COMPANY").toUpperCase();
    };

    roleInput.addEventListener('input', updateRoleCompany);
    companyInput.addEventListener('input', updateRoleCompany);

    const colorDots = {
        white: document.getElementById('nexio-whiteDot'),
        black: document.getElementById('nexio-blackDot'),
        navy: document.getElementById('nexio-navyDot')
    };

    Object.entries(colorDots).forEach(([color, dot]) => {
        dot.addEventListener('click', () => {
            Object.values(colorDots).forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
            frontSide.className = `nexio-card-side front ${color}`;
            backSide.className = `nexio-card-side back ${color}`;

            if (color === 'white') {
                logoImg.src = 'logo-2-black.png';
                qrFront.src = 'qr-black.png';
                qrBack.src = 'qr-black.png';
            } else {
                logoImg.src = 'logo-2.png';
                qrFront.src = 'qr-white.png';
                qrBack.src = 'qr-white.png';
            }
        });
    });
})();




