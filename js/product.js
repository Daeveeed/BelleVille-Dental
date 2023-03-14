"use strict";

const header = document.querySelector(".product_category");
const options = document.getElementsByClassName("select-dropdown_options");
const category = document.getElementById("category");
const activeList = category.getElementsByClassName("active");
const sort = document.getElementById("sort_query");
const activeSort = sort.getElementsByClassName("active");
const dropdown_caret = document.getElementsByClassName("caret");
const lists = document.getElementsByClassName("options_list");
const productsContainer = document.querySelector(".product_items_container");
// const inputButton = document.getElementsByClassNamecon

function createArray(collection) {
  return new Array(...collection);
}

const list = createArray(lists);
const carets = createArray(dropdown_caret);
const option = createArray(options);

const PFP = [
  {
    src: "./images/Proffessional_1.JPG",
    product_desc:
      "Crest+Oral-B iO Transformational Gum Health Electric Toothbrush System",
    avergage_stars: "0.0",
    number_of_reviews: "(0)",
    price: "55000",

    indicators: [],
  },
  {
    src: "./images/Proffessional_2.jpg",
    product_desc:
      "Crest + Oral-B iO Electric Toothbrush System - Professional Trial Unit",
    avergage_stars: "3.0",
    number_of_reviews: "(0)",
    price: "60000",
    indicators: [],
  },
  {
    src: "./images/Proffessional_3.png",
    product_desc:
      "Professional Exclusive Crest 3DWhitestrips Supreme with LED Light",
    avergage_stars: "4.0",
    number_of_reviews: "(0)",
    price: "25000",
    indicators: [],
  },
  {
    src: "./images/Proffessional_4.JPG",
    product_desc:
      "Professional Exclusive Crest Whitening Emulsions with LED Light",
    avergage_stars: "4.6",
    number_of_reviews: "(0)",
    price: "30000",
    indicators: [],
  },
];

const PC = [
  {
    src: "./images/Premium.JPG",
    product_desc:
      "Crest+Oral-B iO Transformational Gum Health Electric Toothbrush System",
    avergage_stars: "0.0",
    number_of_reviews: "(0)",
    price: "50000",
    indicators: [],
  },
  {
    src: "./images/Premium_2.JPG",
    product_desc:
      "Crest + Oral-B iO Electric Toothbrush System - Professional Trial Unit",
    avergage_stars: "3.0",
    number_of_reviews: "(0)",
    price: "9500",
    indicators: [],
  },
  {
    src: "./images/Premium_3.jPG",
    product_desc:
      "Professional Exclusive Crest 3DWhitestrips Supreme with LED Light",
    avergage_stars: "4.0",
    number_of_reviews: "(0)",
    price: "30000",
    indicators: [],
  },
  {
    src: "./images/Premium_4.JPG",
    product_desc:
      "Professional Exclusive Crest Whitening Emulsions with LED Light",
    avergage_stars: "4.6",
    number_of_reviews: "(0)",
    price: "23000",
    indicators: [],
  },
];

const OBP = [
  {
    src: "./images/Oral_b_1.jpeg",
    product_desc: "Oral-B Vitality Pro 300 Floss Action Electric Toothbrush",
    avergage_stars: "0.0",
    number_of_reviews: "(0)",
    price: "17000",
    indicators: [],
  },
  {
    src: "./images/Oral_b_2.jpeg",
    product_desc: "Oral-B Water Flosser Advanced - Professional Trial Unit",
    avergage_stars: "3.0",
    number_of_reviews: "(0)",
    price: "15000",
    indicators: [],
  },
  {
    src: "./images/Oral_b_3.jpeg",
    product_desc: "Oral-B Kids 3+ Battery Toothbrush Disney Princess",
    avergage_stars: "4.0",
    number_of_reviews: "(0)",
    price: "12000",
    indicators: [],
  },
  {
    src: "./images/Oral_b_4.jpeg",
    product_desc: "Oral-B Kids 3+ Battery Toothbrush Spiderman",
    avergage_stars: "4.6",
    number_of_reviews: "(0)",
    price: "12000",
    indicators: [],
  },
];

