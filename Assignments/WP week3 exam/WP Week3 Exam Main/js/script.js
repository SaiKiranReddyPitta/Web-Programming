var mData = {
  "products": [{
      "title": "Samsung Galaxy J6 Smart Phone 64 GB, 4 GB RAM, Blue",
      "description": "Super AMOLED Display with 1480 x 720 (HD+) Resolution",
      "image": "1.jpeg",
      "quantity":"10"
    },
    {
      "title": "Mi A2 4GB + 64GB | 6GB + 128GB",
      "description": "15.2cm (5.99) large display",
      "image": "2.jpeg",
      "quantity":"20"
    },
    {
      "title": "Apple iphone 32GB",
      "description": "11.4 cm(4.7)display",
      "image": "3.jpeg",
      "quantity":"30"
    },
    {
      "title": "red mi note 6 pro",
      "description": "15.9 cm (6.26 inch) FHD+ Display with Resolution ",
      "image": "4.jpeg",
      "quantity":"40"
    }
  ]
}

// mData = JSON.parse(movies);
// mData = JSON.stringify(mData)
// mData = JSON.parse(mData)
var i = 0

window.onload = function display(){
    document.getElementById('title').innerHTML = '<h1>'+mData.products[i].title+'</h1>'
    document.getElementById('description').innerHTML = '<h2>'+mData.products[i].description+'</h2>'
    document.getElementById('image').innerHTML = '<img src="1.jpeg'+mData.products[i].poster_path+'" class="img-responsive">'
    document.getElementById('quantity').innerHTML = '<h4>'+mData.products[i].quantity+'</h3>'
    hideButton('previous')

};

function prevpressed(){
    i = 0;
    i--;
    if(i < 0){
        i = 0;
        hideButton('previous')
        return;
    }
    showButton('previous')
    showButton('next')
    document.getElementById('title').innerHTML = '<h1>'+mData.products[i].title+'</h1>'
    document.getElementById('description').innerHTML = '<h2>'+mData.products[i].description+'</h2>'
    document.getElementById('image').innerHTML = '<img src="https://1.jpeg'+mData.products[i].poster_path+'" class="img-responsive">'
    document.getElementById('quantity').innerHTML = '<h4>'+mData.products[i].quantity+'</h3>'
    if (i == 0) hideButton('previous')
}


function nextpressed(){
    i = 0;
    i++;
    if(i > mData.results.length - 1){
        i = mData.results.length-1;
        hideButton('next')
        return;
    }
    showButton('next')
    showButton('previous')
    document.getElementById('title').innerHTML = '<h1>'+mData.products[i].title+'</h1>'
    document.getElementById('description').innerHTML = '<h2>'+mData.products[i].description+'</h2>'
    document.getElementById('image').innerHTML = '<img src="https://1.jpeg'+mData.products[i].poster_path+'" class="img-responsive">'
    document.getElementById('quantity').innerHTML = '<h4>'+mData.products[i].quantity+'</h3>'
    if(i == mData.results.length - 1) hideButton('next')

}

function hideButton(id) {
  console.log(document.getElementById(id).style.visibility)
  document.getElementById(id).style.visibility = 'hidden';
}
function showButton(id) {
  console.log(document.getElementById(id).style.visibility)
  document.getElementById(id).style.visibility = 'visible';
}

function deleted(id){ 
delete mData.products[i];
    document.getElementById('title').innerHTML = ""
    document.getElementById('description').innerHTML = ""
    document.getElementById('image').innerHTML = ""
    document.getElementById('quantity').innerHTML = ""
}