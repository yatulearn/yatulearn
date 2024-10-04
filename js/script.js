* {
    -webkit-tap-highlight-color:transparent;
    margin: 0;
    padding: 0;
    font-family: tahoma;
    box-sizing: border-box;
}

body {
    background-image: url(skyblue_theme.jpeg.jpg);
    animation: fadeInAnimation ease 3s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
}

@keyframes fadeInAnimation {
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
}
p {
  font-size: 18px;
}
p {
    font-size: 18px;
}


nav {
    width: 100%;
    background: transparent;
    padding: 10px;
    position: fixed;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
}

nav .main_logo {
    display: flex;
    align-items: center;
}

nav .main_logo .logo a img {
    margin-left: 30px;
}

.checkbtn {
  font-size: 30px;
  color: gray;
  line-height: 80px;
  display: none;
  cursor: pointer;
}

.checkbtn:hover {
  font-size: 35px;
  transition: 0.2s;
}

#check {
  display: none;
}
nav ul {
    width: 36%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

}

nav .btn {
    --hover-shadows: none;
    border: none;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: normal;
    border-radius: 0.7em;
    background-color: rgb(234, 35, 74);
    cursor: pointer;
    width: 8%;
    padding: 1em 2em;
    margin-right: 50px;
}

nav .btn a {
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
}

nav .btn:hover {
    color: rgb(234, 35, 74);
    background-color: #4B4B4B;
}

nav ul a {
    font-size: 20px;
    text-decoration: none;
    color: #4B4B4B;
}

nav ul a:hover {
    text-decoration: none;
    color: black;
}

.change {
    background-color: #ffffff;
    transition: 0.5s;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.347);
}

.change_btn {
    color: #4B4B4B;
}


nav li a.Courses {
    color: #F63232;
}

.dropdown1qp {
    display: inline-block;
}

.qp:hover {
    color: #121212;
}

.dropdown-content1qp {
    display: none;
    position: absolute;
    background-color: white;
    width: 430px;
    height: 350px;
    padding: 12px 16px;
    z-index: 1;
}

.dropdown1qp:hover .dropdown-content1qp {
    display: block;
}

.dropdown-content1qp h2 {
    margin: 15px;
}

.dropdown-content1qp .links {
    margin-left: 10px;
}

.dropdown-content1qp .links a {
    font-size: 1em;
    color: blue;
    margin: 5px;
}

.dropdown-content1qp .links a:hover {
    color: darkblue;
}

.text {
    margin-top: 70px;
    text-align: center;
    font-size: 2.5em;
}

.sem1 {
    margin-top: 50px;
}

.sem1 h1 {
  
    margin-left: 50px;
}

.branches {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
}

.sem1-cse {
    margin-left: 50px;
}

.sem1-cse-links {
    width: 10%;
    height: 200px;
}

.sem1-cse-links a button {
    width: 80px;
    height: 35px;
    margin: 10px;
    border-radius: 10px;
    background-color: lightslategray;
    color: #ffffff;
    border: lightslategray;
}

.sem1-cse-links a button:hover {
    background-color: #ffffff;
    color: lightslategray;
    border: #ffffff;
    transition: 0.3s;
}

#sem1 h1 {
    background-color: lightskyblue;
    width: 10%;
    text-align: center;
}

#sem2 h1 {
    background-color: lightsalmon;
    width: 10%;
    text-align: center;
}

#sem3 h1 {
    background-color: lightgreen;
    width: 10%;
    text-align: center;
}

#sem4 h1 {
    background-color: lightpink;
    width: 10%;
    text-align: center;
}

#sem5 h1 {
    background-color: yellow;
    width: 10%;
    text-align: center;
}
#sem1 button,#sem2 button,#sem3 button,#sem4 button,#sem5 button{
  width: max-content;
  font-weight: 200;
}

.dark-semester{
  color: #4b4b4b;
  border: 2px solid white;
}

.dots {
    color: transparent;
}

.border {
    border: 0.5px solid black;
}

footer {
  width: 100%;
  background-color: #121212;
}

.flex_align {
  width: 100%;
  display: flex;
  align-items: center;
}

.box1 {
  margin-top: 40px;
  width: 100%;
  letter-spacing: 0.01cm;
  display: flex;
  justify-content: space-evenly;
}


.header {
  display: flex;
  flex-direction: column;
}

.policy {
  display: flex;
  flex-direction: column;
}

.policy a:hover {
  color: #ffffff;
}

.vertical_line {
  border-left: none;
  border: 0.5px solid #4b4a4a;
  height: 180px;
  width: 0.009px;

}

.same p {
  color: #ffffff;
}

.same a {
  text-decoration: none;
  color: #d6d3d3d0;
}

.same>a:hover {
  color: #ffffff;
}

.media {
  margin-top: 60px;
}

.icon_flex {
  height: 50px;
  width: 120%;
  font-size: 21px;
  color: #d6d3d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon_flex>a>i {
  font-size: 21px;
  color: #d6d3d3;
}

.icon_flex>a>i:hover {
  font-size: 25px;
  color: #ffffff;
  transition: 0.2s;
}

.email_adress>span {
  
  color: #ffffff;
  line-height: 23px;
  letter-spacing: 0.01cm;

}

.num {
  color: #ffffff;
}

