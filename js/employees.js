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
    const list = data.map(employee => `<a class="lightbox" href="https://randomuser.me/api/?seed=${employee.seed}">
                                        <div class="card">
                                            <img src='${employee.picture.medium}' alt>
                                            <div class="info">
                                                <h3 class='name'>${employee.name.first[0].toUpperCase()}${employee.name.first.slice(1)} ${employee.name.last[0].toUpperCase()}${employee.name.last.slice(1)}</h3>
                                                <h4 class="mail">${employee.email}</h4>
                                                <span class="location">${employee.location.city[0].toUpperCase()}${employee.location.city.slice(1)}</span>
                                            </div>
                                        </div>
                                        </a>`).join("");
    document.querySelector("#employees").innerHTML = list;
};

