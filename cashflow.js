function computeCashflow(){

    // get the salary input and pass it to the HTML id="salary_display"
    var salary = parseFloat(document.getElementById("salary").value);
    document.getElementById("salary_display").innerHTML = "Salary: " + salary;

    // get the dividend input
    var dividend_1 = parseFloat(document.getElementById("dividend_1").value);
    var dividend_2 = parseFloat(document.getElementById("dividend_2").value);

    // get the business input
    var business_1 = parseFloat(document.getElementById("business_1").value);
    var business_2 = parseFloat(document.getElementById("business_2").value);
    var business_3 = parseFloat(document.getElementById("business_3").value);
    var business_4 = parseFloat(document.getElementById("business_4").value);
    var business_5 = parseFloat(document.getElementById("business_5").value);
    var business_6 = parseFloat(document.getElementById("business_6").value);
    var business_7 = parseFloat(document.getElementById("business_7").value);
    var business_8 = parseFloat(document.getElementById("business_8").value);

    // add the dividends and budinesses into passive income and pass it to the HTML id="passive_income"
    var passiveIncome = dividend_1 + dividend_2 + business_1 + business_2 + business_3 + business_4 + business_5 + business_6 + business_7 + business_8;
    document.getElementById("passive_income").innerHTML = "Passive Income: " + passiveIncome;

    // add the salary and passiveIncome into totalIncome and pass it to the HTML id="total_income"
    var totalIncome = salary + passiveIncome;
    document.getElementById("total_income").innerHTML = "Total Income: " + totalIncome;

    // get the expenses
    var taxes = parseFloat(document.getElementById("taxes").value);
    var home_mortgage_payment = parseFloat(document.getElementById("home_mortgage_payment").value);
    var school_loan_payment = parseFloat(document.getElementById("school_loan_payment").value);
    var car_loan_payment = parseFloat(document.getElementById("car_loan_payment").value);
    var credit_card_payment = parseFloat(document.getElementById("credit_card_payment").value);
    var other_expenses = parseFloat(document.getElementById("other_expenses").value);
    var bank_loan_payment = parseFloat(document.getElementById("bank_loan_payment").value);
    var child_no = parseFloat(document.getElementById("child_no").value);
    var perchild_expense = parseFloat(document.getElementById("perchild_expense").value);

    // calculate the total expenses and pass it to the HTML id="total_expenses"
    var totalExpenses = taxes + home_mortgage_payment + school_loan_payment + car_loan_payment + credit_card_payment + other_expenses + bank_loan_payment + (child_no * perchild_expense);
    document.getElementById("total_expenses").innerHTML = "Total Expenses: " + totalExpenses;

    // calculate the monthly cashflow and pass it to the HTML id="monthly_cashflow"
    var monthlyCashflow = totalIncome - totalExpenses;
    document.getElementById("monthly_cashflow").innerHTML = "Monthly Cashflow: " + monthlyCashflow;

    // get the liabilities 
    var l1_home_mortgage = parseFloat(document.getElementById("l1_home_mortgage").value); 
    var l2_school_loan = parseFloat(document.getElementById("l2_school_loan").value); 
    var l3_car_loan = parseFloat(document.getElementById("l3_car_loan").value); 
    var l4_credit_card_debt = parseFloat(document.getElementById("l4_credit_card_debt").value); 
    var l5_bank_loan = parseFloat(document.getElementById("l5_bank_loan").value); 

    // configure the paycheck button
    var button = document.getElementById("paycheck");
    button.onclick = function (){
        if (l1_home_mortgage > home_mortgage_payment){
            l1_home_mortgage = l1_home_mortgage - home_mortgage_payment;
            document.getElementById("l1_home_mortgage").value = l1_home_mortgage;
        }
        else if (l1_home_mortgage == home_mortgage_payment){
            l1_home_mortgage = l1_home_mortgage - home_mortgage_payment;
            home_mortgage_payment = 0;

            totalExpenses = taxes + home_mortgage_payment + school_loan_payment + car_loan_payment + credit_card_payment + other_expenses + bank_loan_payment + (child_no * perchild_expense);
            document.getElementById("total_expenses").innerHTML = "Total Expenses: " + totalExpenses;


            monthlyCashflow = totalIncome - totalExpenses;
            document.getElementById("monthly_cashflow").innerHTML = "Monthly Cashflow: " + monthlyCashflow;
            

            document.getElementById("l1_home_mortgage").value = l1_home_mortgage;
            document.getElementById("home_mortgage_payment").value = home_mortgage_payment;
        }
        else{
            home_mortgage_payment = l1_home_mortgage;
            l1_home_mortgage = l1_home_mortgage - home_mortgage_payment;
            home_mortgage_payment = 0;

            totalExpenses = taxes + home_mortgage_payment + school_loan_payment + car_loan_payment + credit_card_payment + other_expenses + bank_loan_payment + (child_no * perchild_expense);
            document.getElementById("total_expenses").innerHTML = "Total Expenses: " + totalExpenses;


            monthlyCashflow = totalIncome - totalExpenses;
            document.getElementById("monthly_cashflow").innerHTML = "Monthly Cashflow: " + monthlyCashflow;
            

            document.getElementById("l1_home_mortgage").value = l1_home_mortgage;
            document.getElementById("home_mortgage_payment").value = home_mortgage_payment;
        }
    }

   
}