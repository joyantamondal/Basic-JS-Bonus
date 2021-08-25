const products = [
    {name:'samsung s3 phone', price: 12000},
    {name:'Asus Laptop d34', price: 32000},
    {name:'Apple Smart Watch', price: 18000},
    {name:'bosundhora binding paper', price: 80},
    {name:'lg smart watch', price: 10000},
    {name:'old granny land phone', price: 100}
];
function searchProducts(products, searchText){
    const matched = [];
    for(const product of products){
        if(product.name.indexOf(searchText)!=-1){
            matched.push(product);
        }
    
    }
    return matched;
}
const matched = searchProducts(products,'phone');
console.log(matched);