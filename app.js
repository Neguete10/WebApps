let recruiterInfo = [];

function addRecruiterInfo() {
  let textbox1 = document.getElementById("fname");
  let textbox2 = document.getElementById("lname");
  let textbox3 = document.getElementById("phone");
  let textbox4 = document.getElementById("email");

  recruiterInfo.push(textbox1.value);
  recruiterInfo.push(textbox2.value);
  recruiterInfo.push(textbox3.value);
  recruiterInfo.push(textbox4.value);
}
