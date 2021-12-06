export class Policy{
  policyNumber:number = 0;
  policyHolderName:string = "";
  policyAmount:number = 0;
  emiAmount:number = 0;
  nominee:string = "";

  constructor(policyNumber:number, policyHolderName:string, policyAmount:number, emiAmount:number, nominee:string){
      this.policyNumber = policyNumber;
      this.policyHolderName = policyHolderName;
      this.policyAmount = policyAmount;
      this.emiAmount = emiAmount;
      this.nominee = nominee;
  }
}