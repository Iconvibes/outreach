const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phone = document.getElementById('phone').value;
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value;

    const subject = `Message from ${firstname} ${lastname}`;
    const body = `Category: ${category}\n\nMessage: ${message}\n\nPhone Number: ${phone}`;

    const mailtoLink = `mailto:outreachcommunity73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // refresh form
    form.reset();
});
