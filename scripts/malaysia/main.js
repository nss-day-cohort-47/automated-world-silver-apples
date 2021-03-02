import { malaysiaData } from  "./malaysia.js";
import { cityData } from "./cities/citiesData.js";
import { landmarkData } from "./landmarks/landmarksData.js";
import { peopleData } from "./people/peopleData.js";



malaysiaData(cityData(), "#malaysiacity");
malaysiaData(landmarkData(), "#malaysialandmark");
malaysiaData(peopleData(), "#malaysiapeople");