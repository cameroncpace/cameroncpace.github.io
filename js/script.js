function expand(h, p) {
  var content = document.getElementById(p);
  content.classList.toggle("active");
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
  header = h.innerHTML;
  if (content.classList.contains("active"))
    h.innerHTML = "- " + header.substring(2);
  else
    h.innerHTML = "+ " + header.substring(2);
}

function validateForm() {
  var fn = document.forms["contactForm"]["fname"];
  var ln = document.forms["contactForm"]["lname"];
  var cn = document.forms["contactForm"]["city"];
  var sn = document.forms["contactForm"]["state"];

  var zip = document.forms["contactForm"]["zipcode"].value;
  var givenEmail = document.forms["contactForm"]["email"].value;

  var emsg = document.getElementById("errorMsg");

  var allStates = document.getElementById("state").getElementsByTagName("option");
  var validStates = [];
  for (var i = 0; i < allStates.length; i++)
    validStates.push(allStates[i].value);

  fn.value = fn.value.charAt(0).toUpperCase() + fn.value.slice(1);
  ln.value = ln.value.charAt(0).toUpperCase() + ln.value.slice(1);
  cn.value = cn.value.charAt(0).toUpperCase() + cn.value.slice(1);
  var stateName = sn.value.charAt(0).toUpperCase() + sn.value.slice(1);
  sn.value = stateName;

  if (!(validStates.includes(stateName))) {
    emsg.innerHTML = "Invalid State";
    emsg.classList.toggle("flash");
    return false;
  }
  if (!(/(^\d{5}$)/.test(zip))) {
    emsg.innerHTML = "Invalid Zip Code";
    emsg.classList.toggle("flash");
    return false;
  }
  if (!(/\S+@\S+\.\S+/.test(givenEmail))) {
    emsg.innerHTML = "Invalid Email";
    emsg.classList.toggle("flash");
    return false;
  }

  emsg.innerHTML = "";
  alert("Inquiry Submitted");
  document.getElementById("contactForm").reset();
  return true;
}

var index = 0;
function slideshow() {
  var s = document.getElementsByClassName("slide");
  for (var i = 0; i < s.length; i++) {
    s[i].style.display = "none";
  }
  index++;
  if (index > s.length) {
    index = 1;
  }
  s[index-1].style.display = "block";
  setTimeout(slideshow, 4000);
}
