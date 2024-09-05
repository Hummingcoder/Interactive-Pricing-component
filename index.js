// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const data = [
  {
    views: "10k",
    price: "8",
  },
  {
    views: "50k",
    price: "12",
  },
  {
    views: "100k",
    price: "16",
  },
  {
    views: "500k",
    price: "24",
  },
  {
    views: "1m",
    price: "26",
  },
];

const checkbox = document.querySelector(".checkbox");
const slider = document.querySelector(".range");
const view = document.querySelector(".views");
const price = document.querySelector(".price_amount");
const type = document.querySelector(".price_type");

let isMontly;
let curr;
function handleChange(curr) {
  const substract = (25 / 100) * parseInt(curr.price);
  view.textContent = curr.views;

  isMontly === true
    ? (price.textContent = "$" + parseFloat(curr.price).toFixed(2))
    : (price.textContent = "$" + parseFloat(curr.price - substract).toFixed(2));
}

slider.addEventListener("input", (e) => {
  curr = data[e.target.value];
  handleChange(curr);
});

checkbox.addEventListener("change", (e) => {
  e.target.checked === true ? (isMontly = false) : (isMontly = true);

  handleChange(curr);
});

window.addEventListener("DOMContentLoaded", () => {
  slider.value = 2;
  curr = data[slider.value];
  checkbox.checked = true;
  isMontly = !checkbox.checked;
  handleChange(curr);
});
