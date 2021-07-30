import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  file?: File;
  loading: boolean = false;
  count: number = 0;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    this.loading = !this.loading;
    if (this.file) {
      this.appService.uploadFile(this.file).subscribe(
        (data) => {
          this.count = data as number;
          this.loading = false;
        },
        (error) => console.error(error)
      );
    }
  }
}
