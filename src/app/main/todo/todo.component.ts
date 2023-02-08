import { Component, OnInit } from '@angular/core';
import { todoDTO } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoservice : TodoService)
  { }

   todoLists : todoDTO[] = [];

  ngOnInit(): void {
     this.getall();
  }

  getall(){
    this.todoservice.getall()
    .subscribe((result) => {
       this.todoLists = result;
    })
  }

}
