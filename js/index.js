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
let skills = ["Javascript: Beginner", "CSS: Intermediate", "HTML: Intermediate"];

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

const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    // Clear the form
    messageForm.reset()
    //li.innerHTML = `<p><strong>Welcome, ${usersName}!</strong> We've received your message ${usersMessage} with the email ${usersEmail}</p>`

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");


    // Create a mailto link and a span
    newMessage.innerHTML = `
      <p><strong>Welcome, ${usersName}!</strong> We've received your message ${usersMessage} with the email ${usersEmail}</p>
      <a href="mailto:${usersEmail}">${usersName}</a>
      <span>${usersMessage}</span>
    `;


    // Create a remove button
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    // Create a span for the button
    const buttonSpan = document.createElement("span");
    buttonSpan.appendChild(removeButton);


    // Add event listener to the removeButton
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();


    });


    // Append removeButton and buttonSpan to newMessage
    newMessage.appendChild(removeButton);
    newMessage.appendChild(buttonSpan);

    // Add a class to the button for easier styling
    removeButton.classList.add('remove-button');

    // Append newMessage to messageList
    messageList.appendChild(newMessage);
});

let githubRequest = new XMLHttpRequest();

githubRequest.open("GET", "https://api.github.com/users/ValeriGuerrero/repos");

githubRequest.send();

githubRequest.onload = function () {
    let repositories = JSON.parse(githubRequest.response)
    console.log(repositories);
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
        // Create a new list item (li) element
        let project = document.createElement('li');
        project.innerText = repositories[i].name;
        projectList.appendChild(project);

    }
};
