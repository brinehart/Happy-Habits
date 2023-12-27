export interface Activity {
  id: string;
  name: string;
  description: string;
  type: ActivityType;
  points: number;
  lengthToCompleteInSeconds?: number;
  createDate: Date;
  updateDate: Date;
  deleteDate?: Date | undefined;
}

export type ActivityType = 'reward' | 'consequence';
