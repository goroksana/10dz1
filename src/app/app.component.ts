import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component'; // Імпортуйте ProjectListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProjectListComponent], // Додайте ProjectListComponent сюди
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-projects';
}

