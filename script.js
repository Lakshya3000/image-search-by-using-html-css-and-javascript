const Key = 'eXcoHFthWVtvVuow0ei2DG88keIQq-wIXZ7DDZfhGPg';
let htmls = document.querySelector(".image-box")

    async function searchImage(searchInput) {
    let Url = `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=${Key}`;
    let response = await fetch(Url);
    let data = await response.json();

    let result = data.results;

    let mainHTML = '';
    for (let i = 0; i < data.results.length; i++) {

         
         mainHTML += `<div class="result">
                                <img class="image-result"
                                    src="${data.results[i].urls.small}"
                                    alt="">
                                <div class="title">
                                    <a  href="${result[i].links.html}">${data.results[i].alt_description}</a>
                                </div>
                           </div>`
    }
    htmls.innerHTML = mainHTML
}

let searchform = document.getElementById("searchform")
searchform.addEventListener("submit", async(e)=>{
    e.preventDefault()
    let searchInput = await inpt.value;
    searchImage(searchInput);  
})



