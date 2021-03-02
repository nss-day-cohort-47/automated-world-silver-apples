import { cardData } from "../card.js";


// malaysiaData(cityData, citydata);
// malaysiaData(landmarkData, landmarkdata);
// malaysiaData(peopleData, peopledata);

import { cityData } from "cities/citiesData.js";
import { landmarkData } from "landmark/landmarkData.js";
import { peopleData } from "people/peopleData.js";

export const malaysiaData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = "<div>";
    for (const data in dataList) {
        HTMLRep += cardData(data);
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML += HTMLRep;

}