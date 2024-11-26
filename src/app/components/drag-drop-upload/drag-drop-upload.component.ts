import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-drop-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drag-drop-upload.component.html',
  styleUrl: './drag-drop-upload.component.css'
})
export class DragDropUploadComponent {
  imageUrls: string[] = []

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files) {
      this.addFiles(event.dataTransfer.files);
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.addFiles(input.files);
    }
  }

  addFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {

      if (files[i].type.startsWith('image/')) {
        const imageUrl = URL.createObjectURL(files[i])
        this.imageUrls.push(imageUrl)
      }
    }
  }
}
