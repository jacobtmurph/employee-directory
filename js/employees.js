//Function to fetch data & convert it to json.
function fetchData(url) {
    return fetch(url).then(res => res.json())
};

//Fetch calls

fetchData("https://randomuser.me/api/?results=12&nat=gb")
          .then(data => listEmployees(data.results));



//Helper Functions

function listEmployees(data) {
    const list = data.map(employee => `<div class="card">
                                            <img src='${employee.picture.medium}' alt>
                                            <h3 class='name'>${employee.name.first} ${employee.name.last}</h3>
                                            <h4 class="mail">${employee.email}</h4>
                                            <span class="location">${employee.location.city}</span>
                                        </div>`);
    document.querySelector("#employees").innerHTML = list;
}