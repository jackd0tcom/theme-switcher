let count = 0;
let element = document.querySelector("#counter");

const increase = () => {
  count++;
  element.innerText = count;
};

const decrease = () => {
  count--;
  element.innerText = count;
};

const reset = () => {
  count = 0;
  element.innerHTML = `<mark>${count}</mark>`;
};

const selectTheme = (theme) => {
  const body = (document.querySelector("body").className = theme);
  const main = (document.querySelector("main").className = theme);
  let buttons = document.querySelectorAll("button");
  for (let el of buttons) {
    el.className = theme;
  }
};
