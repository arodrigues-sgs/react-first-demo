import './App.css'
import PRODUCTS from "./data/products.json"

function App() {
  console.log(PRODUCTS);
  return <FilterableProductTable products={PRODUCTS}/>
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <h2>Filterable Product Table</h2>
      <SearchBar />
      <ProductTable products={PRODUCTS}/>
    </div>
  );
}

function SearchBar() {
  return <h2>Search Bar</h2>
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach(product => {
    if(product.category !== lastCategory) {
      rows.push(
        <CategoryRow 
          category={product.category} 
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow 
        product={product} 
        key={product.name} />
    );
    lastCategory = product.category;
  });
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function CategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export default App
