export const cardData = (data) => {

    return (
        `
        <article  class="infocolumn">
        <h2>${data.name}</h2>
        <img class="cardImage" src="${data.image}" alt="${data.alt}">
        <p><a href="${data.link}">Learn More</a></p>
        </article>
        `
    );
}


