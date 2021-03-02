// Base element to be filled

export const cardData = (data) => {
    console.log(data.image);
    return (`<h2>${data.name}</h2>
            <div class="cardImage">
            <img src="${data.image}" alt="${data.alt}">
            </div>
            <a href="${data.link}"> Learn More </a>`);

}

