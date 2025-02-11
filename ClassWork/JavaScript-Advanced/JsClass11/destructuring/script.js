console.log("====================== DESTRUCTURING ================");

let userOBJ = {
  id: 1,
  firstName: "Emily",
  lastName: "Johnson",
  maidenName: "Smith",
  age: 28,
  gender: "female",
  email: "emily.johnson@x.dummyjson.com",
  phone: "+81 965-431-3024",
  username: "emilys",
  password: "emilyspass",
  birthDate: "1996-5-30",
  image: "https://dummyjson.com/icon/emilys/128",
  bloodGroup: "O-",
  height: 193.24,
  weight: 63.16,
  eyeColor: "Green",
  hair: {
    color: "Brown",
    type: "Curly",
  },
  ip: "42.48.100.32",
  address: {
    address: "626 Main Street",
    city: "Phoenix",
    state: "Mississippi",
    stateCode: "MS",
    postalCode: "29112",
    coordinates: {
      lat: -77.16213,
      lng: -92.084824,
    },
    country: "United States",
  },
  macAddress: "47:fa:41:18:ec:eb",
  university: "University of Wisconsin--Madison",
  bank: {
    cardExpire: "03/26",
    cardNumber: "9289760655481815",
    cardType: "Elo",
    currency: "CNY",
    iban: "YPUXISOBI7TTHPK2BR3HAIXL",
  },
  company: {
    department: "Engineering",
    name: "Dooley, Kozey and Cronin",
    title: "Sales Manager",
    address: {
      address: "263 Tenth Street",
      city: "San Francisco",
      state: "Wisconsin",
      stateCode: "WI",
      postalCode: "37657",
      coordinates: {
        lat: 71.814525,
        lng: -161.150263,
      },
      country: "United States",
    },
  },
  ein: "977-175",
  ssn: "900-590-289",
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
  crypto: {
    coin: "Bitcoin",
    wallet: "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    network: "Ethereum (ERC20)",
  },
  role: "admin",
};

console.log("");
console.log("============ Object Destructuring ===========");

// =====> Example: take id, firstname, lastname
// const id = userOBJ.id;
// const firstName = userOBJ.firstName;
// const lastName = userOBJ.lastName;
// console.log(id, firstName, lastName);

// ====> Example: take id, firstname , lastname, (WITH DESTRUCTURING)
const { id, firstName, lastName } = userOBJ;
console.log(id, firstName, lastName);
// id = 10;
console.log(id, firstName, lastName);

// ====> Example: take id, firstname , lastname, (WITH DESTRUCTURING)
const { userFirstName, userLastName, age } = userOBJ;
console.log(userFirstName, userLastName, age);

// ====> Example: take addres latitude and longitude (WITHOUT DESTRUCCTURING)

let latitude = userOBJ.address.coordinates.lat;
let longitude = userOBJ.address.coordinates.lng;
console.log(latitude, longitude);

// ====> Example: take addres latitude and longitude (WITHOUT DESTRUCCTURING)

function getUserInfo(user) {
  return `${user.firstName} ${user.lastName}`;
}

console.log(getUserInfo(userOBJ));

function getUserInfoDest({ firstName, lastName, age }) {
  return `${firstName} ${lastName} ${age}`;
}
console.log(getUserInfoDest(userOBJ));
