import Button1 from "./Button1";

function Product ({name,title,description}){


return(
<div>
    <h1>{title}</h1>
    <h1>{name}</h1>
    <h1>{description}</h1>
    <Button1 content='add to cart'/>

</div>


)


}
export default Product;