// Get a reference to the "Add employee" button
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Function to collect employee data
const collectEmployees = () => {
  // Array to store employee data
  const employeesArray = [];
  let addEmployee = true;

  // Collect employee information until the user decides to stop
  while (addEmployee) {
    // Get user input for employee details
    let firstName = window.prompt("Enter the employee's first name:");
    if (firstName === null) {
      console.log("First name prompt was canceled.");
      break; // Exit the loop if prompt is canceled
    }

    let lastName = window.prompt("Enter the employee's last name:");
    if (lastName === null) {
      console.log("Last name prompt was canceled.");
      break; // Exit the loop if prompt is canceled
    }

    let salary = parseFloat(window.prompt("Enter the employee's salary:"));
    if (isNaN(salary)) {
      salary = 34600; // Default to this value if input is invalid
    }

    // Create an employee object
    const employee = {
      firstName,
      lastName,
      salary,
    };

    // Add the employee object to the array
    employeesArray.push(employee);

    console.log(`Added Employee: ${employee.firstName} ${employee.lastName}`); // For debugging purposes

    // Ask if the user wants to add another employee
    addEmployee = window.confirm("Would you like to add another employee?");
  }

  return employeesArray; // Return the collected array of employees
};

// Function to display employees in the table
const displayEmployeesInTable = (employeesArray) => {
  const employeeTable = document.querySelector("#employee-table"); // Get a reference to the table body
  if (!employeeTable) {
    console.log("Error: #employee-table element not found.");
    return; // Prevent null reference errors
  }

  employeeTable.innerHTML = ''; // Clear the table before adding new rows

  // Add each employee as a new row to the table
  employeesArray.forEach(employee => {
    const row = document.createElement("tr"); // Create a new table row
    const firstNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const salaryCell = document.createElement("td");

    firstNameCell.textContent = employee.firstName;
    lastNameCell.textContent = employee.lastName;
    salaryCell.textContent = `$${employee.salary}`; // Display the salary with a currency symbol

    row.appendChild(firstNameCell); // Append the cells to the row
    row.appendChild(lastNameCell);
    row.appendChild(salaryCell);

    employeeTable.appendChild(row); // Add the row to the table
  });
};

// Event listener for the "Add employee" button
addEmployeesBtn.addEventListener("click", () => {
  console.log("Add Employee button clicked!"); // Debugging point

  const employeesArray = collectEmployees(); // Collect employee data

  if (employeesArray.length === 0) {
    console.log("No employees added.");
    return; // Exit if no data was collected
  }

  displayEmployeesInTable(employeesArray); // Display employee data in the table
});



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
