const name = document.getElementById('name');
const position = document.getElementById('position');
const allergy = document.getElementById('allergy');
const tigerNames = document.getElementById('tiger-names');

const json = window.localStorage.getItem('applicant');
const hydratedApplicant = JSON.parse(json);
console.log(hydratedApplicant);




name.textContent = hydratedApplicant.name;
//name refers to an element of our dom tree
position.textContent = hydratedApplicant.position;
allergy.textContent = hydratedApplicant.allergy;
tigerNames.textContent = hydratedApplicant.tigerName.join(' ');
