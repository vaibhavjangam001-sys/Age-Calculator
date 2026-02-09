let checkBtn = document.querySelector("#check-Btn1");

document.querySelector("#Invalid-btn-ok").addEventListener("click",() =>{
    document.querySelector("#Invalid-box").style.visibility = "hidden";
})

checkBtn.addEventListener("click",()=>{

    let fromDateVal = document.querySelector("#From-date").value ;
    let toDateVal = document.querySelector("#To-date").value;

    if(!fromDateVal || !toDateVal){
        document.querySelector("#Invalid-box").style.visibility = "visible";
        return;
    }

    
    let FromDate = new Date(fromDateVal);
    let ToDate = new Date(toDateVal);

    if(FromDate > ToDate){
        document.querySelector("#Invalid-box").style.visibility = "visible";
        return;
    }

    let resultDay = ToDate.getDate() - FromDate.getDate();
    let resultMonth = ToDate.getMonth() - FromDate.getMonth();
    let resultYear = ToDate.getFullYear() - FromDate.getFullYear();

    if(resultDay < 0){
        resultMonth--;
        let prevMonthDays = new Date(
            ToDate.getFullYear(),
            ToDate.getMonth(),
            0
        ).getDate();

        resultDay += prevMonthDays;
    }

    if(resultMonth < 0){
        resultYear--;
        resultMonth += 12 ;
    }

    document.querySelector("#Result-year").innerHTML = resultYear;
    document.querySelector("#Result-Months").innerHTML = resultMonth;
    document.querySelector("#Result-day").innerHTML = resultDay ;
})