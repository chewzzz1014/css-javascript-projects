const button = document.querySelector("button");
const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;

    const config = {
        params: { q: searchTerm }
    };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // console.log(res.data);

    makeImg(res.data);

    form.elements.query.value = "";
})

function makeImg(images) {
    for (let i of images) {

        // if there's image
        if (i.show.image) {
            const img = document.createElement("IMG");
            img.src = i.show.image.medium;
            document.body.append(img);
        }

    }
}