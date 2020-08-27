const dogsList = [
  {
    "id": "5f109dc5dfce9b7efb7107bf",
    "age": 16,
    "name": "Carolina",
    "gender": "female",
    "used": false,
    "breed": 2,
    "picture": "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11234019/Bulldog-standing-in-the-grass.jpg"
  },
  {
    "id": "5f109dc523504b2abd00d0c6",
    "age": 1,
    "name": "Miller",
    "gender": "male",
    "used": true,
    "breed": 3,
    "picture": "https://www.lebernard.ca/wp-content/uploads/2015/09/Chiot-beagle.jpg"
  },
  {
    "id": "5f109dc51c0b255d4f458014",
    "age": 4,
    "name": "Bradford",
    "gender": "male",
    "used": true,
    "breed": 5,
    "picture": "https://upload.wikimedia.org/wikipedia/commons/2/26/YellowLabradorLooking_new.jpg"
  },
  {
    "id": "5f109dc502c9bd4b3980771b",
    "age": 17,
    "name": "Trisha",
    "gender": "female",
    "used": false,
    "breed": 6,
    "picture": "https://www.lacitegoldenretriever.com/wp-content/uploads/2017/02/cropped-cropped-golden-retriever-1349045_1920-Copie-2-1024x614.jpg"
  },
  {
    "id": "5f109dc53d51676cb075ff90",
    "age": 20,
    "name": "Aguilar",
    "gender": "male",
    "used": false,
    "breed": 4,
    "picture": "https://www.rover.com/blog/wp-content/uploads/2020/01/french-bulldog-4278114_1920.jpg"
  },
  {
    "id": "5f109dc56a6138e3f219f030",
    "age": 14,
    "name": "Judy",
    "gender": "female",
    "used": true,
    "breed": 2,
    "picture": "https://static.wixstatic.com/media/74af0c_41c7bfb22f854763ae9b85e440322aab~mv2_d_2736_1824_s_2.jpg/v1/fill/w_874,h_874,al_c,q_85,usm_0.66_1.00_0.01/74af0c_41c7bfb22f854763ae9b85e440322aab~mv2_d_2736_1824_s_2.webp"
  },
  {
    "id": "5f109dc5e0e16852510baa27",
    "age": 1,
    "name": "Rowe",
    "gender": "male",
    "used": true,
    "breed": 5,
    "picture": "https://www.lebernard.ca/wp-content/uploads/2015/09/Chiot-labrador-retriever.jpg"
  },
  {
    "id": "5f109dc518c2cfd0e82ce39e",
    "age": 2,
    "name": "Gentry",
    "gender": "male",
    "used": false,
    "breed": 2,
    "picture": "https://vetstreet.brightspotcdn.com/dims4/default/75de412/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F64%2F9b43809e8911e0a2380050568d634f%2Ffile%2FBulldogs-4-645mk062111.jpg"
  },
  {
    "id": "5f109dc55efe70358b831d33",
    "age": 17,
    "name": "Crystal",
    "gender": "female",
    "used": true,
    "breed": 6,
    "picture": "data:image/jpeg;base64,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"
  },
  {
    "id": "5f109dc56eb2279cb9cb7f5d",
    "age": 8,
    "name": "Walter",
    "gender": "male",
    "used": false,
    "breed": 5,
    "picture": "https://thumbs-prod.si-cdn.com/COt4RVYpNNnDup3bFSpfcyCYFuU=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/ad/7b/ad7b3860-ad5f-43dc-800e-af57830cd1d3/labrador.jpg"
  },
  {
    "id": "5f109dc5506c956282d2e4d5",
    "age": 1,
    "name": "Carissa",
    "gender": "female",
    "used": true,
    "breed": 4,
    "picture": "https://24ryrdikgsto8d3526ikji7k-wpengine.netdna-ssl.com/wp-content/uploads/Photo-2018.-05.-28.-21-07-34-m%C3%A1solata-1024x784.jpg"
  },
  {
    "id": "5f109dc54f58a3cc751dd4ae",
    "age": 18,
    "name": "Hartman",
    "gender": "male",
    "used": false,
    "breed": 2,
    "picture": "https://i.ytimg.com/vi/zbQNnvlPo7U/maxresdefault.jpg"
  },
  {
    "id": "5f109dc554ddc0145c9a9c73",
    "age": 1,
    "name": "Fern",
    "gender": "male",
    "used": true,
    "breed": 2,
    "picture": "https://i.pinimg.com/originals/d2/33/9a/d2339a636c856482fd03fb3c9b045d62.jpg"
  },
  {
    "id": "5f109dc579f8b1ad4571b7db",
    "age": 1,
    "name": "Adrienne",
    "gender": "female",
    "used": true,
    "breed": 6,
    "picture": "https://i.ytimg.com/vi/a6KGPBflhiM/hqdefault.jpg"
  },
  {
    "id": "5f109dc5ee010407c5b8459d",
    "age": 20,
    "name": "Glenn",
    "gender": "male",
    "used": true,
    "breed": 3,
    "picture": "https://static.toutoupourlechien.com/2019/08/groupe-beagle.jpg"
  },
  {
    "id": "5f109dc526a6888e263e666b",
    "age": 7,
    "name": "Ellen",
    "gender": "female",
    "used": false,
    "breed": 4,
    "picture": "https://thehappypuppysite.com/wp-content/uploads/2019/03/White-French-Bulldog-long-1.jpg"
  },
  {
    "id": "5f109dc54da0e622d33c6d83",
    "age": 4,
    "name": "Beck",
    "gender": "male",
    "used": false,
    "breed": 1,
    "picture": "https://nosamisleschiens.fr/wp-content/uploads/2014/12/AdobeStock_63641115-1080x675.jpeg"
  },
  {
    "id": "5f109dc5d91bfa34bb9766d3",
    "age": 16,
    "name": "Angelique",
    "gender": "female",
    "used": false,
    "breed": 5,
    "picture": "https://storage.tvanouvelles.ca/v1/dynamic_resize/sws_path/tvanouvelles_prod/24e101a0-fe6f-403c-83de-5a75025ddbde/brown-labrador-dog-in-front-of-a-colored-background_16x9_WEB.jpg?quality=80&size=1200x&version=1"
  },
  {
    "id": "5f109dc56b43890bb8063699",
    "age": 7,
    "name": "Oneil",
    "gender": "male",
    "used": false,
    "breed": 3,
    "picture": "https://www.racedechien.info/uploads/thumbs/282x282-crop/dog/553/beagle-13244.jpg"
  },
  {
    "id": "5f109dc5f2c3292a3773cb1b",
    "age": 4,
    "name": "Glover",
    "gender": "male",
    "used": true,
    "breed": 5,
    "picture": "https://todaysveterinarypractice.com/wp-content/uploads/sites/4/2019/01/Chocolate-Lab_shutterstock_405052057_Paul-Ekert.jpg"
  }
];

export { dogsList };
