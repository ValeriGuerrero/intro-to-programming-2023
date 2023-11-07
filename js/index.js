// setting the new date
let today = new Date();
// setting the year 
let thisYear = today.getFullYear();

const footer = document.querySelector("footer");

// Create a new <p> element
var copyright = document.createElement("p");

// You can also set its content or attributes if needed, for example:
copyright.textContent = "Copyright © 2023 MyCompany";

// Set the inner HTML of the 'copyright' element to display your name and the current year
copyright.innerHTML = "© Valeri Guerrero" + thisYear;

// Using "DOM Manipulation", append the 'copyright' element to the 'footer'
footer.appendChild(copyright);

//creating a variable listing my skills
let skills = ["Javascript", "CSS", "HTML"];

//
const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

// Iterate over the skillsArray starting at index 0
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];

    skillsList.appendChild(skill);
    //return i;
}
// Finally, append the skillsList to the skillsSection
skillsSection.appendChild(skillsList);