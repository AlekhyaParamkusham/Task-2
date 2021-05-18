// XML HTTP REQUEST

// create an xml http req

var request = new XMLHttpRequest();

// initiate a new connection

request.open('GET', "https://restcountries.eu/rest/v2/all", true);

// sending the req to the server.

request.send();

// if server responds, we need to retrieve the data.

request.onload = function(){
    var data = JSON.parse(this.response);
    console.log(data); 
    for (var i=0 ; i< data.length ; i++){
        var value = data[i].name;
        console.log(value);
    }
    }