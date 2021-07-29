import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
  public count: number = 0;

  public countForm: FormGroup = new FormGroup({
    text: new FormControl(null, [
      Validators.required,
      this.noWhitespaceValidator,
    ]),
  });

  constructor(private appService: AppService) {}

  get text() {
    return this.countForm.get('text');
  }

  ngOnInit(): void {}

  noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { whitespace: true };
  }

  resetForm() {
    this.countForm.reset();
    this.count = 0;
  }

  onSubmit() {
    if (this.countForm.valid) {
      this.appService.countWords(this.text?.value).subscribe(
        (data) => (this.count = data as number),
        (error) => console.error(error)
      );
    }
  }
}
