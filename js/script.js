
//Instantiate constants that we are gonna be using throughout the project
const nameInput = document.getElementById("name");
const otherJob = document.getElementById("other-job-role");
const colorSelect = document.getElementById("shirt-colors");
const designSelect = document.getElementById("design");

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

colorSelect.style.display = "none";

designSelect.addEventListener("change", function(e){
    if(e.target.value === "js puns"){
        colorSelect.style.display = "block";
        colorSelect.children[1].children[0].style.display = "none";
        colorSelect.children[1].children[1].style.display = "block";
        colorSelect.children[1].children[2].style.display = "block";
        colorSelect.children[1].children[3].style.display = "block";

        colorSelect.children[1].children[4].style.display = "none";
        colorSelect.children[1].children[5].style.display = "none";
        colorSelect.children[1].children[6].style.display = "none";
    } else if(e.target.value === "heart js"){
        colorSelect.style.display = "block";
        colorSelect.children[1].children[0].style.display = "none";
        colorSelect.children[1].children[1].style.display = "none";
        colorSelect.children[1].children[2].style.display = "none";
        colorSelect.children[1].children[3].style.display = "none";

        colorSelect.children[1].children[4].style.display = "block";
        colorSelect.children[1].children[5].style.display = "block";
        colorSelect.children[1].children[6].style.display = "block";
    }
});