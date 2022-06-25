// File: script.js

// GUI Assignment: HW4

// Created by: Hunter Spadafora, hunter_spadafora@student.uml.edu
// Created on: 6/15/2022

// Description:
// This is the Javascript code for GUI1 HW4

// Copyright (c) 2022 by Hunter Spadafora. All rights reserved.
// May be freely copied or excerpted for educational purposes with credit
// to the author.
// Most recent update by HZS on 6/25/2022


$().ready(function() {

    // Validate form
    const form = $("form");
    form.validate();



    // Slider code -----------------------------------------------------
    $("#left_slider").slider({
        animate: true,
        min: -50,
        max: 50,
        orientation: "horizontal",
        step: 1,
        slide: function(e, ui) {
            document.querySelector("#left").value = ui.value;
            form.validate();
            console.log("Left slider event listener complete.");
        }
    });

    $("#right_slider").slider({
        animate: true,
        min: -50,
        max: 50,
        orientation: "horizontal",
        step: 1,
        slide: function(e, ui) {
            document.querySelector("#right").value = ui.value;
            form.validate();
            console.log("Right slider event listener complete.");
        }
    });

    $("#top_slider").slider({
        animate: true,
        min: -50,
        max: 50,
        orientation: "horizontal",
        step: 1,
        slide: function(e, ui) {
            document.querySelector("#top").value = ui.value;
            form.validate();
            console.log("Top slider event listener complete.");
        }
    });

    $("#bottom_slider").slider({
        animate: true,
        min: -50,
        max: 50,
        orientation: "horizontal",
        step: 1,
        slide: function(e, ui) {
            document.querySelector("#bottom").value = ui.value;
            form.validate();
            console.log("Bottom slider event listener complete.");
        }
    });



    // Input event listener for changing the sliders -------------------
    document.querySelector("#left").addEventListener("input", function() {
        $("#left_slider").slider("option", "value", document.querySelector("#left").value);
        console.log("Left input event listener complete.");
    });

    document.querySelector("#right").addEventListener("input", function() {
        $("#right_slider").slider("option", "value", document.querySelector("#right").value);
        console.log("Right input event listener complete.");
    });

    document.querySelector("#top").addEventListener("input", function() {
        $("#top_slider").slider("option", "value", document.querySelector("#top").value);
        console.log("Top input event listener complete.");
    });

    document.querySelector("#bottom").addEventListener("input", function() {
        $("#bottom_slider").slider("option", "value", document.querySelector("#bottom").value);
        console.log("Bottom input event listener complete.");
    });



    // Tabs code -------------------------------------------------------
    // $("div#tabs").tabs();
    let iterator = 0;








    // Event that runs when the Submit button is clicked. --------------
    document.querySelector("#submit").addEventListener("click", function() {

        // Table will not be generated unless the input boxes have valid
        // values (-50 to 50).
        if (form.valid()) {

            // Get the HTML input elements
            const lbox = document.querySelector("#left");
            const rbox = document.querySelector("#right");
            const tbox = document.querySelector("#top");
            const bbox = document.querySelector("#bottom");

            // Check for value out of range or invalid input
            const array = [lbox, rbox, tbox, bbox];
            array.forEach(function(val) {
                if (val.value > 50) {
                    val.value = 50;
                } else if (val.value < -50) {
                    val.value = -50;
                }
                // This third option filters "junk" like 'e' and '--' that is treated like 0
                else if (val.value == 0) {
                    val.value = 0;
                }
            });

            // Get the values in the HTML input elements
            const left = Number(lbox.value);
            const right = Number(rbox.value);
            const top = Number(tbox.value);
            const bottom = Number(bbox.value);

            // Get the "table" to add the table elements to
            const table_space = $("div#tabs");

            // How the loops will grow
            const lr = (left < right) ? (1) : (-1);
            const tb = (top < bottom) ? (1) : (-1);









            // Setting up for tabs
            // document.querySelector("div#tabs ul").innerHTML += `<li><a href="#${iterator}">[${left}, ${right}] by [${top}, ${bottom}]</a></li>`;
            // $("#table_space").tabs("refresh");



















            // top row
            let table = `<div id=${iterator}><table><tr><th class=\"corner\">\\</th>`;
            for (let i = left; i != right + lr; i += lr) {
                console.log(`Loop 1: i = ${i}`);

                switch (Math.abs(i) % 10) {
                    case 1:
                        table += `<th class=\"one\">${i}</th>`;
                        break;
                    case 2:
                        table += `<th class=\"two\">${i}</th>`;
                        break;
                    case 3:
                        table += `<th class=\"three\">${i}</th>`;
                        break;
                    case 4:
                        table += `<th class=\"four\">${i}</th>`;
                        break;
                    case 5:
                        table += `<th class=\"five\">${i}</th>`;
                        break;
                    case 6:
                        table += `<th class=\"six\">${i}</th>`;
                        break;
                    case 7:
                        table += `<th class=\"seven\">${i}</th>`;
                        break;
                    case 8:
                        table += `<th class=\"eight\">${i}</th>`;
                        break;
                    case 9:
                        table += `<th class=\"nine\">${i}</th>`;
                        break;
                    case 0:
                        table += `<th class=\"ten\">${i}</th>`;
                        break;
                    default:
                        console.error(`k % 10 failed to give a valid answer: k % 10 = ${k % 10}`);
                        break;
                }
            }
            table += "</tr>";

            // 2+ row
            for (let i = top; i != bottom + tb; i += tb) {

                switch (Math.abs(i) % 10) {
                    case 1:
                        table += `<tr><th class=\"one\">${i}</th>`;
                        break;
                    case 2:
                        table += `<tr><th class=\"two\">${i}</th>`;
                        break;
                    case 3:
                        table += `<tr><th class=\"three\">${i}</th>`;
                        break;
                    case 4:
                        table += `<tr><th class=\"four\">${i}</th>`;
                        break;
                    case 5:
                        table += `<tr><th class=\"five\">${i}</th>`;
                        break;
                    case 6:
                        table += `<tr><th class=\"six\">${i}</th>`;
                        break;
                    case 7:
                        table += `<tr><th class=\"seven\">${i}</th>`;
                        break;
                    case 8:
                        table += `<tr><th class=\"eight\">${i}</th>`;
                        break;
                    case 9:
                        table += `<tr><th class=\"nine\">${i}</th>`;
                        break;
                    case 0:
                        table += `<tr><th class=\"ten\">${i}</th>`;
                        break;
                    default:
                        console.error(`k % 10 failed to give a valid answer: k % 10 = ${k % 10}`);
                        break;
                }

                for (let j = left; j != right + lr; j += lr) {
                    const k = i*j;

                    console.log(`Loop 2: i = ${i}, j = ${j}, k = ${k}`);

                    switch (Math.abs(k) % 10) {
                        case 1:
                            table += `<td class=\"one\">${k}</td>`
                            break;
                        case 2:
                            table += `<td class=\"two\">${k}</td>`
                            break;
                        case 3:
                            table += `<td class=\"three\">${k}</td>`
                            break;
                        case 4:
                            table += `<td class=\"four\">${k}</td>`
                            break;
                        case 5:
                            table += `<td class=\"five\">${k}</td>`
                            break;
                        case 6:
                            table += `<td class=\"six\">${k}</td>`
                            break;
                        case 7:
                            table += `<td class=\"seven\">${k}</td>`
                            break;
                        case 8:
                            table += `<td class=\"eight\">${k}</td>`
                            break;
                        case 9:
                            table += `<td class=\"nine\">${k}</td>`
                            break;
                        case 0:
                            table += `<td class=\"ten\">${k}</td>`
                            break;
                        default:
                            console.error(`k % 10 failed to give a valid answer: k % 10 = ${k % 10}`);
                            break;
                    }
                }

                table += "</tr>";
            }
            // table_space.append(table + "</table></div>");
            // iterator++;
            table_space.html(table + "</table></div>");
            console.log("Submit button listener complete.");
        }
    });

});

