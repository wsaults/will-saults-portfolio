// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.easing
//= require turbolinks
//= require_tree .


$(function() {
    var featureItemFhoc = document.getElementById("feature-item-fhoc");
    var featureItemDell = document.getElementById("feature-item-dell");
    var featureItemGas = document.getElementById("feature-item-gas");
    var device = document.getElementById("device-default");

    featureItemFhoc.addEventListener("mouseover", function( event ) {
        device.id = "fhoc"
    }, false);

    featureItemDell.addEventListener("mouseover", function( event ) {
        device.id = "dell"
    }, false);

    featureItemGas.addEventListener("mouseover", function( event ) {
        device.id = "gas"
    }, false);
});
