import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$(document).ready(function() {
    $('body').append('<button id="counter-button">Click me</button>');
    $('body').append('<div id="counter-display">Counter: 0</div>');

    $('#counter-button').on('click', function() {
        count += 1;
        $('#counter-display').text(`Counter: ${count}`);
    });
});

