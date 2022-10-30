import React, { useEffect, useState, Component } from 'react';
import Product from "../components/Product";
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Typist from 'react-typist';
import CreateProduct from "../components/CreateProduct";
import {db} from '../components/FbConfig'
import {
  collection,
  getDocs,
} from 'firebase/firestore';
import Card from 'react-bootstrap/Card';

const colRef = collection(db, 'ForSale')
let prods = []

getDocs(colRef)
  .then((snapshot) => {
    
    snapshot.docs.forEach(doc => {
      prods.push({ ...doc.data(), id: doc.id})
    })
    console.log(prods)
  })
  .catch(err => {
    console.log(err.message)
  })


// Constants
const TWITTER_HANDLE = 'RightMeowNfts';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const DISCORD_HANDLE = '7G2GV9T9WF';
const DISCORD_LINK = `https://discord.gg/${DISCORD_HANDLE}`;

const App = () => {
  const { publicKey } = useWallet();
  const isOwner = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY : false );
  const isDev = ( publicKey ? publicKey.toString() === process.env.NEXT_PUBLIC_DEV_PUBLIC_KEY : false );
  const [creating, setCreating] = useState(false);
  const [products, setProducts] = useState([]);
  
  

  
  useEffect(() => {
    if (publicKey) {
      fetch(`/api/fetchProducts`)
        .then(response => response.json())
        .then(data => {
          setProducts(data);
        });
    }
  }, [publicKey]);

  const renderNotConnectedContainer = () => (
    <div className="button-container">
      
    </div>
  );
  const renderItemBuyContainer = () => (

    

    <div className="products-container">
      {prods.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

  return (

    <div className="App">
      <div className="container">
        <header className="header-container">
        <title>RM Store</title>
        <meta name='description' content='The Tower' />
        

        
        </header>

        <main>

    <Card class="card border-primary mb-3" style={{ width: '18rem'}}>
      <Card.Img variant="top" height="100" src="https://gdfyrj7mw3g37s4zqolst5g7qsletwugtth5ot5yfcud57wqdlda.arweave.net/MMuIp-y2zb_LmYOXKfTfhJZJ2oacz9dPuCioPv7QGsY?ext=png" />
    </Card>

        <Typist>
        <h1>🛒 RM STORE 🛒</h1>
        Spend your $PAWS here 🐾
        </Typist>
        {'\n'}

        

        {isOwner && (
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Create Product"}
            </button>
        )}
        {isDev && (
            <button className="create-product-button" onClick={() => setCreating(!creating)}>
              {creating ? "Close" : "Admin Panel"}
            </button>
        )}
        
        
          




          <WalletMultiButton className="cta-button connect-wallet-button" />

          {creating && <CreateProduct />}
          {publicKey ? renderItemBuyContainer() : renderNotConnectedContainer()}
          
        </main>

        
      </div>
      <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{` @${TWITTER_HANDLE} `}</a>

          <img alt="Discord Logo" className="discord-logo" src="disc-logo.png" width="25"/>
          <a
            className="footer-text"
            href={DISCORD_LINK}
            target="_blank"
            rel="noreferrer"
          >{` Join Discord`}</a>
        </div>
    </div>

  );
};

export default App;