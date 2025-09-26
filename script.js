// Language translations
const translations = {
    cs: {
        'nav-home': 'Domů',
        'nav-gallery': 'Galerie',
        'nav-printer': 'Tiskárna',
        'nav-contact': 'Kontakt',
        'hero-title': 'JIC 3D Tisk',
        'cta-button': 'Objednat tisk',
        'modal-title': 'Objednat 3D tisk',
        'form-firstname': 'Jméno *',
        'form-lastname': 'Příjmení *',
        'form-email': 'Email *',
        'form-phone': 'Telefon',
        'form-material': 'Materiál',
        'material-pla': 'PLA - standardní',
        'material-abs': 'ABS - odolný',
        'material-petg': 'PETG - průhledný/silný',
        'material-tpu': 'TPU - flexibilní',
        'material-other': 'Jiný - upřesni v poznámce',
        'form-color': 'Barva',
        'form-quantity': 'Počet kusů',
        'form-description': 'Popis projektu *',
        'form-description-placeholder': 'Popište váš projekt - co chcete vytisknout, rozměry, speciální požadavky...',
        'form-files': '3D soubory (STL, OBJ, 3MF)',
        'file-upload-text': '📁 Klikněte pro výběr souborů nebo je sem přetáhněte',
        'file-note': 'Poznámka: Soubory nebudou odeslány přes formulář. Pošlete je prosím dodatečně na orders.jicprint@gmail.com',
        'submit-btn': 'Odeslat objednávku',
        'contact-methods-title': 'Alternativní kontakt',
        'contact-methods-note': 'Můžete nám také poslat soubory a požadavky přímo na email',
        'about-title': 'O společnosti JIC',
        'about-text1': 'Jsem JIC, věnuji se 3D tisku. Snažím se pomáhat lidem realizovat jejich nápady, ať už jde o vytištění prototypu nebo jen drobnosti pro radost.',
        'about-text2': 'Pro tisk používám různé metody a materiály, abych dosáhl co nejlepšího výsledku. S každým projektem se učím něco nového a beru to jako osobní výzvu.',
        'gallery-title': 'Naše práce',
        'printer-title': 'Naše tiskárna Creality K1C',
        'printer-subtitle': 'Creality K1C - Rychlost a přesnost',
        'printer-description': 'K1C je vysokorychlostní 3D tiskárna s uzavřenou komorou, zajišťující výjimečnou kvalitu tisku a stabilní provoz.',
        'printer-feature1': 'Maximální rychlost tisku až 600 mm/s',
        'printer-feature2': 'Uzavřená tisková komora pro stabilní teplotu',
        'printer-feature3': 'Automatická kalibrace podložky',
        'printer-feature4': 'Oblast tisku: 220×220×250 mm',
        'printer-feature5': 'Podpora různých materiálů (PLA, ABS, PETG, TPU)',
        'printer-feature6': 'AI kontrola kvality v reálném čase',
        'printer-feature7': 'Systém automatického vyrovnávání',
        'printer-feature8': 'Vzdálené monitorování přes aplikaci',
        'contact-title': 'Kontaktujte nás',
        'contact-info-title': 'Kontaktní informace',
        'contact-description': 'Zašlete nám své 3D modely a technické zadání na email a my se vám ozveme v nejkratším možném čase pro projednání detailů objednávky.',
        'qr-text': 'Naskenujte QR kód pro přechod na naši stránku Pinterest',
        'footer-text': 'Všechna práva vyhrazena.',
        'footer-slogan': 'Profesionální 3D tisk nejvyšší kvality'
    },
    ru: {
        'nav-home': 'Главная',
        'nav-gallery': 'Галерея',
        'nav-printer': 'Принтер',
        'nav-contact': 'Контакты',
        'hero-title': 'JIC 3D Печать',
        'cta-button': 'Заказать печать',
        'modal-title': 'Заказать 3D печать',
        'form-firstname': 'Имя *',
        'form-lastname': 'Фамилия *',
        'form-email': 'Email *',
        'form-phone': 'Телефон',
        'form-material': 'Материал',
        'material-pla': 'PLA - стандартный',
        'material-abs': 'ABS - прочный',
        'material-petg': 'PETG - прозрачный/прочный',
        'material-tpu': 'TPU - гибкий',
        'material-other': 'Другой - укажите в заметке',
        'form-color': 'Цвет',
        'form-quantity': 'Количество',
        'form-description': 'Описание проекта *',
        'form-description-placeholder': 'Опишите ваш проект - что нужно напечатать, размеры, особые требования...',
        'form-files': '3D файлы (STL, OBJ, 3MF)',
        'file-upload-text': '📁 Нажмите для выбора файлов или перетащите их сюда',
        'file-note': 'Примечание: Файлы не будут отправлены через форму. Пожалуйста, отправьте их дополнительно на orders.jicprint@gmail.com',
        'submit-btn': 'Отправить заказ',
        'contact-methods-title': 'Альтернативный контакт',
        'contact-methods-note': 'Вы также можете отправить файлы и требования напрямую на email',
        'about-title': 'О компании JIC',
        'about-text1': 'JIC — это небольшая мастерская, где я занимаюсь 3D-печатью. Я помогаю людям воплощать их идеи в реальность, будь то печать прототипа или просто мелочи для души.',
        'about-text2': 'Для печати я использую различные методы и материалы, стараясь достичь наилучшего результата. Каждый проект для меня — это новый опыт и личный вызов.',
        'gallery-title': 'Наши работы',
        'printer-title': 'Наш принтер Creality K1C',
        'printer-subtitle': 'Creality K1C - Скорость и точность',
        'printer-description': 'K1C — это высокоскоростной 3D принтер с закрытым корпусом, обеспечивающий исключительное качество печати и стабильную работу.',
        'printer-feature1': 'Максимальная скорость печати до 600 мм/с',
        'printer-feature2': 'Закрытая камера печати для стабильной температуры',
        'printer-feature3': 'Автоматическая калибровка стола',
        'printer-feature4': 'Область печати: 220×220×250 мм',
        'printer-feature5': 'Поддержка различных материалов (PLA, ABS, PETG, TPU)',
        'printer-feature6': 'AI-контроль качества в реальном времени',
        'printer-feature7': 'Система автоматического выравнивания',
        'printer-feature8': 'Дистанционный мониторинг через приложение',
        'contact-title': 'Свяжитесь с нами',
        'contact-info-title': 'Контактная информация',
        'contact-description': 'Отправьте нам ваши 3D модели и техническое задание на email, и мы свяжемся с вами в кратчайшие сроки для обсуждения деталей заказа.',
        'qr-text': 'Отсканируйте QR-код для перехода на нашу страницу Pinterest',
        'footer-text': 'Все права защищены.',
        'footer-slogan': 'Профессиональная 3D печать высочайшего качества'
    },
    ua: {
        'nav-home': 'Головна',
        'nav-gallery': 'Галерея',
        'nav-printer': 'Принтер',
        'nav-contact': 'Контакти',
        'hero-title': 'JIC 3D Друк',
        'cta-button': 'Замовити друк',
        'modal-title': 'Замовити 3D друк',
        'form-firstname': "Ім'я *",
        'form-lastname': 'Прізвище *',
        'form-email': 'Email *',
        'form-phone': 'Телефон',
        'form-material': 'Матеріал',
        'material-pla': 'PLA - стандартний',
        'material-abs': 'ABS - міцний',
        'material-petg': 'PETG - прозорий/міцний',
        'material-tpu': 'TPU - гнучкий',
        'material-other': 'Інший - вкажіть у примітці',
        'form-color': 'Колір',
        'form-quantity': 'Кількість',
        'form-description': 'Опис проєкту *',
        'form-description-placeholder': 'Опишіть ваш проєкт - що потрібно надрукувати, розміри, особливі вимоги...',
        'form-files': '3D файли (STL, OBJ, 3MF)',
        'file-upload-text': '📁 Натисніть для вибору файлів або перетягніть їх сюди',
        'file-note': 'Примітка: Файли не будуть надіслані через форму. Будь ласка, надішліть їх додатково на orders.jicprint@gmail.com',
        'submit-btn': 'Відправити замовлення',
        'contact-methods-title': 'Альтернативний контакт',
        'contact-methods-note': 'Ви також можете надіслати файли та вимоги безпосередньо на email',
        'about-title': 'Про компанію JIC',
        'about-text1': 'JIC — це невелика майстерня, де я займаюся 3D-друком. Я допомагаю людям втілювати їхні ідеї в реальність, чи то друк прототипу, чи просто дрібниці для душі.',
        'about-text2': 'Для друку я використовую різні методи та матеріали, намагаючись досягти найкращого результату. Кожен проєкт для мене — це новий досвід та особистий виклик.',
        'gallery-title': 'Наші роботи',
        'printer-title': 'Наш принтер Creality K1C',
        'printer-subtitle': 'Creality K1C - Швидкість та точність',
        'printer-description': 'K1C — це високошвидкісний 3D принтер із закритим корпусом, що забезпечує винятково високу якість друку та стабільну роботу.',
        'printer-feature1': 'Максимальна швидкість друку до 600 мм/с',
        'printer-feature2': 'Закрита камера друку для стабільної температури',
        'printer-feature3': 'Автоматичне калібрування столу',
        'printer-feature4': 'Область друку: 220×220×250 мм',
        'printer-feature5': 'Поддержка различных материалов (PLA, ABS, PETG, TPU)',
        'printer-feature6': 'AI-контроль якості в реальному часі',
        'printer-feature7': 'Система автоматичного вирівнювання',
        'printer-feature8': 'Дистанційний моніторинг через додаток',
        'contact-title': "Зв'яжіться з нами",
        'contact-info-title': 'Контактна інформація',
        'contact-description': 'Надішліть нам свої 3D моделі та технічне завдання на email, і ми зв\'яжемося з вами в найкоротші терміни для обговорення деталей замовлення.',
        'qr-text': 'Сканирууйте QR-код для переходу на нашу сторінку Pinterest',
        'footer-text': 'Усі права захищені.',
        'footer-slogan': 'Професійний 3D друк найвищої якості'
    }
};

