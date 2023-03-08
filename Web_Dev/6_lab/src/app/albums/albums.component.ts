import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  data?: any[];

  constructor(private myService: AlbumsService) { }
  ngOnInit() {
    this.myService.getData().subscribe((data) => {
      this.data = data;
    });
  }
  delete(a?: object){
    var filtered = this.data?.filter(function(ele){
      return ele != a;
    })
    this.data = filtered;
  }


}