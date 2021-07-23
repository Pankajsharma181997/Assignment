import axios from "axios";

let data=[];

for(var i=0 ; i<5 ; i++){
    axios.get('https://picsum.photos/v2/list?page=1&limit=5')
  .then(function (response) {
    // handle success
    data.push(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}


  export default data;