let currentLanguage = 'cs';

function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`).classList.add('active');

    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'tel')) {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update select options
    document.querySelectorAll('select option[data-key]').forEach(option => {
        const key = option.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            option.textContent = translations[lang][key];
        }
    });

    // Update document language
    document.documentElement.lang = lang;
    
    // Update title
    const titles = {
        cs: 'JIC - 3D tisk',
        ru: 'JIC - 3D печать',
        ua: 'JIC - 3D друк'
    };
    document.title = titles[lang];
}

// Modal functions
function openOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form
    document.getElementById('orderForm').reset();
    document.getElementById('fileList').innerHTML = '';
}

// File upload handler and form submission
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('files');
    const fileList = document.getElementById('fileList');
    const fileUpload = document.querySelector('.file-upload');

    // Set replyto field
    const emailField = document.getElementById('email');
    const replytoField = document.getElementById('replyto');
    
    emailField.addEventListener('input', function() {
        replytoField.value = this.value;
    });

    // File selection handler
    fileInput.addEventListener('change', function() {
        updateFileList();
    });

    // Drag and drop handlers
    fileUpload.addEventListener('dragover', function(e) {
        e.preventDefault();
        fileUpload.style.background = '#e6ebff';
        fileUpload.style.borderColor = '#5a67d8';
    });

    fileUpload.addEventListener('dragleave', function(e) {
        e.preventDefault();
        fileUpload.style.background = '#f8f9ff';
        fileUpload.style.borderColor = '#667eea';
    });

    fileUpload.addEventListener('drop', function(e) {
        e.preventDefault();
        fileUpload.style.background = '#f8f9ff';
        fileUpload.style.borderColor = '#667eea';
        
        const files = e.dataTransfer.files;
        fileInput.files = files;
        updateFileList();
    });

    function updateFileList() {
        const files = fileInput.files;
        if (files.length === 0) {
            fileList.innerHTML = '';
            return;
        }

        const labels = {
            cs: 'Vybrané soubory:',
            ru: 'Выбранные файлы:',
            ua: 'Вибрані файли:'
        };

        let html = `<strong>${labels[currentLanguage]}</strong><br>`;
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const size = (file.size / 1024 / 1024).toFixed(2);
            html += `📄 ${file.name} (${size} MB)<br>`;
        }
        fileList.innerHTML = html;
    }

    // Form submission handler
    document.getElementById('orderForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        const loadingTexts = {
            cs: 'Odesílání...',
            ru: 'Отправка...',
            ua: 'Відправка...'
        };
        submitBtn.textContent = loadingTexts[currentLanguage];
        
        const formData = new FormData(this);
        
        // Remove files from FormData since we can't send them via Formspree
        formData.delete('files');
        
        // Send via Formspree
        fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showSuccessMessage();
            } else {
                response.json().then(data => {
                    if (Object.hasOwnProperty.call(data, 'errors')) {
                        showErrorMessage();
                    } else {
                        showSuccessMessage();
                    }
                })
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showErrorMessage();
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        });
    });
});

function showSuccessMessage() {
    const messages = {
        cs: {
            title: '✅ Objednávka odeslána!',
            text: 'Děkujeme za vaši objednávku. Ozveme se vám v nejkratším možném čase na uvedený email.',
            note: 'Nezapomeňte připojit své 3D soubory v dalším emailu na orders.jicprint@gmail.com'
        },
        ru: {
            title: '✅ Заказ отправлен!',
            text: 'Спасибо за ваш заказ. Мы свяжемся с вами в ближайшее время по указанному email.',
            note: 'Не забудьте приложить ваши 3D файлы в отдельном письме на orders.jicprint@gmail.com'
        },
        ua: {
            title: '✅ Замовлення відправлено!',
            text: 'Дякуємо за ваше замовлення. Ми зв\'яжемося з вами найближчим часом за вказаним email.',
            note: 'Не забудьте додати ваші 3D файли в окремому листі на orders.jicprint@gmail.com'
        }
    };

    const msg = messages[currentLanguage];
    
    const successHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
            <h3 style="color: #667eea; margin-bottom: 1rem;">${msg.title}</h3>
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${msg.text}</p>
            <div style="background: #f0f7ff; padding: 1rem; border-radius: 8px; border-left: 4px solid #667eea; margin-bottom: 1.5rem;">
                <p style="margin: 0; color: #555;"><strong>📎 Важно:</strong> ${msg.note}</p>
            </div>
            <button onclick="closeOrderModal()" 
                    style="background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 1rem;">
                OK
            </button>
        </div>
    `;

    document.querySelector('.modal-body').innerHTML = successHTML;
}

