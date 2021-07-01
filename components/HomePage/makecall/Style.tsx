import styled from 'styled-components'



export const Section = styled.section` 

  display:flex;
  justify-content:center;
   flex-direction:column;
  width:100%;
  align-items:center;

   
  
   @media (min-width: 1281px) {
  
    .section {
      margin-bottom: 3rem;;
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
        color:#7c7c7c;
    }
    
   
   .section_left {
       width: 100%;
       height: 30%;
       
       
       display: flex;
       justify-content: center;
       flex-direction: column;
       align-items: center;
      
       .section-left-top {
         
           height: 45%;
            width: 100%;
           display: flex;
           justify-content: center;
           flex-direction: column;
           align-items: center;
           h2 {
               
               width: 100%;
             font-size: 3.4rem;
              margin-bottom: 5%;
               text-align: center;
               
              
              
               position: relative;
           }
           h2:after {
               bottom: -10%;
               left:49%;
               position: absolute;
    height: 10px;
    display: block;
    width: 3%;
      
    background: #0f5885;
    border-left: 1px white;
    content: '';
}
           h3 {
            
             font-size: 1.2rem;
               text-align:center;
                 width: 100%;
                
                   color: #7c7c7c;

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
    background: #0f5885;
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
     
       width: 60%;
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
            
             width: 100%;
             height: 40%;
             display: flex;
             justify-content:center;
             align-items: center;
             flex-direction: column;
             li:nth-child(1) {
             
                 position: relative;
                 height: 2rem;
                 width: 100%;
             }
             li {
                 margin-top: 1rem;
                font-family: Proxima-Bold;
                 width: 100%;
                 text-align: center;
                 color: #7c7c7c;
             }

         }
       }
       .form {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        input {
            opacity: 0.8;    
            background: #f8f8f8;
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
                  height: 23%;
                 
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
                          background-color: #f8f8f8;
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
                          background-color: #f8f8f8;
                          border-radius:5px;

                      }
   
                  }

              }
              .input-field-1{
                  width: 100%;
                  height: 40%;
                 
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
                          background-color: #f8f8f8;
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
                          background-color: #f8f8f8;
                          border-radius:5px;

                      }
                      label {
                          color: #7c7c7c;;
                      }
                  }

              }
         
        }
        
       }
   }
  
} 


 
  

    }
   



   }

   @media (max-width: 767px) {
    display: none;
  width:100%;
  height: 10rem;
 

  



 }
  

  

 
`