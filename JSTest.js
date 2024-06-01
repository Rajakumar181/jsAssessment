/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nfts=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,artist,year) {
  let nft={
    name:name,
    artist:artist,
    year:year
  };
  nfts.push(nft);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for (let i=0 ; i<nfts.length;i++){
    console.log('NFT #${i+1}');
    console.log('Name: ${nfts[i].name}');
    console.log('Artist: ${nfts[i].artist}');
    console.log('Year: ${nfts[i].year}');
    console.log('-------------');
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nfts.length;
}
mintNFTS("Raja Kumar","Anil Kumar Mahto",2001);
mintNFTS("Rahul Kumar","Anil Kumar Mahto",2005);
mintNFTS("Arushi","Khushbu",20017);
// call your functions below this line
listNFTs();
console.log('Total Supply:${getTotalSupply()}');

