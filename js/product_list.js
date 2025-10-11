
$(document).ready(function() {
  const products = [
    {
      "image": "https://m.media-amazon.com/images/I/51dZ19miAbL._SY741_.jpg",
      "link": "https://amzn.to/3J0ICKY",
      "name" : ""
    },
    {
      "image": "https://m.media-amazon.com/images/I/71iIUzNi1YL._SY741_.jpg",
      "link": "https://amzn.to/436Gjgg",
      "name" : ""
    },
    {
        "image":"https://m.media-amazon.com/images/I/71ojDi0wKlL._SY741_.jpg",
        "link":"https://amzn.to/3VWw8al",
        "name" : ""
    },
    {
        "image":"https://m.media-amazon.com/images/I/611SIw6KI6L._SY741_.jpg",
        "link":"https://amzn.to/4nII9w1",
        "name" : "ANNI DESIGNER Women's Chanderi Cotton Straight Printed Kurta with Dupatta"
    },
    {
        "image":"https://m.media-amazon.com/images/I/61HuoF+yVzL._SX569_.jpg",
        "link":"https://amzn.to/4q6hBq8",
        "name" : ""
    },
    {
        "image":"https://m.media-amazon.com/images/I/71BegyZ014L._SY741_.jpg",
        "link":"https://amzn.to/4q4slW7",
        "name" : ""
    },
    {
        "image":"https://m.media-amazon.com/images/I/71JrdJxQyWL._SX679_.jpg",
        "link":"https://amzn.to/4h5zh1b",
        "name" : ""
    },
    {
        "image":"https://m.media-amazon.com/images/I/61lcu95FSYL._SY741_.jpg",
        "link":"https://amzn.to/48Y6BFe",
        "name" : "ANNI Designer Women's Rayon Viscose Straight Printed Kurta with Pant & Dupatta"
    },
  ];

  // Loop through JSON data and create HTML
  $.each(products, function(index, product) {
    console.log('product: ', product)

    let shortName = product.name;
    if (shortName && shortName.length > 20) {
      shortName = shortName.substring(0, 20) + "...";
    }
    const html_code = `
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box">
                <div class="option_container">
                    <div class="options">
                    <a href="${product.link}" class="option1" target="_blank">
                    Preview
                    </a>
                    <!-- <a href="" class="option2">
                    Buy Now
                    </a> -->
                    </div>
                </div>
                <div class="img-box">
                    <img src="${product.image}" alt="">
                </div>
                <div class="detail-box">
                    <h5 title="${product.name}">
                        ${shortName || ''}
                    </h5>
                </div>
                
            </div>
        </div>`

    $("#product-list").append(html_code);
  });
});
