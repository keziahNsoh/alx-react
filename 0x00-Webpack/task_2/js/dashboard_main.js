import $ from 'jquery';
import '../css/main.css'; // Import the CSS file

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    let count = 0;
    const updateCounter = () => {
        count++;
        $('#count').text(`${count} clicks on the button`);
    };

    $('#btn').on('click', _.debounce(updateCounter, 300));
});

