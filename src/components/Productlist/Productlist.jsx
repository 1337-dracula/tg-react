import React, { useState } from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import ProductItem from '../ProductionItem/ProductionItem';
import './Productlist.css'


const products = [
  { id: '1', title: "Detoks", price: 1370000, description: "Ozdiradi" },
  { id: '2', title: "Detoks", price: 1370000, description: "Ozdiradi" },
  { id: '3', title: "Detoks", price: 1370000, description: "Ozdiradi" },
  { id: '4', title: "Detoks", price: 1370000, description: "Ozdiradi" },
  { id: '5', title: "Detoks", price: 1370000, description: "Ozdiradi" },
  { id: '6', title: "Detoks", price: 1370000, description: "Ozdiradi" },
  { id: '7', title: "Detoks", price: 1370000, description: "Ozdiradi" },
]


const getTotalPrice = (items) => {
  return items.reduce((acc, item) => {
    return acc += item.price
  }, 0)
}


const Productlist = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product) => {
    const alreadyAdded = addedItems.find(item => item.id === product.id)
    let newItems = [];

    if (alreadyAdded) {
      newItems = addedItems.filter(item => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }


    setAddedItems(newItems)

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Sotvolish ${getTotalPrice(newItems)}`

      })
    }
  }
  return (
    <div className={'list'}>
      {products.map(item => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={'item'}
        />
      ))}
    </div>
  )
}

export default Productlist;
