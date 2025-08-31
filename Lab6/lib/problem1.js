const logo = document.querySelector("#logo");

logo.src = "lib/img/en.jpg";
logo.alt = "Faculty of Engineering";


const link = document.createElement("a");
link.href = "https://www.en.kku.ac.th";
logo.parentNode.insertBefore(link, logo);
link.appendChild(logo);

const newPara = document.createElement("p");
newPara.innerHTML = "We hope you enjoy learning";

link.parentNode.appendChild(newPara);
