import React, {  } from 'react';
import StoreItem from './StoreItem';
import "./Store.css";



const musicList=[
    {
       quantity: 1,
        id: 'ablum1',
        name: 'Album 1',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        price: 100
    },
    {
      quantity: 1,
        id: 'ablum2',
        name: 'Album 2',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        price: 140
    },
    {
      quantity: 1,
        id: 'ablum3',
        name: 'Album 3',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        price: 200
    },
    {
      quantity: 1,
        id: 'ablum4',
        name: 'Album 4',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        price: 180
    }
];

const merchList=[
    {
      quantity: 1,
        id: 't-shirt',
        name: 'T-Shirt',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
        price: 160
    },
    {
      quantity: 1,
        id: 'coffee',
        name: 'Coffee Cup',
        imageURL: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
        price: 80
    },
]

const Store = (props) => {
  
  const music= musicList.map((list)=>(
    <StoreItem 
    quantity={list.quantity}
    key={list.id}
    id={list.id} 
    name={list.name} 
    imageURL={list.imageURL}
    price={list.price}
    />
  ));
  const merch= merchList.map((list)=>(
    <StoreItem 
    quantity={list.quantity}
    key={list.id}
    id={list.id} 
    name={list.name} 
    imageURL={list.imageURL}
    price={list.price}
    />
  ));


  return (    
  <>
    <section id="music" className="container">
    <h2>MUSIC</h2>
      <div id ="music-content">
        {music}
      </div>
    </section>
    <section id="merch" className="container">
    <h2>MERCH</h2>
      <div id="merch-content">
        {merch}
      </div>
    </section>
    
  </>
  );
};
export default Store;
