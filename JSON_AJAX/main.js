var pageCounter = 1;

var animalContainer = document.getElementById('animal-info');

var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');

ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
}

ourRequest.send();

pageCounter++;

if(pageCounter > 3){
    btn.classList.add('hide-me');
}

});

function renderHTML(data){
    var htmlString = '';

    for(let i  = 0; i < data.length; i++){
        htmlString += '<p>' + data[i].name + 'is a ' + data[i].species + " that likes " + data[i].foods.likes[0] + " and " + data[i].foods.likes[1] + " and dislikes " + data[i].foods.dislikes[0] + " and " + data[i].foods.dislikes[1] + " .</p>";
        
    //     for(j = 0; j < data[i].foods.likes.length; j++){
    //         if(j == 0){
    //             htmlString += data[i].foods.likes[j] + " "
    //         } else {
    //             htmlString += " and " + data[i].foods.likes[j] + " "

    //         }
    //     }
    //     htmlString += " and dislikes "

    //     for(j = 0; j < data[i].foods.dislikes.length; j++){
    //         if(j == 0){
    //             htmlString += data[i].foods.dislikes[j] + " "
    //         } else {
    //             htmlString += " and " + data[i].foods.dislikes[j] + " "

    //         }        }
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
