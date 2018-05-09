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
    const list = data.map(employee => `<div class="card">
                                            <img src='${employee.picture.large}' alt>
                                            <h3 class='name'>${employee.name.first[0].toUpperCase()}${employee.name.first.slice(1)} ${employee.name.last[0].toUpperCase()}${employee.name.last.slice(1)}</h3>
                                            <h4 class="mail">${employee.email}</h4>
                                            <span class="location">${employee.location.city[0].toUpperCase()}${employee.location.city.slice(1)}</span>
                                        </div>`).join("");
    document.querySelector("#employees").innerHTML = list;
};