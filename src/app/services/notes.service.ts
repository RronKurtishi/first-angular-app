import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes = new BehaviorSubject<Note[]>([]);
  
  constructor() {
    this.notes.subscribe((notesArray: Note[]) => {
      console.log(notesArray);
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
    // delete note
  }
}
