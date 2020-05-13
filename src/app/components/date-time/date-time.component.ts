import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.less']
})
export class DateTimeComponent implements OnInit {
  private date = new Date();
  public hrs: any;
  public mins: string;
  public secs: string;
  public currUTCDate: any;
  public currUTCTime: any;
  public unixUTC: any;

  

  constructor() {
    

   }

  ngOnInit() {
    setInterval(() => {
      const date = new Date;
      this.showUtcTime(date);
      this.showLocalTime(date);
    }, 1000);

  }

  showUtcTime (date: Date) {
    
    const currUTCDate = date.toUTCString();
    const hrs = date.getHours();
    this.hrs = this.hrs < 10 ? 0 + this.hrs : this.hrs;
    const min = date.getMinutes();
    this.mins = min < 10 ? '0' + min : min.toString();
    const sec = date.getSeconds();
    this.secs = sec < 10 ? '0' + sec : sec.toString();

    
    this.currUTCDate = currUTCDate.toString();
    this.unixUTC = Math.floor(Date.now() / 1000);
    this.currUTCTime = hrs + ':' + this.mins + ':' + this.secs;    

  }

  showLocalTime (date) {}


}
