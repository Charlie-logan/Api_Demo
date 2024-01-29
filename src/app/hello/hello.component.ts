import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  public univList:any=[];
  public totalList:number=0;
  public startLink:number=1;
  public searchedData:any=[];
  constructor(private aServ:ApiService){

  }

  ngOnInit(): void {
      let data =this.aServ.getAll();
      console.log(data);
      data.subscribe((abc:any)=>{
        console.log(abc);
        this.univList=abc;
        console.log(this.univList);
        console.log(this.univList.length);
        this.totalList=this.univList.length;
      });
  }
}
