const db = { users: null, businesses: null };


db.users = [{
  id: 1,
  username: 'rotimi',
  password: 'isaiah',
},
{
  id: 2,
  username: 'seyi',
  details: 'solomon',
},
{
  id: 3,
  username: 'lanre',
  password: 'victor',
},
{
  id: 4,
  username: 'Sanchez',
  password: 'victor',
},
];

db.businesses = [{
  id: 1,
  name: 'Noble Computers',
  user: 1,
  category: 4,
  latitude: 3.142,
  longitude: 4.5678,
  address: '31, Mbaise Road, Owerri',
},
{
  id: 2,
  name: 'Oluaka Academy',
  user: 3,
  category: 4,
  latitude: 3.142,
  longitude: 4.5678,
  address: 'Portharcourt Road, Owerri',
},
{
  id: 3,
  name: 'Heartland Hotel',
  user: 4,
  category: 2,
  latitude: 3.145,
  longitude: 4.556,
  address: 'Wetheral Road, Owerri',
},
{
  id: 4,
  name: 'Andela',
  user: 2,
  category: 4,
  latitude: 3.142,
  longitude: 4.5678,
  address: 'Andela Tower, Anthony, Lagos',
},
];

db.categories = [{
  id: 1,
  name: 'Fashion',
},
{
  id: 2,
  name: 'Hotel & Restaurants',
},
{
  id: 3,
  name: 'Banking',
},
{
  id: 4,
  name: 'ICT',
}];

db.reviews = [{
  id: 1,
  rating: 4.5,
  comment: 'This is my review with no value',
  business: 1,
  reviewer: 'Alan Jones',
},
{
  id: 2,
  rating: 4.5,
  comment: 'This is my review with no value',
  business: 1,
}, {
  id: 3,
  rating: 3.5,
  comment: 'This is my review with no value',
  business: 3,
  reviewer: 'John Smith',
}, {
  id: 4,
  rating: 2.5,
  comment: 'This is my review with no value',
  business: 2,
  reviewer: 'Adekola Ogunbiyi',
}, {
  id: 5,
  rating: 4.0,
  comment: 'This is my review with no value',
  business: 1,
  reviewer: 'Xmen',
}];


export default db;
