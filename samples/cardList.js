export const listData = (dataList, tagId) => {
    const DOMLocation = document.querySelector(tagId);
    let HTMLRep = "<div>";
    for(const data in dataList){
        HTMLRep += "<article>" + cardData(data) + "</article>";
    }
    HTMLRep += "</div>";

    DOMLocation.innerHTML += HTMLRep;

}