//conditional statements
// let age = prompt("What is your age?");

// if((age > 11) || (age < 33)){
// console.log("You are eligible for cricket.");
// }

// else{
//     console.log("You are not eligible for cricket.")
// }

// let age2 = prompt("What is your age?");

// if((age2 > 15) && (age2 < 30)){
// console.log("You are eligible for football.");
// }

// else{
//     console.log("You are not eligible for football.")
// }

//message box

let message=prompt("Welcome to my website. Any Questions? \n 1- What do you offer? Type:(Offer or 1) \n 2- What is the fee? Type:(Fee or 2) \n 3- For which country? Type:(Country or 3) \n 4- What is your website name? Type:(Website or 4) \n 5- Any other offer? Type:(Other offer or 5)")

if ((message == "Offer") || (message == "offer" ) || (message == 1) )

{
    document.write('Webdevelopment / Javascript / Making Presentation / Logo Making are the offers.').innerHTML=offer;
    
}

else if ((message == "Fee") || (message == "fee") || (message == 2) ){
    document.write('Acording to the work done.').innerHTML=offer;
}

else if ((message == "Country") || (message == "country") || (message == 3) ){
    document.write('Pakistan.').innerHTML=offer;
}

else if ((message == "Website") || (message == "website") || (message == 4) || (message == "website name") || (message == "Website name") || (message == "Website Name")){
    document.write('hamza-ali-qureshi.web.app').innerHTML=offer;
}

else if ((message == "Other offer") || (message == "other offer") || (message == "Other") || (message == 5)  || (message == "other") || (message == "Other Offer") ){
    document.write('Not yet but stay tuned for updates. :)').innerHTML=offer;
}

else{document.write('Sorry, could not find your answer.').innerHTML=offer;}