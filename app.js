let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
]


let val=document.getElementById("dropdown")
let val2=document.getElementById("Search")
let check=false;
const [{brand,model,price,camera,ram,rom}]=arr
let division=document.getElementById("list")

function getval(){
    console.log(val.value)
    console.log(val2.value)
    const filter=arr.filter( ({brand,model,price,camera,ram,rom})=> (val.value=== "Brand" && val2.value===brand) || (val.value==="Model" && val2.value===model) || (val.value==="Price" && val2.value===price) || (val.value==="Camera" && val2.value ===camera))
    const display_details=filter.map( ({brand,model,price,camera,ram,rom})=>{
        division.innerHTML+=`
        ========================
        <h2>Brand: ${brand}</h2>
        <h2>Model:${model}</h2>
        <h2>Price:${price}</h2>
        <h2>Camera:${camera}</h2>
        <h2>Ram:${ram}</h2>
        <h2>Rom:${rom}</h2>
        ========================
        </br>`
        
    }
    )
}
function chk(){
    if(!check){
        getval()
        check=true
    }
    else{
        division.innerHTML=""
        location.reload()
    }
}

