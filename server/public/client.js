// linked jQuery to the client.js
$(document).ready(onReady);

function onReady() {

// using jQuery to initiate an AJAX request
    $.ajax({
// using app.get() we are attemping to locate the artist array
        type: 'GET',
        url: '/artist'

// when AJAX locates the array, another function intiates which
// loops through the array and appends the artist information to the DOM
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            
// using jQuery to append the information in a table row:
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    $.ajax({
        // using app.get() we are attemping to locate the artist array
                type: 'GET',
                url: '/song'
        
        // when AJAX locates the array, another function intiates which
        // loops through the array and appends the artist information to the DOM
            }).then(function (response) {
                for (let i = 0; i < response.length; i++) {
                    let song = response[i];
                    
        // using jQuery to append the information in a table row:
                    $('#songTableBody').append(`
                        <tr>
                            <td>${song.title}</td>
                            <td>${song.artist}</td>
                        </tr>
                    `);
                }
            });
    // TODO Add ajax request for /songs and display on DOM
}