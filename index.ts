// lisenting element
document.getElementById('resume form')?.addEventListener('submit', function(event){
    event.preventDefault();


    //type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skills') as HTMLInputElement;


if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){
     
    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value; 
    const education = educationElement.value; 
    const experience = experienceElement.value;
    const skills = skillElement.value

}

     // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${emailElement} </p>
    <p><strong>Phone Number:</strong> ${phoneElement}} </p>


    <h3>Education</h3>
    <p>${educationElement}

    <h3>Experience</h3>
    <p>${experienceElement}

    <h3>skills</h3>
    <p>${skillElement}
    `;

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{}
        console.error('the resume output element is missing')
      {
        console.error('once or more output elements are missing')
    }
})