function list() {
  let contactList = [];

  for (let i = 0; ; i++) {
    let name = prompt("Enter New contact name:");
    if (!name || name.trim() === "") {
      alert("Invalid name. Exiting...");
      break; // Exit the loop if name is invalid
    }

    let phoneNumber = prompt("Enter the phone number:");
    if (!phoneNumber || isNaN(phoneNumber) || phoneNumber.trim() === "") {
      alert("Invalid phone number. Exiting...");
      break; // Exit the loop if phone number is invalid
    }

    // Add the contact to the list
    contactList.push({ name: name, phoneNumber: phoneNumber });

    alert(
      `Contact "${name}" with phone number "${phoneNumber}" has been added.`
    );
  }

  return contactList;
}

let allContacts = list();

console.log("Phone Book:");
allContacts.forEach((contact, index) => {
  console.log(
    `${index + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}`
  );
});
