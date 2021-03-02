const cities = [

    { name: "Berlin", image: "./images/germany/berlin.jpg", alt: "Photo of berlin", link: "https://en.wikipedia.org/wiki/Berlin" },
    { name: "Frankfurt", image: "./images/germany/Frankfurt.jpg", alt: "photo of frankfurt", link: "https://en.wikipedia.org/wiki/Frankfurt" },
    { name: "Leipzig", image: "./images/germany/leipzig.jpg", alt: "leipzig", link: "https://en.wikipedia.org/wiki/Leipzig" }
];


export const cityData = () => {
    console.log(cities);
    return cities;
}