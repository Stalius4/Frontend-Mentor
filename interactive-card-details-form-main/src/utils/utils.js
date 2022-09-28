export const createUser = async (cardHolder, cardNumber, expMM, expYY, CVC, setDbError, dbError) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}/user/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            cardHolder: cardHolder,
            cardNumber: cardNumber,
            expMM: expMM,
            expYY: expYY,
            CVC: CVC,
        }),
      });
      const data = await res.json();
      console.log(data)
      if(data.error.keyValue.card_holder){
setDbError({ card_holder:data.error.keyValue.card_holder})
console.log(dbError,"dberror")
}else if (!data.error.keyValue){
    setDbError({ card_holder:""})
}
    
      
    //   setter(data.newUser.username);
    } catch (error) {
      console.log(error);
  console.log(error.keyValue,"keyValue")
        if(error.keyValue.card_holder){
            console.log("labas")
setDbError({ card_holder:error.keyValue.card_holder})
console.log(dbError,"dberror")
    }
  };}

//   if (data.error.keyPattern.username ===1) { 
//     //if duplicate user exist
//     setDuplicateUser(false);
//     console.log("username already exist")
//     // console.log(data.error.keyPattern.username)
//   }else if((data.error.keyPattern.email ===1)){
//     setDuplicateEmail(false)
//     console.log("email already exists")

//   }
//   // console.log("uknown")