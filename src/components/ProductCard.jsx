import styled from "styled-components"
import {useNavigate} from 'react-router-dom'

export default function ProductCard({image,title,price,id}){
let navigate=useNavigate()

function red(){
navigate(`/product/${id}`);
}




    //returning product cards for product list
return (
    <DIV onClick={()=>{red()}}>
<img src={image} alt="failed" />
<h2>{title.includes('https')===true?'T-shirt Style Spot':title}</h2>
<h3>₹{price}</h3>
    </DIV>
)

};


const DIV=styled.div`

img{
   width :100% ;
   margin: auto;
   border-radius: 20px;
}
h3{
  color: orange;
}
/* h2{
    text-align: center;
} */
button{
    color: white;
    background-color: black;
    display: block;
}
`