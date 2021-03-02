import { icelandData } from "./iceland.js";

import { cityData } from "./cities/cities.js";
import { landmarkData } from "./landmarks/landmarks.js";
import { peopleData } from "./people/people.js";

const allCity = cityData();
const allLandmark = landmarkData();
const allPeople = peopleData();

icelandData( allPeople, "#icepeople");
icelandData (allLandmark, "#iceland");
icelandData (allCity, "#icecity");