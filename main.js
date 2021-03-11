// Your code here.
function getFirstName(user) {
  return user.firstName;
}

function getLastName(user) {
  return user.lastName;
}

function getFullName(user) {
  return user.firstName + " " + user.lastName;
}

function setFirstName(user, n) {
  user.firstName = n;
}

function setAge(user, a) {
  user.age = a;
}

function giveBirthday(user) {
  //we do not add a second param here we instead set an if statement that says if use.age is greater than 0 add 1 to user.age. else set user.age to 1
  if (user.age > 0) {
    user.age += 1;
  } else {
    user.age = 1;
  }
}

function marry(p1, p2) {
  //we hard coded the married status of each person to true then we added the property spouseName and gave it the value of the opposite person's first and last name with a space in between
  p1.married = true;
  p2.married = true;
  p1.spouseName = p2.firstName + " " + p2.lastName;
  p2.spouseName = p1.firstName + " " + p1.lastName;
}

function divorce(p1, p2) {
  //we manually change marital status of each person to false
  p1.married = false;
  p2.married = false;
  //we delete the property spouseName from each person
  delete p1.spouseName;
  delete p2.spouseName;
}


// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
