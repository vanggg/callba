const heading = document.querySelector(".cs");

let callback = (num) => {
  if (num >= 0) {
    heading.textContent = num;
    setTimeout(() => {
      callback(num - 1);
    }, 1500);
  } else {
    heading.textContent = "Inida Won ICC T20";
  }
};
callback(10);
