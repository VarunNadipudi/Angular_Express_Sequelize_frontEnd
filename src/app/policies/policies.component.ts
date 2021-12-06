import { Component, OnInit } from '@angular/core';
import { Policy } from '../Policy';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor(private RestServiceObj: RestService){}

  ngOnInit(){
    this.readData();
  }

  arrPolicies: Policy[] = [];
  bAddPolicy = true;
  bSavePolicy = false;
  bUpdatePolicy = false;

  id=0;
  policyHolderName="";
  policyAmount=0;
  emiAmount=0;
  nomineeName="";

  //converts string to number
  parseInt(val:string){
    let value = + val;
    console.log(value);
    return value;
  }

  //add policy
  add(){
    this.bAddPolicy = false;
    this.bSavePolicy = true;
    this.bUpdatePolicy = false;
  }

  readData(){
    this.RestServiceObj.getAllPolicies().subscribe(
      (data) =>{
        console.log(data);
        this.arrPolicies = data;
      },

      (error) =>{
        console.log(error);  
      }
    );
  }

  savePolicyBtn(id:number, name:string, amount:number, emi:number, nominee:string){

    this.bSavePolicy = false;
    this.bAddPolicy = true;

    if(id!=0 && name!="" && amount!=0 && emi!=0 && nominee!=""){
      let temp = new Policy(id, name, amount, emi, nominee);
      this.RestServiceObj.insertPolicy(temp).subscribe(
        (data) =>{
          // alert(data);
          this.readData();
        },

        (error) =>{
          console.log(error);
        }
      );
    }
  }

  deletePolicyBtn(id:number){
    console.log("clicked on delete button");

    this.RestServiceObj.deletePolicy(id.toString()).subscribe(
      (data) =>{
        this.readData();
        alert(data);
      },

      (error) =>{
        console.log(error);
      }
    );
  }


  //onclick of the edit button
  edit(id:number){
    this.bAddPolicy = false;
    this.bSavePolicy = false;
    this.bUpdatePolicy = true;

    let temp = new Policy(0,"",0,0,"");

    this.RestServiceObj.getPolicyById(id.toString()).subscribe(
      (data) =>{
        temp = data;
        this.id = temp.policyNumber;
        this.policyHolderName = temp.policyHolderName;
        this.policyAmount = temp.policyAmount;
        this.emiAmount = temp.emiAmount;
        this.nomineeName = temp.nominee;
      },

      (error) =>{
        console.log(error);
      }
    );
  }

  updateSaveBtn(){
    this.bAddPolicy = true;
    this.bSavePolicy = false;
    this.bUpdatePolicy = false;

    let temp = new Policy(this.id, this.policyHolderName, this.policyAmount, this.emiAmount, this.nomineeName);

    this.RestServiceObj.updatePolicy(temp).subscribe(
      (data) =>{
        this.readData();
        alert(data);
      },

      (error) =>{
        console.log(error);
      }
    );
  }

}
