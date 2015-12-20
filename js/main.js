var savedList = Array();
var failList = Array();
var trueList = Array();

var item = savedList[Math.floor(Math.random() * savedList.length)];

function removeA(arr) {
    var what, a = arguments,
        L = a.length,
        ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax = arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function randomQ() {
    var item = savedList[Math.floor(Math.random() * savedList.length)];
    if (savedList != null) {
        $('.question').text(item);

    }
    if (savedList === undefined || savedList.length == 0) {
        $('.question').text('');
        $('.status').text('SLUT PRUT');
        $('body').addClass('show');
    }
}

function logAll() {
    console.log('faillist - ' + failList);
    console.log('savelist - ' + savedList);
    console.log('truelist - ' + trueList);
}

$('.result').click(function() {
    $('.truelist').append('<h3>' + trueList.length);
    $('.falselist').append('<h3>' + failList.length);

})

$('.question').text(item);

$('.false button').click(function() {
    var currentItem = $('.question').text();
    removeA(savedList, currentItem);
    failList.push(currentItem);
    randomQ();
    logAll();
})

$('.true button').click(function() {
    var currentItem = $('.question').text();
    removeA(savedList, currentItem);
    trueList.push(currentItem);
    randomQ();
    logAll();

})


$('.start-btn').click(function() {
    $('body').addClass('start');
})

$('.add-name-btn').click(function() {
    var inputName = $('#name').val();
    savedList.push(inputName);
    $('.form-text').text(inputName + ' Has been added');
    $('.count').text('Number of names: ' + savedList.length)
    $('#name').val('');
})
