import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section {
      
        position: relative;
     
        display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;
   
  height:40rem;


   
   
  
.section_data {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    align-items: center;
    label {
        color: #505050;
    }
   
   .section_left {
       width: 100%;
       height: 20%;
       
       
       display: flex;
       justify-content: center;
       flex-direction: column;
       align-items: center;
      
       .section-left-top {
       
           height: 45%;
           
           display: flex;
           justify-content: center;
           flex-direction: column;
           align-items: flex-end;
           h2 {
             font-size: 3.4rem;
              margin-bottom: 5%;
               text-align: left;
               
              
              
               position: relative;
           }
           h2:after {
               bottom: -2%;
               left:45%;
               position: absolute;
    height: 10px;
    display: block;
    width: 10%;
    background: ${props => props.theme.colors.yellow};
    border-left: 1px white;
    content: '';
}
           h3 {
             font-size: 1.2rem;
               text-align: right;
               
             
                   color: #505050;

               line-height: 1.5;
           }
       }
       .section-left-bottom {
           width: 70%;
           height: 25%;
           
           display: flex;
           justify-content: space-evenly;
           align-items: flex-start;
           flex-direction: column;
  position: relative;
           :after {
               top: 0%;
               position: absolute;
    height: 10px;
    display: block;
    width: 100%;
    background: ${props => props.theme.colors.yellow};
    border-top: 1px white;
    content: '';
}
li {
    font-size: 1.5rem;
               text-align: left;
               
               width: 100%;
              
               line-height: 1.5;
}
h3 {
             font-size: 1.2rem;
               text-align: left;
               
               width: 100%;
              
               line-height: 1.5;
           }
       }

   }
   .section_right {
     
       width: 50%;
       height: 80%;
       display: flex;
       justify-content: center;
      
       align-items: center;
       .icon {
         width: 20%;
         height : 100%;
         
         display: flex;
         justify-content:flex-start;
         flex-direction: column;
         align-items: center;
         ul {
             margin-top: 3rem;
             width: 100%;
             height: 20%;
             
             display: flex;
             justify-content: space-evenly;
             align-items: center;
             flex-direction: column;
   li:nth-child(1) {
             
                 position: relative;
                 height: 2rem;
                 width: 100%;
             }
             li {
                font-family: Proxima-Bold;
                 width: 100%;
                 text-align: center;
                 color: #505050;
             }

         }
       }
       .form {
        width: 80%;
        height: 70%;
        display: flex;
        justify-content: center;
        input {
            opacity: 0.8;    
        }
        textarea {
            opacity: 0.8;    
        }
        select {
            opacity: 0.8;  
        }
        form {
            display: flex;
            justify-content: space-around;
            align-items: center;
           
             width: 90%;
             height: 100%;
            
              flex-direction: column;
              .input-field {
                  width: 100%;
                  height: 20%;
                 
                  display: flex;
                  justify-content: space-between;
                 button {
                     margin-left: 0.5rem;
                     position: relative;
                    
                    font-size: 1rem;
    padding: 1rem;
    height: 3rem;;
    border-radius: 1px;
    text-transform: uppercase;
       background-color: #3c4e62;

                 }
                 button:after {
               top: 0%;
               left:-5%;
               position: absolute;
    height: 100%;
    display: block;
    width: 10px;
    background: ${props => props.theme.colors.yellow};
    border-left: 1px white;
    content: '';
}
                  .field {
                      width: 49%;
                      display: flex;
                      justify-content: flex-end;
                      align-items: flex-start;
                      flex-direction: column;
                 
                      input {
                          width: 100%;
                          height: 60%;
                          background-color: #c1c4ca;
                          border-radius:5px;

                      }
   
                  }

                  .field-1 {
                      width: 100%;
                      display: flex;
                      justify-content: flex-end;
                      align-items: flex-start;
                      flex-direction: column;
                 
                      input {
                          width: 100%;
                          height: 60%;
                          background-color: #c1c4ca;
                          border-radius:5px;

                      }
   
                  }

              }
              .input-field-1{
                  width: 100%;
                  height: 30%;
                 
                  display: flex;
                  justify-content: space-between;
                  flex-direction: column;
                  .field {
                      width: 100%;
                      height: 100%;
                      display: flex;
                      justify-content: space-evenly;
                      align-items: flex-start;
                      flex-direction: column;
                 
                      textarea {
                          width: 100%;
                          height: 80%;
                          background-color: #c1c4ca;
                          border-radius:5px;


                      }
   
                  }

              }
              .input-field-2 {
                  width: 100%;
                  height: 7%;
                 
                  display: flex;
                  justify-content: space-between;
             
                  .field {
                    
                      width: 100%;
                      display: flex;
                      justify-content: flex-end;
                      align-items: flex-start;
                      flex-direction: column;
                      flex: 1;
                      select {
                          width: 100%;
                          height: 60%;
                          background-color: #c1c4ca;
                          border-radius:5px;

                      }
                      label {
                          color: #505050;;
                      }
                  }

              }
         
        }
        
       }
   }
  
} 


 
  

    }
   



   }

  

 
`