"use strict";

function generateQrCode() {
    let image = document.querySelector("img");
    let textValue = document.querySelector("input").value;
    if (textValue) {
        return image.src = 'https://api.qrserver.com/v1/create-qr-code?size=150x150&data=' + textValue
    } return
}