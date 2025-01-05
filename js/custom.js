// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});

// date picker
$(function () {
    $("#inputDate").datepicker({
        autoclose: true,
        todayHighlight: true
    }).datepicker('update', new Date());
});

// owl carousel slider js
$('.team_carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        576: {
            items: 2,
        },
        992: {
            items: 3
        }
    }
})

// ========================written by us again======================
// Contact
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message');

    const sendEmail = (e) => {
        e.preventDefault();

        // check if the field has a value 
        if(
            contactName.value === '' ||
            contactEmail.value === '' || 
            contactSubject.value === '' ||
            contactMessage.value === ''
        ) {
          // show message
          errorMessage.textContent= 'write all the input fields'  
        }
        
        else{
            // serviceID - templateID --#form- publickey
            emailjs.sendForm('service_7p7zajk',
                'template_vu8cyll',
                '#contact-form',
                'ug6w5gs4__PpVrwzM'

            ).then(() =>{
                //show message and add color, window + dot to open emoji
                errorMessage.classList.add('color-first');
                errorMessage.textContent = 'Message sent ✔️';

                // remove message after 5 seconds
                setTimeout(() => {
                    errorMessage.textContent= '';   
                }, 5000);
            }, (error) => {
                alert('OOPs! SOMETHING WENT WRONG...' , error);
            });

            //clear input fields 
            contactName.value='';
            contactEmail.value= '';
            contactSubject.value='';
            contactMessage.value='';
    };
}
    contactForm.addEventListener('submit', sendEmail);