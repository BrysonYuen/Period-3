function sayHello() {
  //I am creating a function called sayHello//
  var userName = prompt("What is your first name?");
  //Create a variable called userName and stores the users information//
  var userNickname = prompt("Hey " + userName + ", do you have a nickname?");
  //Create a variable called userNickname and stores the users information//
  var userLastname = prompt("What is your last name " + userName + "?");
  //Create a variable called userLastname and stores the users information//
  window.alert(userName + " " + userNickname + " " + userLastname + ", Hello");
  //Popup a window that says hello to the user//
  //Quotes with spaces are for spaces between names//
  
}