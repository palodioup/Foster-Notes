const inputField = document.getElementById("textInputArea");

function saveText() {
  let text = inputField.value
    function func_savedata(data) {
    var string_data = JSON.stringify(data);
    var file = new File([string_data], "savefile.txt", {
      type: "text;charset=utf-8",
    });

    var anchor = document.createElement("a");
    anchor.setAttribute("href", window.URL.createObjectURL(file));
    anchor.setAttribute("download", "file.txt");
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }
  func_savedata(text);
}

