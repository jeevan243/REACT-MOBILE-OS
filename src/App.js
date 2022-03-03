import logo from './logo.svg';
import './App.css';

function App() {

  const os = "Mobile operating system";
  const osArr = ["Android", "Blackberry", "iPhone", "windows Phone"];

  const mfg = "Mobile Manufacturers";
  const mfgArr = ["samsung", "HTC", "Micromax", "Apple"];


  return ([
    <div className='mobileOs'>
      <h1>{os}</h1>
      <div>{osArr.map((el) => (
        <MobileOs list={el} />
      ))}</div>
    </div>,


    <div className='mfg'>
      <h1>{mfg}</h1>
      <div>{mfgArr.map((el) => (
        <MobileOs list={el} />
      ))}</div>

    </div>

  ]
  )
}

function MobileOs({ list }) {
  return (
    <li>{list}</li>

  )

}


export default App;
