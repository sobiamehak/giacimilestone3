// reference area
var resumeForm = document.getElementById("resume");
var resumeDisplayElement = document.getElementById("resume-display");
// form submission
resumeForm.addEventListener("submit", function (Event) {
    Event.preventDefault();
    // collect info
    var name = document.getElementById("name").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("Education").value;
    var experience = document.getElementById("Experience").value;
    var skills = document.getElementById("Skills").value;
    // generate resume 
    var resumehtml = " \n    <h2> <b>Resume</b></></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n     \n    <p><b>Email:</b>").concat(email, "</p>\n     \n    <p><b>phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n\n    <p>").concat(education, "</P>\n\n     <h3>Experience</h3>\n\n    </b>").concat(experience, "</p>\n\n      <h3>skills</h3>\n\n      <p>").concat(skills, "</p>\n    \n    ");
    // genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error("you have to fill this element must");
    }
});
