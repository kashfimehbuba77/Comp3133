import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `<h2>{{ getTitle() }} - {{ getCurrentDate() }}</h2>`
})
export class StudentsComponent {
  title = 'Welcome to the Students Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}