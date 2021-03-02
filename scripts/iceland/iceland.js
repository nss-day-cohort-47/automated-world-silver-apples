import { cardData } from "../card.js";

import { cityData } from "./cities/cities.js";
import { landmarkData } from "./landmarks/landmarks.js";
import { peopleData } from "./people/people.js";

const allCity = cityData();
const allLandmark = landmarkData();
const allPeople = peopleData();



export const icelandData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = "<div>";
    for(const data of dataList){
        HTMLRep += cardData(data);
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML += HTMLRep;
}