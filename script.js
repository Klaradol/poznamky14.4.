document.addEventListener('DOMContentLoaded', function () {
    const noteForm = document.getElementById('note-form');
    const noteInput = document.getElementById('note-input');
    const noteList = document.getElementById('note-list');
  
    loadNotes();
  
    noteForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const noteText = noteInput.value.trim();
  
      if (noteText !== '') {
        addNoteToLocalStorage(noteText);
        noteInput.value = '';
        loadNotes();
      }
    });
  
    function addNoteToLocalStorage(noteText) {
      const notes = getNotesFromLocalStorage();
      notes.push(noteText);
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  
    function getNotesFromLocalStorage() {
      return JSON.parse(localStorage.getItem('notes')) || [];
    }
  
    function loadNotes() {
      const notes = getNotesFromLocalStorage();
      noteList.innerHTML = '';
      notes.forEach(function (note, index) {
        const li = document.createElement('li');
        li.textContent = note;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Smazat';
        deleteButton.addEventListener('click', function () {
          deleteNoteFromLocalStorage(index);
          loadNotes();
        });
        li.appendChild(deleteButton);
        noteList.appendChild(li);
      });
    }
    
  const upravitButton = document.createElement('button');
  upravitButton.textContent = 'Upravit';
  upravitButton.addEventListener('click', () => {
    const novyText = prompt('Zadejte nový text poznámky:', text);
    if (novyText !== null) {
      textElement.textContent = novyText;
      aktualizovatPoznamku(text, novyText);
    }
  });
  poznamkaElement.appendChild(upravitButton);
  
    function deleteNoteFromLocalStorage(index) {
      const notes = getNotesFromLocalStorage();
      notes.splice(index, 1);
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  });
  function pridejPoznamku(text) {
    const poznamkyDiv = document.getElementById('poznamky');
    const poznamky = nacistPoznamky();
  
    const novaPoznamka = {
      text: text,
      cas: new Date() 
    };
   }
  
  