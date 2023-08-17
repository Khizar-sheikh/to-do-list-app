import checkListImage from "../src/image/check-list.png";
import createDropdownStructure from "./dropdown";

let {dropdownDiv} = createDropdownStructure();

let isDark = false;
let containerDiv;
let ballDiv;

let isDropdownOpen = false;

export default function createHeaderStructure() {
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("header");

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu", "material-icons-round");
  menuDiv.textContent = "menu";

// The menuDiv is not Toggling the style of dropdown class

  menuDiv.addEventListener("click", () => {
    console.log("Menu button clicked");
    console.log("isDropdownOpen before:", isDropdownOpen);
  
    dropdownDiv.style.display = isDropdownOpen ? "none" : "block";
    isDropdownOpen = !isDropdownOpen;
  
    console.log("isDropdownOpen after:", isDropdownOpen);
  });
  

  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");

  const logoImg = document.createElement("img");
  logoImg.classList.add("logoimg");
  logoImg.src = checkListImage;
  logoImg.alt = "logo Image";

  const logoH1 = document.createElement("h1");
  logoH1.textContent = "Have";

  const logoH1Text = document.createElement("h1");
  logoH1Text.classList.add("logotext");
  logoH1Text.textContent = "To Do";

  logoH1.appendChild(logoH1Text);
  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoH1);

  containerDiv = document.createElement("div");
  containerDiv.classList.add("container", "bright");

  // Create the emojis div
  const emojisDiv = document.createElement("div");
  emojisDiv.classList.add("emojis");

  // Create the Moon emoji div
  const moonEmojiDiv = document.createElement("div");
  moonEmojiDiv.style.transform = "rotate(110deg)";
  moonEmojiDiv.classList.add("Moon");
  moonEmojiDiv.textContent = "🌙";

  const sunEmojiDiv = document.createElement("div");
  sunEmojiDiv.style.color = "orangered";
  sunEmojiDiv.style.fontSize = "17px";
  sunEmojiDiv.style.marginLeft = "-2px";
  sunEmojiDiv.classList.add("Sun");
  sunEmojiDiv.textContent = "☀️";

  emojisDiv.appendChild(moonEmojiDiv);
  emojisDiv.appendChild(sunEmojiDiv);

  ballDiv = document.createElement("div");
  ballDiv.classList.add("ball");

  containerDiv.appendChild(emojisDiv);
  containerDiv.appendChild(ballDiv);

  headerDiv.appendChild(menuDiv);
  headerDiv.appendChild(logoDiv);
  headerDiv.appendChild(containerDiv);

  containerDiv.addEventListener("click", toggleTheme);

  return headerDiv;
}

function toggleTheme() {
  ballDiv.classList.toggle("right");

  if (!isDark) {
    setTimeout(() => {
      containerDiv.classList.add("dark");
      ballDiv.style.backgroundColor = "black";
    }, 220);
  } else {
    containerDiv.classList.remove("dark");
    ballDiv.style.backgroundColor = "orangered";
  }

  isDark = !isDark;

  setTimeout(() => {
    containerDiv.classList.toggle("bright");
  }, 100);
}
