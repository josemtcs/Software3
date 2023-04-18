$(document).ready(() =>{
    $("#btnCargar").click(()=>{
     
    })
});

function ClickBtnCargar(){
    $.get("https://dummyjson.com/products",(rs)=>{
        let tbl= $("#tblProductos")
        console.log(rs)
        rs.products.forEach(p=> {
        tbl.append(`<tr>
        <td> ${p.id} </td>
        <td> ${p.title} </td>
        <td> <img width="100" src= "${p.images[0]}" </td>
       
        </tr>`)
        });
})
    


}