import { Component, Inject } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-addfriend',
  standalone: true,
  imports: [MatDialogModule,MatCardModule,MatFormFieldModule , ReactiveFormsModule ],
  templateUrl: './addfriend.component.html',
  styleUrl: './addfriend.component.scss'
})
export class AddfriendComponent {
  'addFriendForm': FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddfriendComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
  ) {
    this.addFriendForm = this.fb.group({
      friendName : ['', Validators.required],
      friendId: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  AddFriend() {
    if (this.addFriendForm.valid) {
      this.dialogRef.close(this.addFriendForm.value);
    }
  }
}
