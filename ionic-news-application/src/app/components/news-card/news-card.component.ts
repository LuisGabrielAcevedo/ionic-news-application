import { Component, OnInit, Input } from "@angular/core";
import { Article } from "src/app/interfaces/interfaces";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-news-card",
  templateUrl: "./news-card.component.html",
  styleUrls: ["./news-card.component.scss"]
})
export class NewsCardComponent implements OnInit {
  @Input() public news: Article;
  @Input() public index: number;
  constructor(
    private iab: InAppBrowser,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  public openNews() {
    const browser = this.iab.create(this.news.url, "_system");
  }

  public async openMenu() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: "Compartir",
          icon: "share",
          cssClass: "action-dark",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Favorito",
          icon: "star",
          cssClass: "action-dark",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancelar",
          icon: "close",
          role: "cancel",
          cssClass: "action-dark",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
