import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BehaviorSubject, } from 'rxjs';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  notesService = inject(NotesService);

  ngOnInit(): void {
    this.notesService.getNotes()
      .subscribe((notes: Note[]) => { 
        console.log(notes);
      })
  }
}
