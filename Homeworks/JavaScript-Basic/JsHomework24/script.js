// Initialize an empty array to store contacts

let contacts = [];
let editIndex = -1; // To track the index of the contact being edited

// Function to validate form inputs
function validateInputs(firstName, lastName, phoneNumber) {
  if (!firstName || !lastName || !phoneNumber) {
    alert("Please fill out all fields.");
    return false;
  }
  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
    alert("First and Last name should only contain letters.");
    return false;
  }
  if (!/^\d+$/.test(phoneNumber)) {
    alert("Phone number should only contain digits.");
    return false;
  }
  return true;
}

// Function to render the contact list in the table

function renderContacts() {

  const contactListDiv = document.getElementById("list-contacts");
  contactListDiv.innerHTML = ""; // Clear previous list

  const table = document.createElement("table");
  table.style.width = "100%";
  table.border = "1";

  // Create table header
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
    <th>First Name</th>
    <th>Last Name</th>
    <th>Phone Number</th>
    <th>Actions</th>
  `;
  table.appendChild(headerRow);

  // Add rows for each contact
  contacts.forEach((contact, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${contact.firstName}</td>
      <td>${contact.lastName}</td>
      <td>${contact.phoneNumber}</td>
      <td>
        <button onclick="prepareEditContact(${index})">Edit</button>
        <button onclick="deleteContact(${index})">Delete</button>
      </td>
    `;
    table.appendChild(row);
  });

  contactListDiv.appendChild(table);
}

// Function to handle saving a new contact or updating an existing one

document
  .getElementById("saveContactBtn")
  .addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (validateInputs(firstName, lastName, phoneNumber)) {
      if (editIndex === -1) {
        // Save a new contact
        contacts.push({ firstName, lastName, phoneNumber });
      } else {
        // Update the existing contact
        contacts[editIndex] = { firstName, lastName, phoneNumber };
        editIndex = -1; // Reset edit index after saving
      }

      // Clear the input fields
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("phoneNumber").value = "";

      // Render the updated contact list
      renderContacts();
    }
  });

// Function to prepare a contact for editing

function prepareEditContact(index) {
  const contact = contacts[index];

  // Fill the form with the contact's details
  document.getElementById("firstName").value = contact.firstName;
  document.getElementById("lastName").value = contact.lastName;
  document.getElementById("phoneNumber").value = contact.phoneNumber;

  editIndex = index; // Set the index of the contact being edited
}

// Function to delete a contact

function deleteContact(index) {
  contacts.splice(index, 1); // Remove the contact at the given index
  renderContacts(); // Re-render the contact list
}

// Function to handle the Delete button in the form

document
  .getElementById("deleteContactBtn")
  .addEventListener("click", function () {
    if (editIndex !== -1) {
      deleteContact(editIndex); // Delete the contact being edited
      editIndex = -1; // Reset edit index

      // Clear the input fields
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("phoneNumber").value = "";
    } else {
      alert("Select a contact to delete by clicking Edit first.");
    }
  });


// Function to handle the Edit button in the form

document
  .getElementById("editContactBtn")
  .addEventListener("click", function () {
    if (editIndex !== -1) {
      // Save the updated contact details
      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();

      if (validateInputs(firstName, lastName, phoneNumber)) {
        contacts[editIndex] = { firstName, lastName, phoneNumber }; // Update contact
        editIndex = -1; // Reset edit index

        // Clear the input fields
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("phoneNumber").value = "";

        // Render the updated contact list
        renderContacts();
      }
    } else {
      alert("Select a contact to edit by clicking Edit in the contact list.");
    }
  });
