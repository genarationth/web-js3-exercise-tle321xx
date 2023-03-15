//Ex1
const calculatePaymentCost = (totalAmount) => {
    const transactionFee = 3;
    const interestFee = 0.01;
    const interestFeeAmount = totalAmount * interestFee;
    const totalCost = totalAmount + transactionFee + interestFeeAmount;
    return totalCost;
  };

const totalAmount = 1000;
const paymentCost = calculatePaymentCost(totalAmount);
console.log(paymentCost); 

//Ex2
const greetFriends = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}.`);
  };
const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  };
const greetFriendsWithAge = (name1, birthYear1, name2, birthYear2, name3, birthYear3) => {
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
  };

greetFriends('Alice', 'Bob', 'Charlie');
  
console.log(calculateAge(1990));
  
greetFriendsWithAge('Alice', 1990, 'Bob', 1985, 'Charlie', 1995);


