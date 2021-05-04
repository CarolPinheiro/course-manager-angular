import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: "Aprendendo Angular Forms",
        imageUrl: "/assets/images/forms.png",
        price: 99.99,
        code: "xpt099",
        duration: 200,
        rating: 5,
        releaseDate: "December, 2, 2019"
      },
      {
        id: 2,
        name: "Aprendendo Angular HTTP",
        imageUrl: "/assets/images/http.png",
        price: 44.59,
        code: "xpt359",
        duration: 150,
        rating: 4.5,
        releaseDate: "January, 9, 2021"
      }
    ]
  }
}
