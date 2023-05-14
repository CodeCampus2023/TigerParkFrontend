import {Component, OnInit} from '@angular/core';
import {PayoutRequest} from "../../entities/payout-request";
import {HttpClient} from "@angular/common/http";
import {Partner} from "../../entities/partner";

@Component({
  selector: 'app-payout-request',
  templateUrl: './payout-request.component.html',
  styleUrls: ['./payout-request.component.css']
})
export class PayoutRequestComponent implements OnInit{

  public partnerTest = new Partner("RDFGHJKLLKJHGFDFGHUJKL","Вадим Данилекно");
  public example:PayoutRequest={
    id:"CHINCHANCHON",
    partner:this.partnerTest,
    payoutAmount:3000,
    createdAt:new Date()
  };
  public payoutRequestList = new Array<PayoutRequest>(20).fill(this.example);
  constructor() {

  }

  ngOnInit() {


  }
}
