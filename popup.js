const noteInput = document.getElementById("note");
const saveButton = document.getElementById("save");
const savedNote = document.getElementById("saved-note");

// Get the saved note from storage when the popup is opened
getFromStorage(function(note) {
  savedNote.innerText = note;
});

// Save the note to storage when the save button is clicked
saveButton.addEventListener("click", function() {
  const note = noteInput.value;
  saveToStorage(note, function() {
    savedNote.innerText = note;
  });
});

function saveToStorage(note, callback) {
  chrome.storage.sync.set({note: note}, function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("Note saved");
    }
    if (callback) {
      callback();
    }
  });
}

function getFromStorage(callback) {
  chrome.storage.sync.get("note", function(result) {
    const note = result.note || "";
    callback(note);
  });
}
