import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropUploadComponent } from "./components/drag-drop-upload/drag-drop-upload.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DragDropUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drag-drop-upload';
}
