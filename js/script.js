
//Instantiate constants that we are gonna be using throughout the project
const nameInput = document.getElementById("name");
const otherJob = document.getElementById("other-job-role");

//Set focus on "Name" input element
nameInput.focus;

//Hide other job role initially

otherJob.style.display = "none";

//Get the select element and listen for changes
const jobRoleSelect = document.getElementById("title");
jobRoleSelect.addEventListener("change", function(e){
    
    
    if(e.target.value === "other"){
        console.log(e.target.value);
        otherJob.style.display = "block";
    }
});
