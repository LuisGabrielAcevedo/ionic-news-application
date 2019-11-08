import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsCardComponent } from "./news-card/news-card.component";
import { NewsComponent } from "./news/news.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [NewsCardComponent, NewsComponent],
  imports: [CommonModule, IonicModule],
  exports: [NewsCardComponent, NewsComponent]
})
export class ComponentsModule {}
