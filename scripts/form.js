const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

function DisplayProduct(productArray){
    const productName = document.getElementById("product");

    productArray.forEach( product=>{
        const name=  product.name;
        const id = product.id;
        const rating = product.averagerating;
        const option= document.createElement("option");

        option.value = id;
        option.innerHTML =`<option value="${id}">${name}</option>`
        productName.appendChild(option);
    })
}
DisplayProduct(products);

  