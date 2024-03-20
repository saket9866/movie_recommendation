



async function fetchData() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '84c7b79ce3msh1004fdb7e39d77bp100a9fjsn593800cdb2dd',
                'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
            }
        };
         const response= await fetch('https://ott-details.p.rapidapi.com/advancedsearch?start_year=1970&end_year=2020&min_imdb=6&max_imdb=7.8&genre=action&language=english&type=movie&sort=latest&page=1',options);
        
        //  console.log(response);
    const jsonData =await response.json();
    console.log(jsonData);
	let list =jsonData.results;
	console.log(list);
	list.map((item)=>{
		console.log(item);
		const name = item.title;
const poster = item.imageurl;
const year = item.released;
const idi=item.imdbrating;
const movie =`<li><img src="${poster}">   <h2> <a href="video.html">${name} </a></h2><h2>${year} </h2><h2>${idi} </h2></li>`;
let mvi1=document.getElementById("mvi1");
mvi1.innerHTML += movie;


	})
    // let mvi1=document.getElementById("mvi1");
    // mvi1.innerHTML = jsonData.title;
    } catch (err) {
        console.log(err);
    }
   
}
fetchData();

