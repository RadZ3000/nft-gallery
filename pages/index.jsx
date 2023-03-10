import { useState } from 'react'
import { NFTCard } from "../components/NftCard"

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);

  const fetchNFTs = async () => {
    let nfts;
    console.log("fetching nfts");
    const api_key = "A8A1Oo_UTB9IN5oNHfAc2tAxdR4UVwfM"
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTs/`;
    var requestOptions = {
      method: 'GET'
    };

    if (!collection.length) {

      const fetchURL = `${baseURL}?owner=${wallet}`;

      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    } else {
      console.log("fetching nfts for collection owned by address")
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
    }

    if (nfts) {
      console.log("nfts:", nfts)
      setNFTs(nfts.ownedNfts)
    }
  }

  const fetchNFTsForCollection = async () => {
    if (collection.length) {
      var requestOptions = {
        method: 'GET'
      };
      const api_key = "Qf-h2vdwyIcXlZ6hPLdZKz5THIqHdr7W"
      const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?contractAddress=${collection}&withMetadata=${"true"}`;
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json())
      if (nfts) {
        console.log("NFTs in collection:", nfts)
        setNFTs(nfts.nfts)
      }
    }
  }
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3 page">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <input className="text-center text-black w-1/3" disabled={fetchForCollection} onChange={(e) => { setWalletAddress(e.target.value) }} value={wallet} type={"text"} placeholder="Wallet Address"></input>
        <input className="text-center text-black w-1/3"  onChange={(e) => { setCollectionAddress(e.target.value) }} value={collection} type={"text"} placeholder="Collection Address"></input>
        <label className="text-pink-400 "><input type={"checkbox"} onChange={(e) => { setFetchForCollection(e.target.checked) }} className="mr-2"></input>View Collection</label>
        <button className={"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5 hover:text-gray-900 duration-500"} onClick={
          () => {
            if (fetchForCollection) {
              fetchNFTsForCollection()
            } else fetchNFTs()

          }
        }>View NFTs </button>
      </div>

      <div className='flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-2 justify-center'>
        {
          NFTs.length>0 && NFTs.map(nft => {
            return (
              <NFTCard nft={nft}></NFTCard>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
