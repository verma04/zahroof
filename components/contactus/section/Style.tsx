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
   
  height:60rem;


   
   
  
.section_data {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
   
   .section_left {
       width: 50%;
       height: 100%;
       
       display: flex;
       justify-content: center;
       flex-direction: column;
       align-items: flex-end;
      
       .section-left-top {
           width: 70%;
           height: 45%;
           
           display: flex;
           justify-content: center;
           flex-direction: column;
           align-items: flex-end;
           h2 {
             font-size: 3.4rem;
              margin-bottom: 5%;
               text-align: right;
               
               width: 50%;
               color: white;
               position: relative;
           }
           h2:after {
               top: 0%;
               left:-10%;
               position: absolute;
    height: 100%;
    display: block;
    width: 10px;
    background: ${props => props.theme.colors.yellow};
    border-left: 1px white;
    content: '';
}
           h3 {
             font-size: 1.2rem;
               text-align: right;
               
               width: 90%;
               color: white;
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
               color: white;
               line-height: 1.5;
}
h3 {
             font-size: 1.2rem;
               text-align: left;
               
               width: 100%;
               color: white;
               line-height: 1.5;
           }
       }

   }
   .section_right {
       width: 50%;
       height: 100%;
       
      
       display: flex;
       justify-content: center;
       flex-direction: column;
       align-items: flex-start;
       .form {
        width: 70%;
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
            justify-content: space-evenly;
            align-items: center;
         
             width: 90%;
             height: 100%;
            
              flex-direction: column;
              .input-field {
                  width: 100%;
                  height: 8%;
                 
                  display: flex;
                  justify-content: space-between;
                 button {
                     width: 20%;
                     background: ${props => props.theme.colors.yellow};
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
                      label {
                          color:#c1c4ca;
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
                      label {
                          color:#c1c4ca;
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
                      label {
                          color:#c1c4ca;
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
                          color:#c1c4ca;
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