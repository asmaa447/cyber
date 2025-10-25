// ملف الجافاسكريبت للمشروع

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        function showError(input, message) {
            const formGroup = input.parentElement;
            formGroup.classList.add('error');
            formGroup.querySelector('.error-message').innerText = message;
        }

        function clearError(input) {
            const formGroup = input.parentElement;
            formGroup.classList.remove('error');
            formGroup.querySelector('.error-message').innerText = '';
        }

        let nameOk = name.value.trim() !== '';
        if (nameOk) {
            clearError(name);
        } else {
            showError(name, 'الاسم مطلوب.');
        }

        let emailOk = email.value.trim() !== '';
        if (emailOk) {
            clearError(email);
        } else {
            showError(email, 'الإيميل مطلوب.');
        }

        let messageOk = message.value.trim() !== '';
        if (messageOk) {
            clearError(message);
        } else {
            showError(message, 'الرسالة مطلوبة.');
        }

        if (nameOk && emailOk && messageOk) {
            alert('تم الإرسال بنجاح!');
            contactForm.reset();
            clearError(name);
            clearError(email);
            clearError(message);
        }
    });
}
// --- الكود الجديد لتفعيل الصفحتين ---

// تفعيل فورم الدخول (login.html)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('تم تسجيل الدخول بنجاح!');
        window.location.href = 'index.html';
    });
}

// تفعيل فورم إنشاء الحساب (signup.html)
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('تم إنشاء حسابك بنجاح!');
        window.location.href = 'index.html';
    });
}
// تفعيل الهامبرغر
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}