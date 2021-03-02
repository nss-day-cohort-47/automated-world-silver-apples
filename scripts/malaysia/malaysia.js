import { cardData } from "../card.js";


export const malaysiaData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = `<div>`;
    for (const data of dataList) {
        HTMLRep += cardData(data);
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML += HTMLRep;
}