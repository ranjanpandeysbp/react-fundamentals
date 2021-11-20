import React from 'react';
import './App.css';
import HelloFunctional from './components/HelloFunctional';
import HelloClass from './components/HelloClass';
//import HelloES6 from './components/HelloFunctionalES6';

//named import should be always imported within {}
import { HelloFunctionalES6 } from './components/HelloFunctionalES6';
import Display from './components/Display';

import Welcome from './components/Welcome';
import Count from './components/Count';
import FormComponent from './components/FormComponent';

function App() {
  return (
    <div className="App">
      {/*<h2>Hello APP Component</h2>
      <HelloFunctional></HelloFunctional>*/}
      {/*<HelloFunctional></HelloFunctional>
      <HelloFunctional></HelloFunctional>*/}
      {/*<HelloFunctional />
      <HelloClass name="Max" age="22" />
      <HelloClass name="Jane" age="24" />*/}
      {/*<HelloES6 />*/}
      {/*<HelloFunctionalES6 />*/}

      {/*<Display firstName="John" lastName="Doe" age="35">
        <p>Some text data from John</p>
      </Display><br />
      <Display firstName="Peter" lastName="Warry" age="39">
        <input type="text" placeholder="Enter your details" />
      </Display>*/}

      {/* <Welcome /> */}
      {/* <Count /> */}
      <FormComponent />
    </div>
  );
}

export default App;
