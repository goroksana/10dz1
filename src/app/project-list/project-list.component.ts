import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { CommonModule } from '@angular/common'; // Імплементуйте CommonModule для директив
import { Project } from '../project.model'; // Імпортуйте інтерфейс Project

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule], // Додайте CommonModule для директив, як *ngFor
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = []; // Використовуйте тип Project
  filteredProjects: Project[] = []; // Використовуйте тип Project
  categories: string[] = [];
  selectedCategory: string = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    this.filteredProjects = this.projects;
    this.categories = [...new Set(this.projects.map(p => p.category))];
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filteredProjects = this.projects.filter(p => p.category === category);
  }
}

