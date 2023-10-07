function fooo(params) {
    
}
const users=[
    {
      "_id": "651d5854a0739766c6accd95",
      "balance": "$2,870.53",
      "age": 38,
      "name": "Brady Travis"
    },
    {
      "_id": "651d5854ebcfd194ddaf1b59",
      "balance": "$1,840.75",
      "age": 68,
      "name": "Mooney Stone"
    },
    {
      "_id": "651d58542a36694c4e813fd3",
      "balance": "$2,726.08",
      "age": 34,
      "name": "Ferrell Santos"
    },
    {
      "_id": "651d58545e65516564b27732",
      "balance": "$3,553.30",
      "age": 53,
      "name": "Benita Bell"
    },
    {
      "_id": "651d5854d03eafdffb24ee5f",
      "balance": "$2,535.63",
      "age": 51,
      "name": "Griffith Weaver"
    },
    {
      "_id": "651d58543dfe2f0111aefc96",
      "balance": "$3,492.23",
      "age": 58,
      "name": "Letha Dunn"
    },
    {
      "_id": "651d58543de965a7954837d4",
      "balance": "$3,732.45",
      "age": 19,
      "name": "Garrison Rasmussen"
    }
  ]
  
  let patients = [
    {
      "_id": "651d5da159cc1dc72bcf2ba3",
      "balance": "$2,764.88",
      "age": 48,
      "name": "Angelique Hardy"
    },
    {
      "_id": "651d5da1338aefe741060519",
      "balance": "$3,952.38",
      "age": 32,
      "name": "Lorene Moore"
    },
    {
      "_id": "651d5da1f891c0cf28c16a8a",
      "balance": "$2,333.17",
      "age": 36,
      "name": "Amanda Bender"
    },
    {
      "_id": "651d5da142cbb4c31ff6bbc9",
      "balance": "$3,961.19",
      "age": 69,
      "name": "Fletcher Bruce"
    },
    {
      "_id": "651d5da1ddb8b87dc03987ff",
      "balance": "$3,280.92",
      "age": 29,
      "name": "Joanne Adkins"
    },
    {
      "_id": "651d5da106b1eb4e5a540a5e",
      "balance": "$2,021.13",
      "age": 38,
      "name": "Figueroa Weber"
    },
    {
      "_id": "651d5da16c3aeafa9b3f21e2",
      "balance": "$3,640.79",
      "age": 39,
      "name": "Helene Bradford"
    },
    {
      "_id": "651d5da1a79bc3c7a8b33d03",
      "balance": "$2,629.93",
      "age": 54,
      "name": "Ines Washington"
    },
    {
      "_id": "651d5da1de6f0fd2447dd13e",
      "balance": "$1,461.92",
      "age": 51,
      "name": "Ora Lindsey"
    },
    {
      "_id": "651d5da1f63b457f076029cb",
      "balance": "$1,320.17",
      "age": 48,
      "name": "Gordon Tate"
    },
    {
      "_id": "651d5da1aaf7a0c153e07183",
      "balance": "$2,065.11",
      "age": 19,
      "name": "Jody Chapman"
    },
    {
      "_id": "651d5da1824e9b98f7ac0868",
      "balance": "$1,218.05",
      "age": 39,
      "name": "Carrillo Mcfadden"
    },
    {
      "_id": "651d5da1dce22e047aad0349",
      "balance": "$1,228.36",
      "age": 61,
      "name": "Knowles Joseph"
    },
    {
      "_id": "651d5da15e05c12c1bce8002",
      "balance": "$3,817.52",
      "age": 29,
      "name": "Trujillo Hogan"
    }
  ]
  function randGroup() {
     const bloodGroups = ['1', '2','3', '4', '!1', '!2','!3', '!4'];
     let index = Math.floor(Math.random()*7);
     return bloodGroups[index]; 
  }
   
    patients.forEach(iteam=>{
         iteam.needs=randGroup()
      })
          
    users.forEach(iteam=>{
        iteam.bloodGroup=randGroup()
    })