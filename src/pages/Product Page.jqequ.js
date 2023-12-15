// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/1-hello-world

$w.onReady(function () {
    // Write your JavaScript here

    
    $w('#button7').onClick((event) => {
        cart.addProducts([{
            "productId": 1, // replace with your product's ID
            "quantity": 1,
            // add any product options if necessary
        }])
        .then(() => {
            // after product is added to the cart, navigate to the "Upload photos" page
            wixLocation.to("/upload-photos"); // replace with the actual URL of your "Upload photos" page
        })
        .catch((error) => {
            console.error("Error adding product to cart", error);
        });
    });
    // To select an element by ID use: $w('#elementID')
   // field3
    // Click 'Preview' to run your code
});