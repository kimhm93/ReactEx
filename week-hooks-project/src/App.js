import React, {useState} from 'react';
import './App.css';
import TextInput from "./TextInput";
/*
    index.js => webpack
    ========= (main)
    ReactDOM.render(<App/>,document.getElementById('root'));
        <App/> => return값 ==> <div>Hello</div> ==> innerHTML
    function App() {
        return(
            <div>Hello</div>
        )
    }

    index.html
        <html>
            <body>
                <div id="root"><div>Hello</div></div>
            </body>
        </html>

    index.html
        <html>
            <head>
                <script src="http://~~/ajax/react.js"></script>
                <script type="text/babel">
                    function App() {

                    }
                    ReactDOM.render(<App/>,document.getElementById('root'));
                </script>
                <script type="text/babel">
                    class App extends React.Component {

                    }
                </script>
            </head>
        </html>
 */
/*function App() {
  return (
      <div>Hello~~</div>
  );
}*/
/*const App = () => (
    <div>Hello!!!!</div>
)*/
const App = () => {
  return (
    <TextInput />
  )
}

export default App;
