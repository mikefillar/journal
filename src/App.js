// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import FunctionalComp from './components/FunctionalComp';
// import ClassComp from './components/ClassComp';
// import Greetings from './components/Greetings';
// import ArrayNumber from './components/ArrayNumber';
// import ArrayStudent from './components/ArrayStudent';
import SchoolBoard from './components/SchoolBoard';
import BoardData from './components/BoardData';
import ContacCardMain from './components/ContacCardMain';

//function App() is main component (default function app)
//two types of component ->class comment & class component
//react is made up of multiple component and each component can contain html and javascript using jsx
// class (normal) / Class(ReactJS)
function App() {
let boardComponents = BoardData.map(board => {
    return <SchoolBoard ID={board.ID} category={board.category} post={board.post}/>
  })
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
      <ContacCardMain/>      
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category</th>
              <th>Post</th>
            </tr>
          </thead>
          <tbody>
          {boardComponents}
          </tbody>
      </table>
  
  {/* <h2>SchoolBoard</h2>
        <SchoolBoard category="Current Events" post="Our Current Event is RectJS"/>
        <SchoolBoard category="Announcements" post="Our announcement today   is RectJS"/>
        <SchoolBoard category="Quotes for the day" post="Just Dont"/>
        <SchoolBoard category="" post="We will keep you posted"/> */}

        {/* <Greetings/>
        <ArrayNumber/>
        <ArrayStudent/>
        <FunctionalComp/>
        <ClassComp/> */}
      </header>
      <Footer/>
    </div>
  );
}

export default App;
