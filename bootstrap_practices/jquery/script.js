// jQuery function
// select an HTML element with selector and does somthin on it

$(document).ready(function () {
    // add class
    $("button").addClass("animated bounce");
    $(".well").addClass("animated shake");
    $("#target3").addClass("animated fadeOut");

    // remove class
    $("button").removeClass("btn-default");

    // change css of element
    $("#target1").css("color", "red");

    // disable an element
    $("#target1").prop("disabled", true);

    // same as .innerHTML
    $("h1").html("<em>jQuert Playround</em>");

    // sames as .textContent
    $("h1").text("Wowwwww");

    // remove HTML element
    $("#target4").remove();

    // append the selected element to another element
    $("#target4").appendTo("#right-well");

    // makes a copy of an element
    $("#target2").clone().appendTo("#right-well");

    // parent of the given element
    $("#left-well").parent();

    // children of the given element
    $("#left-well").children();

    // nth-child(n) css selector
    $(".target:nth-child(3)").addClass("animated bounce");

    // jQuery is zero-indexed
    $(".target:odd").addClass("animated shake");
});