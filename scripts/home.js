const inputField = document.getElementById("textInputArea");
const fileSaveElement = document.getElementById("saveButton");
const textAreaElement = document.getElementById("inputAreaTextElement");
const addNewAreaButton = document.getElementById("addButton");
const introMain = document.getElementById("explanationIntro");
const text = inputField.value;
const savedElement = [];
let letters = 0;
let files = 1;
let worksheets = 0;

introMain.innerHTML =
  "Welcome to Foster Notes! Click on the save button below to save your work and click on the button beside it to add a new worksheet!";

document.addEventListener("keypress", () => {
  letters += 1;
  console.log(letters);
});

function saveText() {
    function func_savedata(data) {
    var string_data = JSON.stringify(data);
    var file = new File([string_data], "savefile.txt", {
      type: "text;charset=utf-8",
    });

    var anchor = document.createElement("a");
    anchor.setAttribute("href", window.URL.createObjectURL(file));
    anchor.setAttribute("download", "savefile.txt");
    anchor.click();
    URL.revokeObjectURL(anchor.href);
  }
  func_savedata(text);
}