.horizontal_line {
  margin-top: 20px;
  border: 0.1px solid #4b4a4a;
  border-top: none;
  height: 0.000009px;
  width: 100%;
}

.course_flex {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.courses {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.courses p {
  margin: 5px;
  color: #ffffff;
}

.courses_link {
  margin: 5px;
  display: flex;
  justify-content: space-between;
  width: 70%;
}

.courses_link a {
  color: #d6d3d3d0;
  text-decoration: none;
}

.courses_link a:hover {
  color: #ffffff;
}

.copyright {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

}

.copyright p{
  font-size: medium;
}


#dark-mode:hover {
  color: white;
  background-color: #4B4B4B;
}
#dark-mode{
  color: white;
  background-color: rgb(234, 35, 74);
}

#doubts-btn{
  margin-left: 15vw;
}

.dark-mode {
  background-color: #121212;
  color: white;
}
.dark-mode-bttns {
  color: #eeeeee;
  border: 2px solid #4b4a4a;
}


  @media screen and (max-width:810px){
    .branches{
      display: flex;
      flex-direction: column;
    }

    .sem1-cse-links {
      height: 100px;
      display: flex;
      justify-content: space-between;
    }

    .sem1-cse h2 br{
      display: none;
    }

    .dots{
      display: none;
    }

    .text{
      text-align: start;
      margin-left: 50px;
    }
  }

  @media screen and (max-width:480px){
    #sem1 h1{
      width: 30%;
    }
    #sem2 h1{
      width: 30%;
    }
    #sem3 h1{
      width: 30%;
    }
    #sem4 h1{
      width: 30%;
    }
    #sem5 h1{
      width: 30%;
    }
  }

  @media screen and (max-width: 1400px) {

    nav .btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
  }
  
  @media screen and (max-width: 960px) {
  
    nav ul a {
      font-size: 16px;
    }
  
    nav ul {
      width: 40%;
      font-size: large;
      display: flex;
      justify-content: space-between;
    }
  
    nav .btn {
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
  
  }
  
  @media screen and (max-width: 880px){
    /* .card-client{
      width: 14rem;
      height: 20rem;
    }
  
    .user-picture{
      width: 12rem;
      height: 12rem;
    }
  
    .name-client{
      margin-top: 10px;
      font-size: 15px;
    } */
  
    .courses_link{
     display: flex;
    justify-content: space-between;
    width: 100%;
    }
  
    .same p{
      font-size: 15px;
    }
  
    .same a{
      font-size: 13.5px;
    }
  
    .email_adress>span{
      font-size: 13.5px;
    }
  
    .num{
      font-size: 15px;
    }
    .icon_flex{
      width: 100%;
    }
    .icon_flex>a>i{
      font-size: 17px;
    }
    .icon_flex>a>i:hover{
      font-size: 21px;
    }
  }
  
  @media screen and (max-width: 730px) {
    .dropdown1qp:hover .dropdown-content1qp {
      display: none;
  }

      .checkbtn {
      display: block;
      margin: 5px 0;
      line-height: 30px;
    }
  
    nav ul {
      position: fixed;
      width: 100%;
      height: 300px;
      background: #ffffff;
      top: 80px;
      left: -100%;
      display: flex;
      flex-direction: column;
    }
  
    nav ul a {
      color: #201f1f93;
    }
  
    nav ul a:hover {
      color: #121212;
    }
  
    #check:checked~ul {
      left: 0;
    }
  
    .dropdown-content1qp {
      position: absolute;
      right: 50px;
      height: 250px;
      width: 350px;
      padding: 0 0;
    }
  
    .dropdown-content1qp h2 {
      margin: 1px;
    }
  
    .dropdown-content1qp .links a {
      font-size: 0.8em;
    }
  
    nav .btn {
      margin-top: 3px;
      height: 35px;
      width: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    /* .card-client-flex {
  
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    } */
  
    .address{
      display: flex;
      flex-direction: column;
    }
    .common{
      margin: 20px;
    }
    .common>h2{
      text-align: center;
      margin-top: 7px;
    }
    .common h3{
      text-align: center;
    }
    .common>p{
      text-align: center;
    }
    .common .span{
      text-align: center;
    }
    .common>h4{
      text-align: center;
    }
  }
  
  @media screen and (max-width: 660px){
    .dropdown1qp:hover .dropdown-content1qp {
      display: none;
  }

    .box1{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    .header{
      text-align: center;
    }
    .policy {
      text-align: center;
      margin-top: 20px;
    }
  
    .media{
      text-align: center;
      margin-top: 20px;
      text-align: center;
    }
    .icon_flex{
      width: 130%;
    }
    .icon_flex>a>i{
      font-size: 17px;
    }
    .icon_flex>a>i:hover{
      font-size: 21px;
    }
  
    .vertical_line{
      display: none;
    }
  
    .email_adress{
      text-align: center;
    }
  
    .course_flex{
      margin-top: 20px;
    }
    .courses p{
      text-align: center;
    }
    .courses_link{
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 580px) {
  .dropdown1qp:hover .dropdown-content1qp {
      display: none;
  }

    nav .btn {
      height: 30px;
      font-size: 10px;
      width: 8%;
    }
  
    nav .btn a {
      font-size: 10px;
    }
  
    .dropdown-content1qp {
      position: absolute;
      left: 10px;
    }
  }
