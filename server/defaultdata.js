import productsData from './constants/productsdata.js';
import Product from './model/product-schema.js';

const defaultData = async () => {
    try {
        await Product.insertMany(productsData);  // this will insert all the product data in database
        // console.log("products data inserted successfully");
    } catch (error) {
        // console.log("Error while inserting default data", error.message);
    }
}
export default defaultData;



// this file is inserting the data which we will be display on the website
