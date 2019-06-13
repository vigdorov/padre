class LocalStorage {
  getItem (key, json = false) {
    let localNote = localStorage.getItem(key),
        parseNote;

    if (localNote) {
      parseNote = localNote;
      if (json) {
        parseNote = JSON.parse(localNote);
      }
    } else {
      parseNote = null;
    }

    return parseNote;
  }

  setItem (key, data, json = false) {
    let note = data;

    if (json) {
      note = JSON.stringify(data);
    }

    localStorage.setItem(key, note);
  }

  removeItem (key) {
    localStorage.removeItem(key);
  }
}

export default new LocalStorage();