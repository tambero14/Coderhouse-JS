// como no me andaba el formulario y me la compliqué, investigué un poco y lo resolví con esto. No me queda muy en claro que es lo que hace igual
window.onload = initializeForm;

function initializeForm() {
    const form = document.getElementById('experienceForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addExperience();
    });
}


function addExperience() {
    const position = document.getElementById('position').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const description = document.getElementById('description').value;


    if (position && company && duration && description) {
        const experienceList = document.getElementById('experience-list');


        const newExperience = document.createElement('div');
        newExperience.classList.add('trabajo'); 
        newExperience.innerHTML = `
            <h2>${position}</h2>
            <h3>${company}</h3>
            <span>${duration}</span>
            <p>${description}</p>
        `;
         experienceList.appendChild(newExperience);

        // intenté resetear el formulario automáticamente   , pero no me anda..
        form.reset();
    } else {
        alert('Por favor, completa todos los campos del formulario.');
    }
}
