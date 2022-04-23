"use strict";

{
  var NAME = "FELIOS.JS";
  var VERSION = "v0.0.0.1";
  var DESCRIPTION = "A Basic Retro Native Singular UI - State Management";
  var AUTHOR = "Humphrey Pietersen";
  var CONTRIBUTORS = {};
  var UI = "Single Input Form w/ Button";
  var LICENSE = "MIT";
  var COPYRIGHT = "(c) 2021 Humphrey Pietersen";
}
var dataFileUpload = document.querySelector("#dataFileUpload");
var dataFileUploaded = document.querySelector("#upload");
var dataProgress = document.querySelector(".data-progress");
var dataProgressFill = document.querySelector(".data-progress span");

dataFileUploaded.onchange = function (e) {
  if (dataFileUploaded.files.length != 0) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "/file-handler.php");
    xhr.upload.addEventListener('progress', function (e) {
      console.log(e);
      var loaded = e.loaded;
      var total = e.total;
      var percentage = e.lengthComputable ? loaded / total * 100 : 100;
      dataProgressFill.textContent = Math.floor(percentage) + "%";
      dataProgressFill.style.width = Math.floor(percentage) + "%";
    });
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send(new FormData(dataFileUpload));
    dataFileUpload.form.submit();
  }
};