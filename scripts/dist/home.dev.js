"use strict";

var inputField = document.getElementById("textInputArea");
var inputValue = inputField.value;

function saveText() {
  var text = inputField.value;

  function func_savedata(data) {
    var string_data = data;
    var file = new File([string_data], "note.txt", {
      type: "text;charset=utf-8"
    });
    var anchor = document.createElement("a");
    anchor.setAttribute("href", window.URL.createObjectURL(file));
    anchor.setAttribute("download", "note.txt");
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }

  func_savedata(text);
  window.location("/");
}