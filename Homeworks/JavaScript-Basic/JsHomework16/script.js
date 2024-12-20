function list() {
  let contactList = [];

  for (let i = 0; ; i++) {
    let name = prompt("Enter New contact name:");
    if (name === null || name === "") {
      break;
    }

    let phoneNumber = prompt("Enter the phone number:");
    if (phoneNumber === null || name === "") {
      break;
    }

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
  console.log(`
      ${index + 1}. Name: ${contact.name}, Phone: ${contact.phoneNumber}
`);
});
