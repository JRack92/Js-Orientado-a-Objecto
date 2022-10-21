class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// Clase de la interfaz
class UI {
    AddProduct(product) {
        // Declaracion de variables
        const productList = document.getElementById('product-list');
        const elementHtml_Product = document.createElement('div');

        elementHtml_Product.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
            <strong>Product Name</strong>: ${product.name}
            <strong>Product Price</strong>: ${product.price}
            <strong>Product Year</strong>: ${product.year}
            <a hrft="#" class="btn btn-danger" name="delete">Delete</a>
            </div>
        </div>
        `;

        productList.appendChild(elementHtml_Product);
    }

    ResetForm() {
        document.getElementById('product-form').reset();
    }

    DeletedProduct(elementHtml) {
        if (elementHtml.name === 'delete') {
            elementHtml.parentElement.parentElement.parentElement.remove();
            this.ShowMessage('Product Deleted Successfully', 'success');
        }
    }

    ShowMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));

        // Showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form').addEventListener('submit', function (e) {
    const nameProduct = document.getElementById('name').value;
    const priceProduct = document.getElementById('price').value;
    const yearProduct = document.getElementById('year').value;

    const product = new Product(nameProduct, priceProduct, yearProduct);

    const ui = new UI();

    if (nameProduct === '' || priceProduct === '' || yearProduct === '') {
        ui.ShowMessage('Complete Fields Please', 'danger');
    }
    else {
        ui.AddProduct(product);
        ui.ResetForm();
        ui.ShowMessage('Product Added Successfully', 'success');
    }

    // Esto cancela el comportamiento normal del evento Submit que es actualizar la pagina, con esto ya no se va actualizar.
    e.preventDefault();
});

document.getElementById('product-list').addEventListener('click', function (e) {
    const ui = new UI();
    ui.DeletedProduct(e.target);
});