import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular001';
  public listaVideos:Array<any> = []

  ngOnInit(): void {
    this.listaVideos = [
      {
        title: "Video 1",
        subtitle: "Subtitle video 1",
        img: "https://i.ytimg.com/an_webp/cJyM2nud6Mw/mqdefault_6s.webp?du=3000&sqp=CJjmz48G&rs=AOn4CLB0rPdMeTn7Odit5i40sueeUC1EWQ"
      },
      {
        title: "Video 2",
        subtitle: "Subtitle video 2",
        img: "https://i.ytimg.com/an_webp/wMSE068pztU/mqdefault_6s.webp?du=3000&sqp=CM_tz48G&rs=AOn4CLDf6dLamBVSNN48r1K_nI3h0_YiyA"
      },
      {
        title: "Video 3",
        subtitle: "Subtitle video 3",
        img: "https://i.ytimg.com/an_webp/f2Wtztgs4ic/mqdefault_6s.webp?du=3000&sqp=CNH1z48G&rs=AOn4CLA5XX4baTTnfHyH3VC_kIECvnmHTg"
      }
    ]
  }
}
