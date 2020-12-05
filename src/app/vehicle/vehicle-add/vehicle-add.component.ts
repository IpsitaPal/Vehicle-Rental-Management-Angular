import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.css']
})
export class VehicleAddComponent implements OnInit {
public  vehicleId: number;
vehicleNumber: String;
type: String;
category: String;
description: String;
location: String;
capacity: String;
chargesPerKM: number;
fixedCharges: number;
driver: Driver;
  constructor(private ) { }

  ngOnInit(): void {
    add 
    let vehicleId={
    vehicleNumber: this.vehicleNumber,
      type: this.type ,
      category:  this.category,
      this.description = description;
      this.location = location;
      this.capacity = capacity;
      this.chargesPerKM = chargesPerKM;
      this.fixedCharges = fixedCharges;
      this.driver :null;
    }
  }

}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanApplicationService } from '../loan-application.service';
import { LoanApplications } from '../loanapplications';

export class AddLoanApplicationComponent implements OnInit {
  public loanApplication:any
    applicationDate:any
    customer:any
    loanAppliedAmount:any
    loanApprovedAmount:any
    landVerificationApproval:any
    financeVerificationApproval:any
    adminApproval:any
    status:any
  
    

  constructor( 
     private loanAppService:LoanApplicationService,
      private router:Router) { }

  ngOnInit(): void {
   
  }
  addLoanApplication(loanApp:any){
    let loanApplication={
      applicationDate:this.applicationDate,
      customer:null,
      loanAppliedAmount:this.loanAppliedAmount,
      loanApprovedAmount:this.loanApprovedAmount,
      landVerificationApproval:this.landVerificationApproval,
      financeVerificationApproval:this.financeVerificationApproval,
      adminApproval:this.adminApproval,
      status:this.status
    
    }
    

    this.loanAppService.addLoanApplication(loanApplication).subscribe((data)=>{
    this.router.navigate(['/loanApplication-list'])


    })




  }

}
