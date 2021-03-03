import { listData } from "./cardList.js";
import { getData } from "../data/data.js"

export const prepHtmlPage = (country, type) => {
    let HTMLRep = "";
    const DOMLocation = document.querySelector("main");
    HTMLRep += `<div class="container">`;

    if (Array.isArray(country) && Array.isArray(type)) {
        for (const countryData of country) {
            for (const typeData of type) {
                HTMLRep += `<div id="${typeData}${countryData}"></div>`;
            }
        }
    } else {
        const DOMLocation = document.querySelector("main");
        HTMLRep += `<div id="${type}${country}"></div>`;
    }
    HTMLRep += "</div>";
    console.log(HTMLRep)
    DOMLocation.innerHTML += HTMLRep;
}
const country = ["Germany"];
const type = ["city","landmark","people"];
export const generateData = () => {

    // listData(getData(), "Germany", "city");
    // listData(getData(), "Iceland", "landmark");
    // listData(getData(), "Malaysia", "people");
    for(const countryArray of country){
        for(const typeArray of type){
            listData(getData(),countryArray, typeArray);
        }
    }
}

prepHtmlPage(country,type);
generateData();