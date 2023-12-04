import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './Welcome';
import Comment from "./Comment";


const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = (
    <div>
      <h1>hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  root.render(element)
}
// setInterval(tick, 1000)

const element = (
  <div>
    <Welcome name='Nhan' age={20} />
    <Welcome name='Phuc' age='17' />
    <Welcome name='Nhi' age='22' />
  </div>
)
const commentElement = (
  <Comment
    author={{
      name: "Bard",
      avatarUrl: "https://avatars.githubusercontent.com/bard",
    }}
    text="This is a test comment."
    date="2023-12-03T11:22:00Z" // Replace with actual date
  />
);
root.render(commentElement);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
