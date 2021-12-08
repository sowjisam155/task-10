const billAmount=document.querySelector("#bill-Amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click",function validateBillAndCashAmount(){
  hideMessage();
  message.style.display="none";
  if (billAmount.value > 0) { 
      if (cashGiven.value >= billAmount.value) { 
          const amountToBeReturned = cashGiven.value - billAmount.value;
          calculateChange(amountToBeReturned);
      } else {
            ShowMessage("do you want to wash all plates?");
      }
  } else {
      ShowMessage("Invailed Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i <availableNotes.length; i++){
        const numberofNotes= Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText=numberofNotes;
        
    }
}
function hideMessage() {
    message.style.display = "none";
}

function ShowMessage(msg){
    message.style.display= "block";
    message.innerText = msg;
}