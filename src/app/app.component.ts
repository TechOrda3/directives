import { Component } from '@angular/core';
import {Role} from './user';

type ResourceType = 'community' | 'development' | 'education'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type!: ResourceType;
  isToggled = true;
  arr = [1, 2, 3, 4];
  role = Role;
}
