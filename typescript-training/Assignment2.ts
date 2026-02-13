//Operators

//1.credit score
let creditScore:number = 700;
if(creditScore >750)
{
    console.log("Loan is approved");}
 else if( creditScore >= 650 && creditScore <=750)
    {console.log("Additional checks are performed")}
    else{creditScore<650
        {
            console.log("Loan is denied");}
        }

2. //Income
let customerIncome:number = 42000;
if(
creditScore>=650 && creditScore<=750 && customerIncome >= 50000)
    {
   console.log("Loan is considered");
}
else
{
    console.log("Loan is not considered");
}

// 3 Employment status
let employeStatus:string =(customerIncome >= 50000)? "employed " :"unemployed" ;
console.log(employeStatus);
if(employeStatus == "unemployed")
console.log("loan is denied")

// Debt to Income Ratio

let isemployed:boolean = true;
let debitRatio:number = 40.5;

if(isemployed)
{
    if(debitRatio > 30)
        {
        console.log("Debit ratio is accepted");
        }
        else 
            {
            console.log("Debit ratio is not accepted");
            }
        }
        else
        {
            console.log("Employee is unemployed, debit is not performed");
        }

        if(debitRatio < 40)
        {
            console.log("loan is approved");
        }
        if(debitRatio >= 40)
        {
            console.log("loan is denied");
        }

    // Create the common function 
    function isEligibleForLoan
    (customerName:string,creditScore:number,customerIncome:number,
        isemployed:boolean, debitRatio:number): void {
            if(isemployed && creditScore > 750 && customerIncome >= 55000 && debitRatio >=35.0)
            {
                console.log('eligible for loan by'+ customerName);
            }
            else
            {
                console.log('not eligible for loan by'+ customerName);
            }  
        }
isEligibleForLoan("John doe",800,60000,true,40.0);
    
         

        
    







         
    


