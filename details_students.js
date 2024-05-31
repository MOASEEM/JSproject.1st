/*
Assessment Requirements
1. Create a variable that can hold a number of NFTs. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1.
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)).
4. For good measure, getTotalSupply() should return the number of NFTs you have created.
*/

// Create a variable to hold your NFTs
let nftCollections = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, math_marks, science_marks, sst_marks, hindi_marks, english_marks, class_name) {
    let NFT = {
        name: name,
        math_marks: math_marks,
        science_marks: science_marks,
        sst_marks: sst_marks,
        hindi_marks: hindi_marks,
        english_marks: english_marks,
        class_name: class_name
    };
    nftCollections.push(NFT);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nftCollections.length; i++) {
        console.log("\n\n==================== NFT DETAILS ====================\n\n");
        console.log("Name: " + nftCollections[i].name);
        console.log("math_marks: " + nftCollections[i].math_marks);
        console.log("science_marks: " + nftCollections[i].science_marks);
        console.log("sst_marks: " + nftCollections[i].sst_marks);
        console.log("hindi_marks: " + nftCollections[i].hindi_marks);
        console.log("english_marks: " + nftCollections[i].english_marks);
        console.log("class_name: " + nftCollections[i].class_name + "%");
        console.log("\n\n====================================================\n");
    }
}

// Print the total number of NFTs we have created to the console
function getTotalSupply() {
    console.log("Total NFTs have Created: " + nftCollections.length);
}

// Call your functions below this line
mintNFT("Mo.Asim", "100", "85", "90", "89", "98", "10th");
mintNFT("Bhaviya Saini", "98", "90", "97", "95", "94", " 12th");
mintNFT("Piyush Goyal", "90", "85", "90", "90", "90", "11th");
mintNFT("Akanksha Soni", "97", "88", "98", "90", "97", "10th");
mintNFT("Mo.Nadir", "95", "92", "95", "95", "95", "10th");

listNFTs();
getTotalSupply();
