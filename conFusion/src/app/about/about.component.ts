import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';

import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  leader: Leader[];
  selectedLeader: Leader;

  constructor(private LeaderService: LeaderService) { }

  ngOnInit() {
    this.LeaderService.getLeaders().then(leader => this.leader = leader) ;
  }

}
