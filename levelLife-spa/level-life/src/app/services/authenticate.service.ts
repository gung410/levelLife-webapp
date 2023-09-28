import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserLoginInfoDto } from '../models/loginModelDTO';
import { EndpointsConfig } from '../config/endpoins.config';
@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  constructor(private http: HttpClient,) {}
  login(sLoginDto: UserLoginInfoDto) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post("http://localhost:5000/api/auth/login",
      JSON.stringify({ UserName: sLoginDto.UserName, PassWord: sLoginDto.PassWord})
      ,{headers: headers} );
  }
}
