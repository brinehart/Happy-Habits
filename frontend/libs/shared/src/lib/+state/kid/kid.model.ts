import { Avatar } from "@hh/kids";

export interface Kid {
  id: string;
  name: string;
  birthday: Date;
  avatar?: Avatar;
}
