

const check = (req, res, next) => {
    if(product_name === "" || product_category === "" || product_description === "" || product_price === "" || product_Stock === ""){
        res.redirect("/product/upload");

    }
    else{
        next();
    }
}

module.exports = check;