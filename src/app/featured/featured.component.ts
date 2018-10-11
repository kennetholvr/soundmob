import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { DjlistService } from "../services/djlist.service";

@Component({
  selector: "app-posts",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.css"]
})
export class FeaturedComponent implements OnInit {
  data = [];
  firstName = '';
  lastName = '';
  show: Boolean;

  constructor(private http: HttpClient, private djList: DjlistService) {
    
   }
   
   
   ngOnInit() {
     this.djList.liveDjReq()

     this.djList.liveDj()
       .subscribe(data => console.log(data));
  }
}



