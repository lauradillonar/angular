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
        img: "https://i.ytimg.com/vi/7n3dSJ7Ipy8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7CzELM4EKBhlOPIJlOpUuMZjBtg",
        url: "https://youtube.com/playlist?list=PLHzYYFDH_2yP6gkINoZR1EZ4MrB5EAgK6"
      },
      {
        title: "Video 2",
        subtitle: "Subtitle video 2",
        img: "https://i.ytimg.com/vi/VjCqYUBc_p8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAH-46MT-V5FIGW7ILTDc8nnp0nVw",
        url: "https://www.youtube.com/watch?v=VjCqYUBc_p8&list=PLHzYYFDH_2yP6gkINoZR1EZ4MrB5EAgK6&index=5"
      },
      {
        title: "Video 3",
        subtitle: "Subtitle video 3",
        img: "https://i.ytimg.com/vi/zLsiECmrg-o/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDQCTMkIedrNCFx16wkHzrLJIJwaQ",
        url: "https://www.youtube.com/watch?v=zLsiECmrg-o&list=PLHzYYFDH_2yP6gkINoZR1EZ4MrB5EAgK6&index=6"
      }
    ]
  }

}
