import { Gender } from "./gender";

export interface Avatar {
  gender: Gender;
  index?: number;
  src?: string;
  alt?: string;
}
