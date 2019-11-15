import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/interfaces/interfaces";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  @Input() public news: Article;
  @Input() public index: number;
  constructor(private iab: InAppBrowser) {}

  ngOnInit() {}

  public openNews() {
    const browser = this.iab.create(this.news.url, "_system");
  }
}
