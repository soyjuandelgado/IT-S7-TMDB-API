import { Component, inject} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule} from '@angular/router';
import { UserService } from './shared/user-service';
@Component({
  selector: 'app-root',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'IT-S7-TMDB-API';
  private userServ = inject(UserService);
  loggedIn = this.userServ.isLoggedIn;
}

