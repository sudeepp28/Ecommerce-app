export interface emiDataInterface{
    
        totalAmount:number;
        downPayment:number;
        interestRate:number;
        tenureYears:number;
      
}
export interface emiResults{
        month:number,
        emi: string,
        interest: string,
        principal:string,
        balance: string
        
}