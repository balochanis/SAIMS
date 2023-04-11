let intervalId;

function submitMathAns() {
  const answer = parseInt(document.querySelector("#math input").value);
  if (answer === 4) {
    // correct
    document.querySelector("header").innerHTML = "CORRECT";
    document.querySelector("#math h1").classList.toggle("success-text", true);
    document.querySelector("#math h1").classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector("section#math").style["background-color"] = color;
    }, 500);
  } else {
    // incorrect
    document.querySelector("header").innerHTML = "INCORRECT";
    document.querySelector("#math h1").classList.toggle("success-text", false);
    document.querySelector("#math h1").classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector("section#math").style["background-color"] = color;
    }, 500);
  }
}

function submitEnglishAns() {
  const answer = document.querySelector("#english input[name='webdev']:checked")
    .value;
  if (answer === "website") {
    // correct
    document.querySelector("header").innerHTML = "CORRECT";
    document.querySelector("#english h1").classList.toggle("success-text", true);
    document.querySelector("#english h1").classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector("section#english").style["background-color"] = color;
    }, 500);
  } else {
    // incorrect
    document.querySelector("header").innerHTML = "INCORRECT";
    document.querySelector("#english h1").classList.toggle("success-text", false);
    document.querySelector("#english h1").classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector("section#english").style["background-color"] = color;
    }, 500);
  }
}

function submitScienceAns() {
  const answer = document.querySelector("#science input").value;
  if (answer.toLowerCase() === "blue") {
    // correct
    document.querySelector("header").innerHTML = "CORRECT";
    document.querySelector("#science h1").classList.toggle("success-text", true);
    document.querySelector("#science h1").classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector("section#science").style["background-color"] = color;
    }, 500);
  } else {
    // incorrect
    document.querySelector("header").innerHTML = "INCORRECT";
    document.querySelector("#science h1").classList.toggle("success-text", false);
    document.querySelector("#science h1").classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector("section#science").style["background-color"] = color;
    }, 500);
  }
}