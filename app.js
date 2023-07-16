class ProductManager {
    constructor(){
        this.products = []
        this.nextId = 1
    }

    addProduct(product){
        if (!this.isProductValid(product)){
            console.log("Error: El producto no es valido")
            return
        }

        if (this.isCodeDuplicate(product.code)){
            console.log("Error: El Codigo ya Existe")
            return
        }

        product.Id= this.nextId++
        this.products.push(product)
    }

    getProducts(){
        return this.products
    }

    getProductsById(id){
        const product = this.products.find((p)=> p.Id === id)
        if(product){
            return product
        }else{
            console.log("Error: El producto no Existe")
        }
    }

    isProductValid(product){
        return(
            product.title &&
            product.description &&
            product.price &&
            product.thumbnail &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code){
        return this.products.some((p)=> p.code === code)
    }
}


// instancia

const productManager = new ProductManager()

// productos

productManager.addProduct({
    title: "Parche Generico",
    description: "Parche para colocar en tus prendas",
    price: 5000,
    thumbnail: "/parche1.jpg",
    code: "11001",
    stock: 100
})

productManager.addProduct({
    title: "Parche personalizado",
    description: "Parche para personalizar",
    price: 7000,
    thumbnail: "/parche2.jpg",
    code: "11002",
    stock: 80
})

productManager.addProduct({
    title: "Parche con velcro",
    description: "Parche para personalizar chalecos o bolsos",
    price: 10000,
    thumbnail: "/parche3.jpg",
    code: "11003",
    stock: 200
})


//obtener productos

//const productsList = productManager.getProducts()
//console.log(productsList)

//----------------------

//obtener productos por ID

//const productId = productManager.getProductsById(3)
//console.log(productId)

//----------------------

//Prducto inexistente

//const noProduct = productManager.getProductsById(8)
