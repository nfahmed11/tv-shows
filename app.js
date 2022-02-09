
const button = document.querySelector("button");
const form = document.querySelector("form");
const container = document.querySelector("#container");

form.addEventListener('submit', async function(e){
    e.preventDefault();
    console.log("it works");
    container.innerHTML = ""
    
    const myinput = document.querySelector('#myInput')
    let input = myinput.value;
    console.log(input)

    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${input}`)
    makeImages(res.data);
    console.dir(form);
    form.reset();
    



})


const img = document.createElement('IMG');

let makeImages =  (shows) => {
    
    for(let result of shows) {
        if (img.src = result.show.image.medium) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            container.append(img);
        }

        const name = document.createElement('h2');
        const text = document.createTextNode(result.show.name);
        name.appendChild(text);
        container.append(name);

        const rating = document.createElement('h3');
        const rate = document.createTextNode(result.show.rating.average);
        rating.appendChild(rate);
        container.append(rating);


    }
}







