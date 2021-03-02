import { cardData } from "./card.js";
export const listData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = "<div>";
    for (const data of dataList) {
        HTMLRep += "<article>" + cardData(data) + "</article>";
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML = HTMLRep;

}
