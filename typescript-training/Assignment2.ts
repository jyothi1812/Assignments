//Operators
function isEligibleForLoan(
    customerName:string,
    creditScore:number,
    customerIncome:number,
    isEmployed:boolean,
    debitToIncomeRatio:number): 
    void{

        console.log("Loan eligible status for:" +customerName);
    
//let creditScore:number = 700;
if(creditScore >750)
{
console.log("Loan is approved");
}else if( creditScore >= 650 )
    {
    
    if(customerIncome >= 50000)
    {
        if(isEmployed)
            {
                if(debitToIncomeRatio <40.0)
                {
                    console.log("Loan approved")
                }
                else
                {
                    console.log(" Loan denied: debit to ratio is too high");
                }
            }
            else
            {
                console.log("loan denied: customer is not employed")
            }
        }
        
            else
                {
                console.log("loan denied: Income is Lessthan required");
                }
            }
            else
                {
                console.log("Loan denied: credit score is too low");
            }
        }
    
    
    
         isEligibleForLoan
         (
            "john doe",
            720,
            55000.0,
            true,
            45.0
         );
         export{};
        
    
    







         
    


