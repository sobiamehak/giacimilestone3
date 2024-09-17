// reference area
const resumeform = document.getElementById("resume") as HTMLFormElement;
 resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
 
// form submission

 resumeform.addEventListener("submit",(Event:Event)=>{
    Event.preventDefault();

    // collect info
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("Email") as HTMLInputElement).value
    const phone = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("Education") as HTMLInputElement).value
    const experience = (document.getElementById("Experience") as HTMLInputElement).value
    const skills = (document.getElementById("Skills") as HTMLInputElement).value

    // generate resume 
    const resumehtml =` 
    <h2> <b>Resume</b></></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${name}</p>
     
    <p><b>Email:</b>${email}</p>
     
    <p><b>phone:</b>${phone}</p>

    <h3>Education</h3>

    <p>${education}</P>

     <h3>Experience</h3>

    </b>${experience}</p>

      <h3>skills</h3>

      <p>${skills}</p>
    
    `;

    // genrated resume
    if(resumeDisplayElement){
resumeDisplayElement.innerHTML = resumehtml;
    }else {
        console.error("you have to fill this element must");
    }
});