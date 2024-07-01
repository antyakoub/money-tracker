import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [datetime,setDatetime] =  useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
    fetch(url, {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime
      })
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        console.log('result', json);
      });
    });
    
  }
  return (
    <main>
      {/* Display the current balance */}
      <h1>$400<span>.00</span></h1> 
      
      {/* Form to add a new transaction */}
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          {/* Input for transaction title and amount */}
          <input type="text" 
                 value={name} 
                 onChange={ev => setName(ev.target.value)}
                 placeholder={'+200 new samsung tv'}/>
          
          {/* Input for date and time of the transaction */}
          <input value={datetime}
                 type="datetime-local"
                 onChange={ev => setDatetime(ev.target.value)} />
        </div>
        
        {/* Input for transaction description */}
        <div className='Description'>
          <input type="text"
                value={description}
                onChange={ev => setDescription(ev.target.value)}
                placeholder={'description'}/>
        </div>
        
        {/* Submit button for the form */}
        <button type='submit'>Add new transaction</button>
      </form>
      
      {/* Container for the list of transactions */}
      <div className='transactions'>
        
        {/* Single transaction item */}
        <div className='transaction'>
          {/* Left side of the transaction item */}
          <div className='left'>
            {/* Transaction name */}
            <div className='name'>New Samsung TV</div>
            
            {/* Transaction description */}
            <div className='description'> it was time for new tv</div>
          </div>
          
          {/* Right side of the transaction item */}
          <div className='right'>
            {/* Transaction amount with color coding for expense */}
            <div className='price red'>-$500</div>
            
            {/* Transaction date and time */}
            <div className='datetime'>2024-3-18 15:45</div>
          </div>
        </div>
        
        {/* Repeat for additional transactions */}
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Gig job new website</div>
            <div className='description'> Freelance Work</div>
          </div>
          <div className='right'>
            <div className='price green'>+$400</div>
            <div className='datetime'>2024-3-18 15:45</div>
          </div>
        </div> 
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'> it was time for new phone</div>
          </div>
          <div className='right'>
            <div className='price red'>-$900</div>
            <div className='datetime'>2024-3-18 15:45</div>
          </div>
        </div>   
      </div>  
    </main>
  );
}

export default App;
