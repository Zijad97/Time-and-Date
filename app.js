"use strict";
const colors = ["goldenrod", "darkorange", "orangered", "red", "crimson"];
const times = Array.from(document.getElementsByTagName("h2"));
let current = 0;
document.body.style.backgroundColor = colors[current];
const showDate = function () {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  const date = String(currentDate.getDate());
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septmeber",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.querySelector(".year").textContent = year;
  document.querySelector(".month").textContent = months[month];
  document.querySelector(".day").textContent = days[day];
  document.querySelector(".hour").textContent = hour + "h";
  document.querySelector(".minute").textContent = minute + "m";
  document.querySelector(".second").textContent = seconds + "s";
  if (date > 10 && date < 14)
    document.querySelector(".date").textContent = `${date}` + "th";
  else if (date.endsWith("1"))
    document.querySelector(".date").textContent = `${date}` + "st";
  else if (date.endsWith("2"))
    document.querySelector(".date").textContent = `${date}` + "nd";
  else if (date.endsWith("3"))
    document.querySelector(".date").textContent = `${date}` + "rd";
  else document.querySelector(".date").textContent = `${date}` + "th";
  if (document.querySelector(".second").textContent == "0s") {
    current++;
    if (current > colors.length - 1) current = 0;
    document.body.style.backgroundColor = colors[current];
  }
};
showDate();
setInterval(showDate, 1000);
