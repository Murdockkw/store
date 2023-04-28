
const productsArray =  [
    {
        id: "price_1MvSmiLnnrCs18cjRekmq25f",
        title: "QR Code (6 per page)",
        price: 9.99
    },
    {
        id: "price_1MvT8oLnnrCs18cjp9RHQ5K8",
        title: "QR Code T Shirt",
        price: 29.99
    },
    {
        id: "price_1MvSqKLnnrCs18cjaXg6BGd6",
        title: "Ad Service",
        price: 49.99
    },
    {
        id: "price_1MvSpGLnnrCs18cjs7EnmRsh",
        title: "Web App",
        price: 49.99
    },
    {
        id: "price_1MvSs9LnnrCs18cj1YnLjldO",
        title: "Street Team",
        price: 19.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData }