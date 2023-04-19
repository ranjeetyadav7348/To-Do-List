import logo from './logo.svg'
import { useState } from 'react';
import './App.css';
import Plan from './components/plan';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import { AiFillDelete } from 'react-icons/ai'


function App() {
  const [text, setText] = useState('');
  const [newText, setnewText] = useState([])

  const handleChange = (e) => {
    const k = e.target.value;
    setText(k)

  }
  const handleAdd = () => {
    setnewText((prev) => {
      return [...prev, text]
    })
    setText('')
  }
  var cross = false

  const handledelete = () => {
    console.log("virat")
    cross = true;
    console.log(cross);
  }

  return (
    <div className="container-fluid my-5" >
      <div className='row'>
        <div className='col-sm-6 mx-auto text-white shadow-lg p-3'>
          <h1 className='text-center'> Today's plan</h1>
          <div className='row'>
            <div className='col-9'>
              <input type="text" className='form-control' name='notes' placeholder='Write your Plan' value={text} onChange={handleChange} />
            </div>
            <div className='col-2'>
              <button id="virat" className='btn btn-warning  px-4  font-weight-bold' onClick={handleAdd}  >ADD</button>
            </div>
            <div className='container-fluid'>
              <ul className='list-unstyled row  m-5'>
                {newText.map((z,index) => {
              
                  return (<li > <Plan name={z}/></li>)
                })
                }


              </ul>
            </div>
          </div>
        </div>

      </div>


    </div>)
}


export default App;
