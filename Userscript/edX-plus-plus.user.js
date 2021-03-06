// ==UserScript==
// @name         edX++
// @namespace    http://ericpryzant.com/
// @version      1.2.1
// @description  Try to take over the world!
// @author       Eric Pryzant
// @match        https://courses.edx.org/xblock/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/sweetalert2@11
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';
    var vid = document.getElementsByClassName("video")[0];
    var vid_url = vid.attributes['data-metadata'].value.toString().match("https://edx-video.net/[\\w\-\.]+.mp4");
    var vid_title = vid.previousElementSibling.innerText;
    var zNode = document.createElement ('div');
    
    if(vid_url.length === 1) {
        if(vid_title.toLowerCase() === "video"){
            vid_title = "Lecture Video"
        } else {
            vid_title += " Lecture Video"
        }
        zNode.innerHTML = '<a href=' + vid_url[0] + '><button id="myButton" type="button">Download ' + vid_title + '</button></a>';
    } else {
        var buttonText = ""
        vid_url.forEach(function(item, idx) {
            buttonText += '<a href=' + item + '><button id="myButton" type="button" style="margin: 5px; min-width: 250px">Download Video ' + (idx+1) + '</button></a>'
        })
        zNode.innerHTML = '<button id="myButton" type="button">Download Lecture Videos</button>'
        zNode.onclick = function () {
            swal.fire({
                title: "Multiple Videos Detected",
                icon: "info",
                html: buttonText
            })
        }
    }
    
    zNode.setAttribute ('id', 'myContainer');
    zNode.style = "top:0;right:0;position:absolute;z-index:99999;padding:20px;";
    document.body.appendChild (zNode);

    var item = document.getElementsByClassName("video-speeds")[0];
    var new_speed = document.createElement("li");
    var btn = document.createElement("button");
    var speed_limit = "2.50";
    btn.setAttribute("class", "control speed-option");
    btn.setAttribute("tabindex", -1);
    btn.setAttribute("aria-pressed", "false");
    new_speed.appendChild(btn);
    new_speed.setAttribute("data-speed", speed_limit);
    new_speed.children[0].innerText = speed_limit + "x";
    item.prepend(new_speed);

    item = document.getElementsByClassName("video-speeds")[0];
    new_speed = document.createElement("li");
    btn = document.createElement("button");
    speed_limit = "3.0";
    btn.setAttribute("class", "control speed-option");
    btn.setAttribute("tabindex", -1);
    btn.setAttribute("aria-pressed", "false");
    new_speed.appendChild(btn);
    new_speed.setAttribute("data-speed", speed_limit);
    new_speed.children[0].innerText = speed_limit + "x";
    item.prepend(new_speed);

    item = document.getElementsByClassName("video-speeds")[0];
    new_speed = document.createElement("li");
    btn = document.createElement("button");
    speed_limit = "4.0";
    btn.setAttribute("class", "control speed-option");
    btn.setAttribute("tabindex", -1);
    btn.setAttribute("aria-pressed", "false");
    new_speed.appendChild(btn);
    new_speed.setAttribute("data-speed", speed_limit);
    new_speed.children[0].innerText = speed_limit + "x";
    item.prepend(new_speed);

    const keySpace = 32;
    const keyLeft = 37;
    const keyRight = 39;
    document.addEventListener("keydown", function(event) {
        const code = event.keyCode;
        const alt = event.altKey;
        //console.log("Key pressed " + code + " " + alt);
        if (code == keySpace) {
            var playPauseButton = document.getElementsByClassName("video_control");
            playPauseButton[0].click()
            event.preventDefault();
        } else if (code == keyLeft) {
            if (!alt) {
                document.getElementsByClassName("current")[0].previousElementSibling.children[0].click()
                event.preventDefault();
            } else {
                document.getElementsByClassName("current")[0].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].click()
                event.preventDefault();
            }
        } else if (code == keyRight) {
            if (!alt) {
                document.getElementsByClassName("current")[0].nextElementSibling.children[0].click()
                event.preventDefault();
            } else {
                document.getElementsByClassName("current")[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].click()
                event.preventDefault();
            }
        }

    })
})();
