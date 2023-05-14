import {Partner} from "./partner";

export class PayoutRequest {
  constructor(
    public id:string,
    public partner:Partner,
    public payoutAmount:number,
    public createdAt: Date,
  ) {
  }

}