const CKT = [
  {
    src: "./images/crest_kids.jpeg",
    product_desc: "Crest Kids Enamel Cavity Protection Toothpaste 0.85oz",
    avergage_stars: "0.0",
    number_of_reviews: "(0)",
    price: "4000",
    indicators: [],
  },
  {
    src: "./images/crest_kids_2.jpg",
    product_desc: "Crest Kids Sparkle Cavity Protection Toothpaste 0.85oz",
    avergage_stars: "4.5",
    number_of_reviews: "(0)",
    price: "5500",
    indicators: [],
  },
  {
    src: "./images/crest_kids_3.jpg",
    product_desc: "Crest Braces Care Cavity Defense Toothpaste 4.1oz",
    avergage_stars: "1.6",
    number_of_reviews: "(0)",
    price: "5000",
    indicators: [],
  },
  {
    src: "./images/crest_kids_4.jpg",
    product_desc: "Crest Kids Enamel Cavity Protection Toothpaste 4.1oz",
    avergage_stars: "0.0",
    number_of_reviews: "(0)",
    price: "3500",
    indicators: [],
  },
];

const allProducts = [...CKT, ...OBP, ...PC, ...PFP];

const sorts = {
  AZ: "a.product_desc - b.product_desc",
  ZA: " b.product_desc -a.product_desc",
  LH: "a.price - b.price",
  HL: "b.price - a.price",
};

function sortPageProduct(arr, sort_query) {
  let sortArr;
  if (sort_query == "AZ" || sort_query == "ZA") {
    sortArr = eval(arr).sort((a, b) => {
      let fa = a.product_desc.toLowerCase(),
        fb = b.product_desc.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  }

  if (sort_query == "ZA") {
    sortArr.reverse();
  }
  sortArr = eval(arr).sort((a, b) => eval(sorts[sort_query]));
  pageProduct(sortArr);
}

function pageProduct(arr) {
  productsContainer.innerHTML = "";
  let html;
  arr.forEach((el) => {
    html = `<div class="product_item">
            <div>
              <img src= ${el.src} alt="" />
            </div>
            <div class="text">
              <a href="" class="product_desc"
                >${el.product_desc}</a
              >
              <div class="ratings">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p class="average_stars">${el.avergage_stars}</p>
                <p class="number_of_reviews">${el.number_of_reviews}</p>
                </div>
                <p class="price"> <b> &#8358 ${el.price}</b></p>
              <a href="">Rate this product</a>
            </div>
          </div>`;
    productsContainer.insertAdjacentHTML("beforeend", html);
  });
}

function renderPage() {
  header.textContent = activeList[0].innerHTML;
  category.querySelector("input").value = activeList[0].innerText;
  sort.querySelector("input").value = activeSort[0].innerText;

  option.forEach((el) => {
    if (el.querySelector("ul").lastElementChild.classList.contains("active")) {
      el.querySelector(
        "ul"
      ).lastElementChild.previousElementSibling.style.borderRadius = "inherit";
    } else {
      el.querySelector(
        "ul"
      ).lastElementChild.previousElementSibling.style.borderRadius = "";
    }
  });

  sortPageProduct(
    activeList[0].getAttribute("data-id"),
    activeSort[0].getAttribute("data-id")
  );
}

list.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    el.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    renderPage();
  });
});

carets.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.nextElementSibling.style.display =
      e.target.parentElement.nextElementSibling.style.display == ""
        ? "block"
        : "";
    e.target.style.transform = "rotate(180)";
    e.target.classList.toggle("bi-caret-down-fill");
    e.target.classList.toggle("bi-caret-up-fill");

    e.target.parentElement.firstElementChild.style.borderRadius =
      e.target.parentElement.nextElementSibling.style.display == "block"
        ? ".5rem .5rem 0 0"
        : "";
  });
});

renderPage();
