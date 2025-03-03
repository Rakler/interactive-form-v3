
//Instantiate constants that we are gonna be using throughout the project
const nameInput = document.getElementById("name");
const otherJob = document.getElementById("other-job-role");
const colorSelect = document.getElementById("shirt-colors");
const designSelect = document.getElementById("design");
const activities = document.getElementById("activities");
const activitiesCost = document.getElementById("activities-cost");

const paymentSelect = document.querySelector(".payment-methods");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
var cost = 0;
//Set focus on "Name" input element
nameInput.focus();

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

activities.addEventListener("change", function(e){
    if(e.target.nodeName === "INPUT" && e.target.checked === true){
        addCost(e.target);

        console.log(activitiesCost.textContent);

    } else if(e.target.nodeName === "INPUT" && e.target.checked === false){
        substractCost(e.target);
        console.log(activitiesCost.textContent);
    }
});

//Function for adding the cost for each of the checkboxes
var addCost = function(element){
    cost += parseInt(element.getAttribute("data-cost"));
    activitiesCost.textContent = "Total: $" + cost;
}

//Function for substracting the cost as each checkbox gets unchecked.
var substractCost = function(element){
    cost -= parseInt(element.getAttribute("data-cost"));
    activitiesCost.textContent = "Total: $" + cost;
}
paymentSelect.children[1].addEventListener("change", function(e){
    
    if(e.target.value === "paypal"){
        console.log(e.target);
        paymentSelect.children[2].style.display = "none";
    }
});

//Set Credit Card selected as the default value
paymentSelect.children[1].children[1].children[1].selected = true;

paymentSelect.children[3].style.display = "none";
//Hide Paypal and Bitcoin initially as Credit Card is selected.
// paypal.style.display = "none";
// bitcoin.style.display = "none";


