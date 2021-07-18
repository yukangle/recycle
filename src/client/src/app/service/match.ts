export class PlusMinus {
  plus!: [string];
  minus!: [string];
}

export class Match {
  _id!: string;
  name!: string;
  manufacturer!: string;
  model!: string;
  issue_time!: string;
  score!: number;
  plus_and_mins!: PlusMinus;
}
