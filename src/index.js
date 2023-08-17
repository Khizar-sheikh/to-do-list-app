import "./style/style.css";
import "./style/style2.css";
import "./style/content.css";

import createDropdownStructure from "./dropdown";
import createHeaderStructure from "./header";

const {contentBodyDiv , dropdownDiv} = createDropdownStructure();
const headerMainDiv = createHeaderStructure();

const mainDiv = document.createElement("div");
mainDiv.classList.add("main");

mainDiv.appendChild(headerMainDiv);
mainDiv.appendChild(contentBodyDiv);

document.body.appendChild(mainDiv);