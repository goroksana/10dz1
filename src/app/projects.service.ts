import { Injectable } from '@angular/core';
import { PROJECTS } from './mock-projects';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  getProjects(): Project[] {
    return PROJECTS;
  }
}
