//Function to fetch data & convert it to json.
function fetchData(url) {
    return fetch(url).then(res => res.json());
};

//Fetch calls

fetchData("https://randomuser.me/api/?results=12&nat=gb")
          .then(data => listEmployees(data.results));



//Helper Functions

//Function to populate the Employees div with user data.
function listEmployees(data) {
    const list = data.map(employee => `<div id="${employee.name.first}-card" class="card">
                                            <img src='${employee.picture.medium}' alt>
                                            <div class="info">
                                                <h3 class='name'>${employee.name.first[0].toUpperCase()}${employee.name.first.slice(1)} ${employee.name.last[0].toUpperCase()}${employee.name.last.slice(1)}</h3>
                                                <h4 class="mail">${employee.email}</h4>
                                                <span class="location">${employee.location.city[0].toUpperCase()}${employee.location.city.slice(1)}</span>
                                                <div class="modal-info">
                                                    <h4>------</h4>
                                                    <h4 class="mobile">${employee.cell}</h4>
                                                    <h4 class="address">${employee.location.street}, ${employee.location.postcode}</4>
                                                    <h4 class="brithday">Birthday: ${employee.dob.slice(0, 10)}</h4>
                                                </div>
                                                </div>
                                        </div>`).join("");
    document.querySelector("#employees").innerHTML = list;
};


//Function to create modal & display boxes
function createModal(id) {
    //Get the id of the base card
    const card = document.getElementById(id);
    
    //Create the div with id "modal"
    const modal = document.createElement("div");
    modal.id = "modal";

    //Set the content of the modal to the card content, with a close button
    modal.innerHTML = `<div id="modal-content">
                            ${card.innerHTML}
                            <a href="#" id="close"><h4>Close</h4></a>
                        </div>`;
    //Display the modal
    return document.body.prepend(modal);
}

//Add click event listener to the employees div 
document.querySelector("#employees").addEventListener("click", (e) => {
    //If the box is clicked
    if (e.target.classList.contains("card")) {
        //Create the required modal
        createModal(e.target.id);

        //If an element in the box is clicked
    } else if (e.target.parentNode.classList.contains("card")) {
        //Create the required modal
        createModal(e.target.parentNode.id);

        //if the info is clicked
    } else if (e.target.parentNode.classList.contains("info")) {
        //Create the required modal
        createModal(e.target.parentNode.parentNode.id);
    }

    //If the close button is clicked
    document.getElementById("close").addEventListener("click", (e) => {
        //Prevent page reload
        e.preventDefault();
        
        //Remove the modal
        document.body.removeChild(document.querySelector("#modal"));
    });
});