
function submitForm() {
    let userName = document.getElementById("text").value;
    let userEmail = document.getElementById("email").value;

    console.log(userName);
    console.log(userEmail);
    
    let textItem = document.getElementById("text-item");
    let textItemTwo = document.getElementById("text-item-two");
    
    textItem.innerText = userName;
    textItemTwo.innerText = userEmail;
}