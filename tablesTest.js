$(document).ready(function () {

    var testArr = ["Name1", "Name2", "Name3", "Name4", "Name5", "Name6"];

    updateListing();

    function updateListing() {
        $("#waitlist").empty();
        $("#current").empty();
        for (var i = 0; i < testArr.length; i++) {
            if (i < 5) {
                createListing(testArr[i], (i + 1), true);
            } else {
                createListing(testArr[i], (i + 1), false);
            }
        }
    }

    function createListing(name, number, check) {

        var newListing = $("<div>")
            .addClass("boxList");

        var newNumber = $("<span>")
            .addClass("num")
            .text(number);

        var newName = $("<span>")
            .addClass("id").text(" | " + name);

        newListing.append(newNumber).append(newName);

        if (check == true) {
            $("#current").append(newListing);
        } else {
            $("#waitlist").append(newListing);
        }
    }

});