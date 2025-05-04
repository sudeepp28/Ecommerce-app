import { Injectable,  } from "@angular/core";
import {  emiDataInterface, emiResults,  } from "./app.model";

@Injectable({providedIn:'root'})

export class InvestmentService{
    emiresultsData?:emiResults[];
   

  
  
    calculateEMI(data:emiDataInterface) {
     
      const loanAmount = data.totalAmount - data.downPayment;
      const monthlyInterestRate = data.interestRate / 12 / 100;
      const months = data.tenureYears * 12;
  
      const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) /
                  (Math.pow(1 + monthlyInterestRate, months) - 1);
  
      const schedule = [];
      let balance = loanAmount;
      let totalInterestPaid=0
  
      for (let i = 1; i <= months; i++) {
        const interest = balance * monthlyInterestRate;
        const principal = emi - interest;
        balance -= principal;
        totalInterestPaid+=interest;
  
        schedule.push({
          month: i,
          emi: emi.toFixed(2),
          interest: interest.toFixed(2),
          principal: principal.toFixed(2),
          balance: balance.toFixed(2)
        });
      }
      this.emiresultsData=schedule;
      
      }
}