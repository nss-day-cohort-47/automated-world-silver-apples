import { listData } from "./cardList.js";
import { cityData } from "./cities/cities.js";
import { landmarkData } from "./landmarks/landmarks.js";
import { peopleData } from "./people/people.js";
console.log("in the js germany.js");
export const germanData = () => {
    listData(cityData(), "#germanCities");
    listData(landmarkData(), "#germanLandmarks");
    listData(peopleData(), "#germanPeople");
}


germanData();

console.log("Hello world");