// this array will hold your objects
var locations = [

]; 

// object constructor
var State = function (state, revenue, locationCount) {
	this.state = state;
	this.revenue = revenue;
	this.locationCount = locationCount;
		this.averageRevenue = function() {
			var average = this.revenue / this.locationCount;
			return average;
		}

}


// object instances
var minnesota = new State("MN", 300, 3);
var illinois = new State("IL", 5000, 12);
var nevada = new State("NV", 25000, 1);
// // push object instances to locations array
// locations.push( ["california", 2000, 4 ] );
// locations.push( ["florida", 1000, 5] );
locations.push(minnesota);
locations.push(illinois);
locations.push(nevada);

// DO NOT MODIFY THIS CODE

$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});

console.log(locations);