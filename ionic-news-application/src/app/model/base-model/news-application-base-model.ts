import { Model } from "lgx-axios-dev-tools";

export class NewsApplicationBaseModel extends Model {
  baseUrl() {
    return "https://newsapi.org/v2";
  }
}
