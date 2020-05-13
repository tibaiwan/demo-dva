import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

class Products extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: 'products/fetchProducts', payload: {id: '123'}});
    }

    handleDelete(id) {
        this.props.dispatch({
          type: 'products/delete',
          payload: id,
        });
      }

    render(){
        return (
            <div>
              <h2>List of Products</h2>
              <ProductList onDelete={this.handleDelete.bind(this)} products={this.props.products} />
            </div>
          );
    }
}

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);