let books;
let currentUser;

// function fetchBooks(){
//    fetch("http://localhost:3000/books").then((data)=>data.json()).then((data)=>{
//     books=data;
//    });
// }
// console.log(books)

// currentUser = null ||localhost;

// console.log(currentUser);

// document?.getElementById("loginForm")?.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const email = document.getElementById("inputEmail").value;
//     const password = document.getElementById("inputPassword").value;
//     fetch(`http://localhost:3000/user?email=${email}`)
//       .then((response) => response.json())
//       .then((data) => {
//         let user = data[0];
//         showerror = document.getElementsByClassName("loginerror")[0];
//         if (!user) {
//           showerror.innerText = "please signup the users";
//         } else if (password != user?.password) {
//           showerror.innerText = "password dont match";
//         } else {
//           currentUser = user;
//         }

//         setTimeout(() => {
//           showerror.innerText = "";
//         }, 2000);

//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   });



document?.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const fullname = document.getElementById("signupFullName").value;
    const username = document.getElementById("signupUserName").value;
    const password = document.getElementById("signupPassword").value;


    fetch(`http://localhost:3000/user?email=${email}`)
      .then((response) => response.json())
      .then((data) => {
        let user = data[0];
        showerror = document.getElementsByClassName("signuperror")[0];
        if (user) {
          showerror.innerText = "User already exists";
        } else {
          let user ={
            "name":fullname,
            "userName":username,
            "email":email,
            "profileImage":"/xyz",
            "password":password,
            "favourites":[]
          }

          fetch('http://localhost:3000/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
          })
          .catch(error => {
            console.error('Error:', error);
          });
        
        }

        setTimeout(() => {
          showerror.innerText = "";
        }, 2000);

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });









//isUser()




  // function isUser(){
// let navButton = document.getElementById( "navButton" );

// if(!currentUser){

//   navButton.innerHtml=`
//   <button type="button">  button1 </button>
//   <button type="button"> button2</button>
//   `

// }else{

//   navButton.innerHtml=`
//   <a href="/userProfile" class="flex flex-row ">
//   <img class="imageRound" src=${currentUser.profileImage} />
//   <p>${currentUser.userName}</p>
//   </a>
//   `
// }
// }




function addToFavourit(bookIndex){

let audioBook = books[bookIndex];

  if(!currentUser?.favourite?.includes(audioBook)){
    currentUser.favourite.push(audioBook);
  }

}



function changePassword(newPassword) {
let olPassword = prompt("Enter your old password");
if(oldPassword === currentUser.password){
  currentUser.password = newPassword;
}else{
  console.error("Old password is not correct");
}
}



// function addRating(bookId, rating){
// let book = books.filter((book)=>book.bookId === bookId);
// let bookrating = book.ratings.filter((rating)=>rating.name === currentUser.userName) ;
// if(!bookrating){
//   book.ratings.push({
//     name:currentUser.userName,
//     rating:rating
//   })
// }else{
//   let index = book.ratings.indexOf(bookrating);
//   bookrating.rating = rating;
//   book.ratings[index] = bookrating;

// }
// }



// function search(toSearch){

// let searchResult = books.filter((book)=>book.bookName.includes(toSearch)||book.author.includes(toSearch));

// }
