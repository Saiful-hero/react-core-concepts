import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name:'Saiful Islam',
    specialist:'AI',
    duration:30
  }
  var person2 = {
    name:'Izan Dhali',
    specialist:'Nauhty',
    duration: 1
  }
  var style = {
    color: 'red',
    backgroundColor: 'salmon'
  }

  var name =['Muhammad ibn Musa al-Khwarizmi','Fatima Al-Fihri','Harun Al-Rashid','Khalid','Ibn al-Haytham']
  var tag=['Algebra','Universities','Hospitals','Coffe','Camera']

  var products = [
    {name:'Illustration',price:'$90.99'},
    {name:'photoshop',price:'$90.99'},
    {name:'Adobe After',price:'$90.99'},
    {name:'Procreate',price:'$90.99'},
    {name:'figma',price:'$90.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ul>
          {
            name.map(nam => <li>{nam}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
       
        <p>Edit done cd react-core-concept<code>src/App.js</code> and save to reload.</p>
        <p className="" style={style}>The award goes to {person.name} for his {person.specialist + ' ' + person.duration} contribution </p>
        <p className="" style={{color:'red',backgroundColor:'cyan'}}>The award goes to {person2.name} for his {person2.specialist + ' ' + person2.duration} contribution </p>
        

        <Person name="Abu Bakr" Tag="The first khalipha in Islam"></Person>
        <Person name="Omar" Tag="The Second khalipha in Islam"></Person>
        <Person name="Usman" Tag="The Third khalipha in Islam"></Person>
        <Person name="Ali (RA)" Tag="The first khalipha in Islam"></Person>
        <Person name="Abdullah" Tag="The first khalipha in Islam"></Person>

        <Invensionist name={name[0]} tag={tag[0]}></Invensionist>
        <Invensionist name={name[1]} tag={tag[1]}></Invensionist>
        <Invensionist name={name[2]} tag={tag[2]}></Invensionist>
        <Invensionist name={name[3]} tag={tag[3]}></Invensionist>
        <Invensionist name={name[4]} tag={tag[4]}></Invensionist>

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        <Product products={products[1]}></Product>
        <Product products={products[2]}></Product>
        <Product products={products[3]}></Product>
        {/* <Product name={products[4]}></Product> */}

        {
          products.map(pd => <Product product={pd}></Product>)
        }

        <Counter></Counter>
      </header>
    </div>
  );
}

function Person(props){
  var personStyle = {
    border: '2px solid red',
    margin: '10px'
  }

  console.log(props)
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h4>{props.Tag}</h4>
    </div>
  )
}

function Invensionist(props){
  console.log(props)
  return(
    <div style={{border: '2px solid yelow', margin: '10px'}}>
      <h1>Invensionist</h1>
      <h2>Name:{props.name}-{props.tag}</h2>
      
    </div>
  )
}

function Product(props){
  console.log(props)
  const style = {
    border:'2px solid cyan',
    borderRadius:'5px',
    backgroundColor:'gray',
    height:'300px',
    width:'300px',
    float:'left'
  }
  const {name,price} = props.product;
  // console.log(name,price)
  return(
    <div style={style}>
      <h1>{name}</h1>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Counter(props){
  const [count, setCount] = useState(10);

  return(
    <div>
      <h1>{count}</h1>
    </div>
  )
}


export default App;
