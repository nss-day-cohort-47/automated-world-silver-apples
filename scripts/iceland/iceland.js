import { cardData } from "../card.js"

import { cityData } from "./cities/cities.js";
import { landmarkData } from "./landmarks/landmarks.js";
import { peopleData } from "./people/people.js";

const allCity = cityData();
const allLandmark = landmarkData();
const allPeople = peopleData();



export const listData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = "<div>";
    for(const data in dataList){
        HTMLRep += "<article>" + cardData(data) + "</article>";
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML += HTMLRep;
}