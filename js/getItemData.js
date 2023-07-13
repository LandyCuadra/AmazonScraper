const defaultEmpty = 'N/A'
const sectionDivs = document.querySelectorAll('div[data-component-type="s-search-result"]') 

const resultProducts = {result};
sectionDivs.forEach(div => {
    const specsContainer = div.querySelector('div.sg-row.s-product-specs-view')
    let brand = defaultEmpty 
    if(specsContainer){
        const brandContainer = Array.prototype.filter.call(specsContainer.querySelectorAll('div.sg-col-inner'), (spec) => (spec.innerText.toLowerCase().includes('brand')))[0]
        brand = brandContainer ? brandContainer.querySelector('span.a-text-bold').innerText : brand
    }
    const nameComponent = div.querySelector('h2')
    const priceComponent =div.querySelector('span.a-offscreen') 
    resultProducts.push({
        name: nameComponent ? nameComponent.innerText : defaultEmpty,
        price: priceComponent ? priceComponent.innerText : defaultEmpty,
        brand: brand 
    })
});

return resultProducts;
