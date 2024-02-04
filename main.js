class ProductManager{

    constructor(){
        this.products=[]
    }

    addProduct(title, description, price, thumbnail, code, stock){
        // validaciones
        if(title === "" || description === "" || price === "" || thumbnail === "" || code === "" || stock === "" ){
            console.log(`All fields are required`)
            return
        }

        let codeExist=this.products.find(prod=>prod.code===code)
        if(codeExist){
            console.log(`This code ${code} is duplicated!!!`)
            return 
        }

        let id=1
        if(this.products.length>0){
            id=this.products[this.products.length-1].id +1
        }

        let newProduct={ id, title, description, price, thumbnail, code, stock}
        this.products.push(newProduct)
    }


    getProducts(){
        return this.products
    }

    getProductById(id){
        let product=this.products.find(prod=>prod.id===id)
        if(!product){
            console.log(`Not Found`)
            return 
        }

        return product
    }
}


// Testing

// Se creará una instancia de la clase “ProductManager”
let manager=new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(manager.getProducts()); // resultado []

/* Se llamará al método “addProduct” con los campos:
title: “producto prueba”
description:”Este es un producto prueba”
price:200,
thumbnail:”Sin imagen”
code:”abc123”,
stock:25 */
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(manager.getProducts());

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25) 
// resultado: This code abc123 is duplicated!!!

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
console.log(manager.getProductById(1))
console.log(manager.getProductById(2))


