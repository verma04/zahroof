import {  createGlobalStyle } from "styled-components";


 export default   createGlobalStyle`
a { 
  text-decoration: none; 
 

  font-family: FSAlbert;
} 

div {
    font-family: FSAlbert;
  
}
i {
  color: #0085C5;
  cursor: pointer;
}
  body {
    color: #2f3435; 
  font-family: FSAlbert;

      overflow-x: hidden;
       
      ::-webkit-scrollbar {
  width: 10px;
  #nprogress .bar {
  background: #FFBB00 !important;
}
#nprogress .peg {
  box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
}
#nprogress .spinner-icon {
  border-top-color: #FFBB00;
  border-left-color: #FFBB00;
}
}

button {
  border:none;
  padding:0.2rem;
  background-color: #0085C5;
  color:white;
}
/* Track */
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.brown}; 
  border-radius: 5px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.darkBrown};
}
      
  }
  ul {
    list-style: none;
    li {
      
    cursor: pointer;
    color: ${props => props.theme.colors.text1};
  }
  }
  img {
  cursor: pointer;
}
button {
  cursor: pointer;
  font-family: FSAlbert;
}

 
  h1 {
    font-size: 1.65rem;
    line-height: var(--line-height-lg);
  font-family: FSAlbert;
  color: #2f3435; 
  word-spacing:0.2rem;
  }
  h2 {
    font-size: 1.4rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey};
  font-family: FSAlbert;
  color: #2f3435; 
  word-spacing:0.2rem;
  line-height: 1.2;
  }
  h3 {
    font-size: 1.2rem;
    line-height: var(--line-height-lg);
    color: ${props => props.theme.colors.grey};
    font-family: FSAlbert;
    color: #2f3435; 
    word-spacing:0.2rem;
    /* family=FiesoleTextW00-Italic */
  }
  p {
    font-family: FSAlbert;
    word-spacing:0.2rem;
    color: ${props => props.theme.colors.grey};
  }
  h4 {
    font-size: 1rem;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
    line-height: 1.2;
  }
  h5 {
    font-size: 0.75;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  h6 {
    font-size: 0.6rem;
    line-height: var(--line-height-md);
    color: #2f3435; 
    word-spacing:0.2rem;
  }
  input {
    font-family: FSAlbert;
  }
  textarea {
    font-family: FSAlbert;
  }
  p {
    font-size:1.2rem;
line-height:1.1;
  
    font-family: FSAlbert;
    word-spacing:0.2rem;
    color: #2f3435; 
  }
  select {
  font-family: FSAlbert;
  color: #2f3435; 
  }
  
  .date {
  font-family: FSAlbert;
  }
  .card {
    border-radius:10px;
    color: #2f3435; 
  }
  button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
  transform: scale(1.1); 
 
}
i:hover {
 
 
}
code {
        background-color:LightGray;
    }
  button {
border-radius:5px;
font-family:  FS_Bold ;
transition: transform .8s;

  }
  input {

    border:1px solid #EFEAE4;
  
  }
  span {
  font-family: FSAlbert;
  }
  i {
    color: ${props => props.theme.colors.darkBrown};
  }
  @media only screen and (max-width: 767px) {
    body {
      overflow-x: hidden;
    }
  }
  @media only screen and (min-width: 768px) {
    body {
      overflow-x: hidden;
    }
    h1 {
      font-size: 1.75rem;
    }
    h2 {
      color: ${props => props.theme.colors.grey};
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  a { 
    text-decoration: none; 
    color: ${props => props.theme.colors.darkBrown};
  font-family: FSAlbert;
} 
button {
  font-family: FSAlbert;
}
li {
  cursor: pointer;
}
img {
  cursor: pointer;
}

 `;
