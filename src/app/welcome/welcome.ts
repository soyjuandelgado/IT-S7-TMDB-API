import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss'
})
export class Welcome {

}
