//Helper function to get value by id
function getValue(name){
    return document.getElementById(name).value
  }
  
  function validateSubmission(){
    //save all the input values
    const name = getValue('name')
    const budgetB = getValue('budgetB')
    const ada = getValue('ada')
    const txid = getValue('txid')
    const description = getValue('description')
    const pool = getValue('pool')
    
    //generate a filename
    const filename = new Date().getTime().toString() + '-' + name.replace(/\s/g, '-') + ".json"
    
    function ideascaleLink(pool) {
      var iLink = "";
      switch(pool) {
        case 'NFT Guild':
          iLink = "https://cardano.ideascale.com/c/idea/384031";
          break;
        default:
          iLink = "";
          break;
      }
      return iLink;
    }    
    
    //Generate a string mimicing the file structure
    //Indentation is important here
    let fileText = `{
  "id" : ${new Date().getTime().toString()},
  "date": "${new Date().toUTCString()}",
  "project": "NFT Guild",
  "pool": "${pool}",
  "Ideascale": "${ideascaleLink(pool)}"
  "budget": "${budgetB}",
  "ada": ${ada},
  "name": "${name}",
  "wallet": "${txid}",
  "description": "${description}"
}
`
    
    //Encode string to URI format
    const encodedFileText = encodeURIComponent(fileText)
  
    //Generate a github link with query parameter
    
    function githubQueryLink(pool) {
      var answer = "";
      switch(pool) {
        case 'NFT Guild':
          answer = "Fund7/NFT-Guild/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }

    function githubQueryLink2(budgetB) {
      var answer = "";
      switch(budgetB) {
        case 'Incoming IOG':
          answer = "Incoming-IOG/";
          break;
        case 'Biweekly events':
          answer = "Biweekly-events/";
          break;
        case 'Marketing & Outreach Campaign':
          answer = "Marketing-&-Outreach-Campaign/";
          break;
        case 'Building Website':
          answer = "Building-Website/";
          break;
        case 'Management & Coordination':
          answer = "Management-&-Coordination/";
          break;
        default:
          answer = "";
          break;
      }
      return answer;
    }
    //Open in a new tab
  window.open("https://github.com/treasuryguild/NFT-Guild/new/main/Transactions/" + githubQueryLink(pool) + githubQueryLink2(budgetB) + "new?value=" + encodedFileText +"&filename=" + filename);
    
  }
