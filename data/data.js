// Key par should be typeCountry    i.e. cityGermany  countries are Capitol, type is lower

const data = [

    {
        name: "Schloss Neuschwanstein",
        image: "./images/germany/schlossN.jpg",
        alt: "Schloss Neuschwanstein",
        link: "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
        country: "Germany",
        type: "landmark"
    },
    {
        name: "Sanssouci Park",
        image: "./images/germany/Sanssouci-Park-and-Palace.jpg",
        alt: "Sanssouci Park and Palace",
        link: "https://en.wikipedia.org/wiki/Sanssouci_Park",
        country: "Germany",
        type: "landmark"
    },
    {
        name: "Brandenburg Gate",
        image: "./images/germany/brandenburggate.jpg",
        alt: "Brandenburg Gate",
        link: "https://en.wikipedia.org/wiki/Brandenburg_Gate",
        country: "Germany",
        type: "landmark"
    },
    {
        name: "Berlin",
        image: "./images/germany/berlin.jpg",
        alt: "Photo of berlin",
        link: "https://en.wikipedia.org/wiki/Berlin",
        country: "Germany",
        type: "city"
    },
    {
        name: "Frankfurt",
        image: "./images/germany/Frankfurt.jpg",
        alt: "photo of frankfurt",
        link: "https://en.wikipedia.org/wiki/Frankfurt",
        country: "Germany",
        type: "city"
    },
    {
        name: "Leipzig",
        image: "./images/germany/leipzig.jpg",
        alt: "leipzig",
        link: "https://en.wikipedia.org/wiki/Leipzig",
        country: "Germany",
        type: "city"
    },
    {
        name: "Albert Einstein",
        image: "./images/germany/albert-einstein-7.jpg",
        alt: "Albert Einstein Photo",
        link: "https://en.wikipedia.org/wiki/Albert_Einstein",
        country: "Germany",
        type: "people"
    },
    {
        name: "Johanes Gutenberg",
        image: "./images/germany/Gutenberg.jpg",
        alt: "Johannes Gutenburg Photo",
        link: "https://en.wikipedia.org/wiki/Johannes_Gutenberg",
        country: "Germany",
        type: "people"
    },
    {
        name: "Martin Luther",
        image: "./images/germany/martinluther.jpg",
        alt: "Martin Luther Photo",
        link: "https://en.wikipedia.org/wiki/Martin_Luther",
        country: "Germany",
        type: "people"
    },
    {
        name: "Reykjavík",
        image: "./images/iceland/reykjavid.jpg",
        alt: "Reykjavid City",
        link: "https://en.wikipedia.org/wiki/Reykjav%C3%ADk",
        country: "Iceland",
        type: "city"
    },
    {
        name: "Akureyri",
        image: "./images/iceland/akureyri.jpg",
        alt: "Akureyri Landscape",
        link: "https://en.wikipedia.org/wiki/Akureyri",
        country: "Iceland",
        type: "city"
    },
    {
        name: "Vík í Mýrdal",
        image: "./images/iceland/Vík í Mýrdal.jpg",
        alt: "Vík í Mýrdal",
        link: "https://en.wikipedia.org/wiki/V%C3%ADk_%C3%AD_M%C3%BDrdal",
        country: "Iceland",
        type: "city"
    },
    {
        name: "Blue Lagoon",
        image: "/images/iceland/bluelagoon.jpg",
        alt: "Blue Lagoon Landscape",
        link: "https://www.bluelagoon.com/",
        country: "Iceland",
        type: "landmark"
    },
    {
        name: "Lake Myvatn",
        image: "/images/iceland/mycatn.jpg",
        alt: "Lake Myvatn Landscape",
        link: "https://en.wikipedia.org/wiki/M%C3%BDvatn",
        country: "Iceland",
        type: "landmark"
    },
    {
        name: "Hvitserkur",
        image: "/images/iceland/hvitserkur.jpg",
        alt: "Rhino Rock",
        link: "https://en.wikipedia.org/wiki/Hv%C3%ADtserkur",
        country: "Iceland",
        type: "landmark"
    },
    {
        name: "Björk",
        image: "/images/iceland/Björk.jpg",
        alt: "Bjork with large red hair",
        link: "https://en.wikipedia.org/wiki/Bj%C3%B6rk",
        country: "Iceland",
        type: "people"
    },
    {
        name: "Stefan Karl Stefansson",
        image: "/images/iceland/stefan.jpg",
        alt: "digital cartoon man pointing finger",
        link: "https://en.wikipedia.org/wiki/Stef%C3%A1n_Karl_Stef%C3%A1nsson",
        country: "Iceland",
        type: "people"
    },
    {
        name: "Hafpor Júlíus Björnsson",
        image: "/images/iceland/hafor.jpg",
        alt: "Strong Man",
        link: "https://en.wikipedia.org/wiki/Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson",
        country: "Iceland",
        type: "people"
    },
    {
        name: "Kuala Lumpur",
        image: "images/malaysia/Kuala-Lumpur.jpg",
        alt: "Kuala Lumpur at night",
        link: "https://en.wikipedia.org/wiki/Kuala_Lumpur",
        country: "Malaysia",
        type: "city"
    },

    {
        name: "George Town",
        image: "images/malaysia/Georgetown.jpg",
        alt: "Temples and Syscrapers mingling George Town, Penang",
        link: "https://en.wikipedia.org/wiki/George_Town,_Penang",
        country: "Malaysia",
        type: "city"
    },

    {
        name: "Kuala Terengganu",
        image: "images/malaysia/kuala_terengganu.jpg",
        alt: "The beautiful Terengganu crystal mosque at dusk",
        link: "https://en.wikipedia.org/wiki/Kuala_Terengganu",
        country: "Malaysia",
        type: "city"
    },
    {
        name: "Batu Caves",
        image: "images/malaysia/batu-caves.jpg",
        alt: "Lord Murugan guards the colorful entrance to Batu Caves ",
        link: "https://en.wikipedia.org/wiki/Batu_Caves",
        country: "Malaysia",
        type: "landmark"
    },

    {
        name: "Mount Kiabalu",
        image: "images/malaysia/MountKiabalu.jpg",
        alt: "Grand vista of Mount Kiabalu",
        link: "https://en.wikipedia.org/wiki/Mount_Kinabalu",
        country: "Malaysia",
        type: "landmark"
    },

    {
        name: "Kek Lok Tong",
        image: "images/malaysia/Kek_Lok_Tong.jpg",
        alt: "Kek Lok Tong Cave Temple",
        link: "https://wikipedia.com",
        country: "Malaysia",
        type: "landmark"
    },
    {
        name: "Amber Chia",
        image: "images/malaysia/Amber_Chia.jpg",
        alt: "The lovely Amber Chia",
        link: "https://en.wikipedia.org/wiki/Amber_Chia",
        country: "Malaysia",
        type: "people"
    },

    {
        name: "Jimmy Choo",
        image: "images/malaysia/jimmyChoo.jpg",
        alt: "Jimmy Choo recieves shoe award",
        link: "https://en.wikipedia.org/wiki/Jimmy_Choo",
        country: "Malaysia",
        type: "people"
    },
    {
        name: "Michelle Yeoh",
        image: "images/malaysia/Michelle-Yeoh.jpg",
        alt: "Malaysian Star of James Bond and Crouching Tiger fame",
        link: "https://en.wikipedia.org/wiki/Michelle_Yeoh",
        country: "Malaysia",
        type: "people"
    }



];



export const getData = () => {
    return data;
}