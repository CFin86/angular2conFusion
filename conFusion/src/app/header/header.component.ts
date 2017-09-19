import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MdDialog ) { }

  ngOnInit() {
  }
  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '30rem', height: '20rem'});
  }

}
