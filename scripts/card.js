export const cardData = (data) => {

    return (`<h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.alt}">
            <a href="${data.link}">Learn More</a>`);

}

