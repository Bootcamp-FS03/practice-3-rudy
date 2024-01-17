import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { SessionUser } from 'src/app/types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileData: SessionUser  | undefined;

  constructor(private jwtService: JwtService) {}

  ngOnInit(): void {
    this.profileData = this.jwtService.getSessionUser();
  }
}
