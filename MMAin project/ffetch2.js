


async function fetchData() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3937b20e3emsh6510482476179f0p1c455fjsnbfef0297b73d',
                'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
            }
        };
         const response= await fetch('https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en',options);
        
        //  console.log(response);
    const jsonData =await response.json();
    console.log(jsonData);
	// let list =jsonData.d;
	// console.log(list);
// 	list.map((item)=>{
// 		console.log(item);
// 		const name = item.l;
// const poster = item.i.imageUrl;
// const year = item.y;
// const idi=item.rank;
// const movie =`<li><img src="${poster}">   <h2 > <a href="">${name} </a></h2><h2>${year} </h2><h2>${idi} </h2></li>`;
// let mvi2=document.getElementById("mvi2");
// mvi2.innerHTML += movie;
// })


	
    // let mvi1=document.getElementById("mvi1");
    // mvi1.innerHTML = jsonData.title;
    } catch (err) {
        console.log(err);
    }
   
}
fetchData();
