var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.className="row";
var div=document.createElement("div");
div.id="Books";

row.style.marginTop="30px";
document.body.style.backgroundColor="blueviolet";
var h1= document.createElement("h1");
h1.innerHTML="Book Details";
h1.style.textAlign="center";
h1.style.marginTop="50px";
h1.style.color="rgb(255, 255, 255)"

var div1=document.createElement("div");
div1.style.textAlign="center";

var outputdata=document.createElement("div");
outputdata.style.fontSize="20px";

async function foo(){
    let url=`https://gutendex.com/books/`;
    let res1=await fetch(url);
    let res2=await res1.json();
    div1.innerHTML=`Count : ${res2.count} <br>`;
     
     let len=res2.results.length-1
     var datas=res2.results;
 
     for(let i=0; i<=datas.length-1; i++)
     {    
        row.innerHTML +=`
        <div class="col-md-4">
        <div class="card" style="width: 18rem; marginTop=3px;">
        <div class="card-header">
          ${datas[i].title}
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Author Name : ${datas[i].authors[0].name}</li>
          <li class="list-group-item">ID : ${datas[i].id}</li> 
          <li class="list-group-item">Download Count : ${datas[i].download_count}</li> 
          <li class="list-group-item">BookShelves : ${datas[i].bookshelves}</li> 
          <li class="list-group-item">Subjects : ${datas[i].subjects}</li> 
          <li class="list-group-item">Languages : ${datas[i].languages}</li>   
        </ul>
        </div>
      </div>`;
            
     }
}
foo();



div.append(h1);
div1.append(row);
container.append(div,div1);
container.append(row);
document.body.append(container);
