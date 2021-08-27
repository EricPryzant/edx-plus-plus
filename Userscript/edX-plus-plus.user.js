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

(() => {
    'use strict';
    const vids = document.getElementsByClassName("video");
    const vid_urls = [];
    const vid_titles = [];
    for (const vid of vids) {
        const url = vid.attributes['data-metadata'].value.match("https://edx-video.net/[\\w\-\.]+.mp4");
        const title = vid.previousElementSibling.innerText;
        if (url) {
            vid_urls.push(url);
            vid_titles.push(title);
        }
    }

    const zNode = document.createElement('div');

    if(vid_urls.length === 1) {
        if(vid_titles[0].toLowerCase() === "video"){
            vid_titles[0] = "Lecture Video"
        } else {
            vid_titles[0] += " Lecture Video"
        }
        zNode.innerHTML = '<a href=' + vid_urls[0] + '><button type="button">Download ' + vid_titles[0] + '</button></a>';
    } else {
        let buttonText = ""
        vid_urls.forEach((item, idx) => {
            buttonText += '<a href=' + item + '><button type="button" style="margin: 5px; min-width: 250px">Download Video ' + (idx+1) + '</button></a>'
        });
        zNode.innerHTML = '<button type="button">Download Lecture Videos</button>'
        zNode.onclick = () => {
            swal.fire({
                title: "Multiple Videos Detected",
                icon: "info",
                html: buttonText
            });
        };
    }
    
    zNode.style = "top:0;right:7px;position:absolute;z-index:99999;padding:20px;";
    document.body.appendChild(zNode);

    let item = document.getElementsByClassName("video-speeds")[0];
    let new_speed = document.createElement("li");
    let btn = document.createElement("button");
    let speed_limit = "2.50";
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

    const keySpace = 'Space';
    const keyLeft = 'ArrowLeft';
    const keyRight = 'ArrowRight';
    document.addEventListener("keydown", (event) => {
        const code = event.code;
        const alt = event.altKey;
        //console.log("Key pressed " + code + " " + alt);
        if (code == keySpace) {
            const playPauseButton = document.getElementsByClassName("video_control");
            playPauseButton[0].click();
            event.preventDefault();
        } else if (code == keyLeft) {
            if (!alt) {
                document.getElementsByClassName("current")[0].previousElementSibling.children[0].click();
                event.preventDefault();
            } else {
                document.getElementsByClassName("current")[0].previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.children[0].click();
                event.preventDefault();
            }
        } else if (code == keyRight) {
            if (!alt) {
                document.getElementsByClassName("current")[0].nextElementSibling.children[0].click();
                event.preventDefault();
            } else {
                document.getElementsByClassName("current")[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].click();
                event.preventDefault();
            }
        }
    });
})();
