const key="c90059d0872945d78bf605830c221885";
const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;
console.log(url);
var articles=[];
async function getNewsData(){
    var response=await fetch(url);
    console.log(response);
    var data=await response.json();
    articles=data.articles;
    displayData();
   
}
getNewsData();
function displayData()
{
 var data=``;
 articles.forEach(function(article){
    var desc='';
    var urlImage='';
    if(article.description!=null)
    {
      desc=article.description;
    }
    else{
        desc='No description available';
    }
    if(article.urlToImage!=null)
    {
      urlImage=article.urlToImage;
    }
    else{
        urlImage='war.webp';
    }
    data+=`
    <div class="col-md-4">
    <div class="newPost fs-5 p-2">
        <h2>${article.title}</h2>
        <p>${desc}</p>
        <img src="${urlImage}" alt="This is image" class="w-100">
        <a href="${article.url}">Click Here to see more...</a>
    </div>
 </div>
    `;
    document.getElementById('newsRow').innerHTML=data;
 })
}

    