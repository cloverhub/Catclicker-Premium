$(function() {

var cats = [
	{
		name: 'Huey',
		image: 'images/huey.png',
		count: 0,
	},
	{
		name: 'Dewey',
		image: 'images/dewey.png',
		count: 0,
	},
	{
		name: 'Louis',
		image: 'images/louis.png',
		count: 0,
	},
	{
		name: 'Donald',
		image: 'images/donald.png',
		count: 0,
	},
	{
		name: 'Scrooge',
		image: 'images/scrooge.png',
		count: 0,
	}
];

for (var i = 0; i < cats.length; i++) {
	$('.cat-menu').prepend('<a href="#" cat-id="' + i + '" class="list-group-item">' + cats[i].name + '</a>');
};

$('.cat-menu').find('a').click(function(e) {
	var catID = $(this).attr('cat-id');
	showCat(catID);
	e.preventDefault();
 });

var showCat = function(catID) {
		$('#cat').html('<img cat-id="' + catID + '" src="' + cats[catID].image + '"/><div id ="purcount"><h1>' + cats[catID].name + '</h1> <h2> Pur Count </h2> <h2 class = "cont-numb">' + cats[catID].count + '</h2>');
		clickCat();
	}

var clickCat = function() {
	$('#cat').find('img').click(function() {
		var catID = $(this).attr('cat-id');
		cats[catID].count += 1;
		$('#cat').find('.cont-numb').html(cats[catID].count);
	});
};
});