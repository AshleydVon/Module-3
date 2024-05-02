//*document.querySelector used to the reference, allowing for EventListener to be added and implement with callback function/direction.*/

const addEmployeesBtn = document.querySelector("#add-employees-btn");

//*Function set to collect employee data, with Array added empty to navigate/control predefined employee data.*/

const collectEmployees = () => {
  
  //*Intialized empty Array to store, add, modify employee data.*/

  const employeesArray = [];
  let addEmployee = true;

  
  while (addEmployee) {
     
    /** Set let to input promts for employee's first/last name/salary.*/
       /* Ensured the loop would not repeat if cancelled* */

         let firstName = window.prompt("Enter the employee's first name:");
        if (firstName === null) {
      console.log("First name prompt was canceled.");
      break; //* Null ensures there is an exit the loop if first name prompt is canceled.*/
    }

    let lastName = window.prompt("Enter the employee's last name:");
    if (lastName === null) {
      console.log("Last name prompt was canceled.");
      break; // * Null ensures there is an exit in the loop if last name prompt canceled.*/
    }

    let salary = parseFloat(window.prompt("Enter the employee's salary:"));
    if (isNaN(salary)) {
      salary = 34600; //* Set default value so that if input is invalid, nothing comes back as 'undefined.' */
    }


    /** Set constant ensuring variable would not be changed with the information */
     /* detailed. **/
    


    const employee = {
      firstName,
      lastName,
      salary,
    };


    /** Added object to the array to ensure data is organized and there is the needed */
     /* flexibility to collect the prompted information*/


    employeesArray.push(employee);

    console.log(`Added Employee: ${employee.firstName} ${employee.lastName}`); //* console.log can be used for debuging purposes by tracking what happens in the code, */
    /*confirming employee information succesfully added.*/

    //* window.confirm uses prompt to inquire if another employee would like to be added.*/

    addEmployee = window.confirm("Would you like to add another employee?");
  }

  return employeesArray; //*Return the collected array of employees */
  /** Created the return array for the objects/employees to ensure  */
   /* data is returned as specified and organized.*/

};


  /** Set function to display employee information and to indicate
   * how the information will be used/organized */

const displayEmployeesInTable = (employeesArray) => {
  const employeeTable = document.querySelector("#employee-table"); //*Reference targets the table with the set employee information.Get a reference to the table body */
  if (!employeeTable) {
    console.log("Error: #employee-table element not found.");
    return; //*conole.log "Error" ensures early exit to avoid errors. * Prevent null reference errors.*/
  }

  employeeTable.innerHTML = ''; 
  //* innerHTML allows table to be cleared and new rows */
  /* are created without any duplicated information or errors.*/

  //*Add each employee as a new row to the table Loop created in Array for each object containing data/information.*/

  employeesArray.forEach(employee => {
    const row = document.createElement("tr"); //* // const row creates new table row in element with employee information.*/
    const firstNameCell = document.createElement("td");
    const lastNameCell = document.createElement("td");
    const salaryCell = document.createElement("td");

    firstNameCell.textContent = employee.firstName;
    lastNameCell.textContent = employee.lastName;
    salaryCell.textContent = `$${employee.salary}`; //*Entering/displying currency symbol in salary representing the value/monetary amount specified, and not just a number.*/

    row.appendChild(firstNameCell); //* Appedning the child element to the parent element, adding the element to a row. */
    row.appendChild(lastNameCell);
    row.appendChild(salaryCell);

    employeeTable.appendChild(row); //*The appendChild adds the child elements from cells to row. After added to row, the code adds information to table/table body. */
  });
};

//*Added EventListener for the "Add employee" button to specify what happens when button is clicked. */

addEmployeesBtn.addEventListener("click", () => {
  console.log("Add Employee button clicked!"); //*Debugs by verifying the EventListener and by tracing interactions.*/

  const employeesArray = collectEmployees(); //*Predefined Array collects data of employees.*/

  if (employeesArray.length === 0) {
    console.log("No employees added.");
    return; //*Array checks if data is empty. If empty, code send message to cosole.log and exits early using return.*/
  }

  displayEmployeesInTable(employeesArray); //*Array ensures visual employee information in table format. Creates new rows/cells with employee data.*/
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


/* http://127.0.0.1:5500/index.html*/       