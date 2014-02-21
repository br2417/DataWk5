/**
 * @author Benedetta Riva
 */

console.log("Javascript scripts file loaded");

function LoadAnimalJSON(AnimalData) {

	//Below, I will console.log the IsFriendly boolean of the AnimalData object. I expect that this console.log will show "false".

	console.log(AnimalData.ZooAnimals[2].IsFriendly);

}
	
	//This is my custom dataLoaded function, which I called "AnimalDataLoaded"

function AnimalDataLoaded() {

	console.log("I got the AnimalData document ready!");

	//Below I will use jQuery to create a new div element

	var BennysDiv = $("<div>");

	//I will use jQuery (you can tell I am doing this by observing the '$' sign) to add some text to it
	//basically tell jQuery to take the div I created above called "BennysDiv" and add some HTML; a string.

	$(BennysDiv).html("This is my div for the week 5 assignment");

	//Below I tell jQuery to grab the div with the id "AnimalContainer" and put my new div inside it. I will do this with a function called "append"
	//I expect to see a new div containing the text "This is my new div" appear inside the div with the id "AnimalContainer" - on the webpage

	$("#AnimalContainer").append(BennysDiv);

	//Below I use the jQuery get function ($.get) to load my JSON file (AnimalData.json).
	//The $.get function takes three parametres: 1. File name 2. Function to call once file is loaded 3. String of file type to expect

	$.get("AnimalData.json", LoadAnimalJSON, "json");

}

	//When that has happened I want to initiate the "AnimalDataLoaded" function activity that I defined on line 17.
	//(What we're doing with document ready is asynchronous - that is why the console.log statement I have below will actually appear before the 
	//previous console.log statement above, which reads "I got the AnimalData document ready".

$(document).ready(AnimalDataLoaded);

console.log("this statement comes after after document ready")
