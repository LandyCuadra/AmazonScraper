const sectionDivs = document.querySelectorAll('div[data-component-type="s-search-result"]') 

const resultProducts = [];
sectionDivs.forEach(div => {
    const specsContainer = div.querySelector('div.sg-row.s-product-specs-view')
    let brand = 'N/A' 
    if(specsContainer){
        const brandContainer = Array.prototype.filter.call(specsContainer.querySelectorAll('div.sg-col-inner'), (spec) => (spec.innerText.toLowerCase().includes('brand')))[0]
        brand = brandContainer ? brandContainer.querySelector('span.a-text-bold').innerText : brand
    }
    resultProducts.push({
        name: div.querySelector('h2').innerText,
        price: div.querySelector('span.a-offscreen').innerText,
        brand: brand 
    })
});

SetVar("{result}", resultProducts);
