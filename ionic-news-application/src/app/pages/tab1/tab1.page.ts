import { Component, OnInit } from "@angular/core";
import { TopHeadlines } from "src/app/model/top-headlines";
import { Article } from "src/app/interfaces/interfaces";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page implements OnInit {
  public news: Article[] = [];
  constructor() {}

  ngOnInit() {
    TopHeadlines.option("country", "us")
      .option("category", "business")
      .findRx()
      .subscribe(resp => {
        this.news.push(...resp.articles);
        console.log(this.news);
      });
  }
}