function showErrorMessage() {
    const messages = {
        cs: {
            title: '❌ Chyba při odesílání',
            text: 'Omlouváme se, při odesílání došlo k chybě. Zkuste to prosím znovu nebo nás kontaktujte přímo.',
            retry: 'Zkusit znovu',
            contact: 'Kontaktovat přímo'
        },
        ru: {
            title: '❌ Ошибка отправки',
            text: 'Извините, при отправке произошла ошибка. Попробуйте еще раз или свяжитесь с нами напрямую.',
            retry: 'Попробовать снова',
            contact: 'Связаться напрямую'
        },
        ua: {
            title: '❌ Помилка відправки',
            text: 'Вибачте, при відправці сталася помилка. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.',
            retry: 'Спробувати знову',
            contact: 'Зв\'язатися безпосередньо'
        }
    };

    const msg = messages[currentLanguage];
    
    const errorHTML = `
        <div style="text-align: center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">😞</div>
            <h3 style="color: #e74c3c; margin-bottom: 1rem;">${msg.title}</h3>
            <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${msg.text}</p>
            <div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border-left: 4px solid #e74c3c; margin-bottom: 1.5rem;">
                <p style="margin: 0; color: #555;"><strong>📧 Email:</strong> orders.jicprint@gmail.com</p>
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button onclick="location.reload()" 
                        style="background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer;">
                    ${msg.retry}
                </button>
                <button onclick="window.location.href='mailto:orders.jicprint@gmail.com'" 
                        style="background: #e74c3c; color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer;">
                    ${msg.contact}
                </button>
            </div>
        </div>
    `;

    document.querySelector('.modal-body').innerHTML = errorHTML;
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('orderModal');
    if (e.target === modal) {
        closeOrderModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.5)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 8px 32px rgba(31, 38, 135, 0.37)';
    }
});

// Add hover animation to sections
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});