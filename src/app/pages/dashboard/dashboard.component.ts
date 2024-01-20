import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';
import { DashboardCardComponent } from '../../components/dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  notesService = inject(NotesService);
  allNotes: Note[] | undefined;

  ngOnInit(): void {
    this.notesService.getNotes()
      .subscribe((notes: Note[]) => { 
        this.allNotes = notes;
      });
  }
}
