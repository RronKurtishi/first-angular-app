import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = new BehaviorSubject<Note[]>([]);
  
  constructor() {
    const localStorageNotes = localStorage.getItem('notes');
    if (localStorageNotes) {
      this.notes.next(JSON.parse(localStorageNotes));
    }
    this.notes.subscribe((notesArray: Note[]) => {
      const notesString = JSON.stringify(notesArray);
      localStorage.setItem('notes', notesString);
    });
  }

  createNote(newNote: Note) {
    this.notes
    .pipe(take(1))
    .subscribe((notesArray: Note[]) => {
      notesArray.unshift(newNote);
      this.notes.next(notesArray);
    });
  }

  getNotes(): Observable<Note[]> {
    return this.notes;
  }

  deleteNote(noteId: number) {
    this.notes
    .pipe(take(1))
    .subscribe((notesArray: Note[]) => {
      notesArray.splice(noteId, 1);
      this.notes.next(notesArray);
    });
  }
}
