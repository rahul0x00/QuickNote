chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.note) {
    localStorage.setItem('quick-note', request.note);
    sendResponse({message: 'Note saved.'});
    console.log('Received note:', request.note);
  }
});

