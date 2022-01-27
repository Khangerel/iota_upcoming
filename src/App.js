import logo from './logo.svg';
import './App.css';

let version = 0; // tinyMCE test
// let version = 0; // upcoming
function App() {
  if (version == 0) {
    return (
      <div className="App">
        <header className="App-header">
          <p className="maintext">
            Independent, Optimized, Trustworthy, Apolitical
          </p>
          <div className="bottomcenter">
            <img src="https://newhippostorage.s3.ap-east-1.amazonaws.com/upload/newfeature/iotalogo.png" alt="logo" width="220" />
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className="Tinycontainer">
        <h1><strong>Mongolian first Wedding&nbsp;</strong></h1>
        <p>&nbsp;</p>
        <p style={{textAlign: "left"}}><img style={{float: "left"}} title="history_image.png" src="https://newhippostorage.s3.ap-east-1.amazonaws.com/upload/newfeature/iotalogo.png" alt="first wedding of mongolia" width="362" height="241" />&nbsp; &nbsp; &nbsp;1. Hello, its me.</p>
        <p style={{textAlign: "left"}}>&nbsp; &nbsp; &nbsp;Write text like a pro. Happy writing!</p>
        <p style={{textAlign: "left"}}>&nbsp; &nbsp; &nbsp;2021-11-22</p>
      </div>
    );
  }

}

export default App;
