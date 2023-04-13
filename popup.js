// Get the note from local storage and display it in the textarea
function getNoteFromStorage() {
  chrome.storage.sync.get(['note'], function(result) {
    var note = result.note;
    if (note != undefined) {
      document.getElementById('note').value = note;
    }
  });
}

// Save the note to local storage when the save button is clicked
document.getElementById('save').addEventListener('click', function() {
  var note = document.getElementById('note').value;
  chrome.storage.sync.set({'note': note}, function() {
    console.log('Note saved:', note);
  });
});

// Update the note in the textarea whenever it is changed
document.getElementById('note').addEventListener('input', function() {
  var note = document.getElementById('note').value;
  chrome.storage.sync.set({'note': note}, function() {
    console.log('Note updated:', note);
  });
});

// Call getNoteFromStorage to load the note on page load
getNoteFromStorage();
