/* Grammar Keyboard */

// Parse the keyboard text file for the selected language (uses the same XMLHttpRequest function in translate03.js)
async function get_grammar(keyboard_file) {

  if (!keyboard_file) { // ensure file exists
    alert("Error: No file is listed for the language");
    return;
  }

  var chars = await get(keyboard_file);
  chars = chars.split(",");

  return chars;
}


var orthography = [];

// Make keyboard depending on selected/uploaded grammar
async function make_keyboard(language_keyboard) {

  document.getElementById("load").style.display = "none";

  orthography = await get_grammar(language_keyboard);
  document.getElementById("keyboard").style.display = "";
  var keyboard = document.getElementById("keyboard");

  for (letter in orthography) {

    var key = document.createElement("div");
    key.id = letter;
    key.innerHTML = orthography[letter];
    key.onclick = temp_keyboard;
    key.className = "kb";

    keyboard.appendChild(key);
    }

    document.getElementById("msg1").style.display = "flex";
  }


// Update input textarea upon letter button clicks (within user interface)
function temp_keyboard() {
  letter = this.id;
  wchar = orthography[letter];
  document.getElementById("in1").value = document.getElementById("in1").value + wchar;
}
