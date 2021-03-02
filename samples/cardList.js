import { cardData } from "../scripts/card.js";

export const listData = (dataList, tagId) => {
    let HTMLRep = "<div>";
    for (const data of dataList) {
        HTMLRep += "<article>" + cardData(data) + "</article>";
    }
    return HTMLRep += "</div>";

}