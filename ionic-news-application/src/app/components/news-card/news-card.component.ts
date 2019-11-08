import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/interfaces/interfaces";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  @Input() public new: Article;
  @Input() public index: number;
  constructor() {}

  ngOnInit() {}
}
