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
    var featureItemDiglister = document.getElementById("feature-item-diglister");
    var featureItemMatter = document.getElementById("feature-item-matter");
    // var featureItemPediaQ = document.getElementById("feature-item-pediaq");
    var featureItemBoxer = document.getElementById("feature-item-boxer");
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

    featureItemDiglister.addEventListener("mouseover", function( event ) {
        device.id = "diglister"
    }, false);

    featureItemMatter.addEventListener("mouseover", function( event ) {
        device.id = "matter"
    }, false);

    // featureItemPediaQ.addEventListener("mouseover", function( event ) {
    //     device.id = "pediaq"
    // }, false);

    featureItemBoxer.addEventListener("mouseover", function( event ) {
        device.id = "boxer"
    }, false);
});
