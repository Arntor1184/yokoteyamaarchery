import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <section id="shop">
      <h2>Supplies and Master fletcher</h2>
      <p>We have a full armoury of handmade bows and arrows...</p>
      <table border="1" width="80%">
        <tr>
          <th>Item</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td>Basic beech bow</td>
          <td>$5</td>
        </tr>
        <tr>
          <td>Master bow</td>
          <td>$25</td>
        </tr>
      </table>
    </section>
  );
};

export default Shop;
