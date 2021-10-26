import './App.css';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <header className='App-friendDisplay'>
        <Card name = 'Ethan Levy' info = 'Ethan is a family friend who hung out with me during middle school building science projects. Currently he is studying Biomedical Engineering at Johns Hopkins University.' image = 'https://media-exp1.licdn.com/dms/image/C4D03AQG69Co7yA7MoA/profile-displayphoto-shrink_200_200/0/1598824972750?e=1640822400&v=beta&t=KkF_QjcSALkiM7IWcAt3fyLRdGp6S1ymGDA97FXec9U'/>
        <Card name = 'Johnny Kolettis' info = 'John is a classmate of mine who I hung out with during free periods. He is now running for student government in UChicago, and plans to study political science.' image = 'https://media-exp1.licdn.com/dms/image/C4D03AQGeA4IY6NjSYQ/profile-displayphoto-shrink_200_200/0/1532663807224?e=1639008000&v=beta&t=45Jaj3sDaEJpXf8DANydzaOv025egbiG921oYKSo2Sg'/>
        <Card name = 'Alex Kos' info = 'Alex is a friend and mentor who I got to know while working with him in the high school robotics, Fatherboards. Now in college, he practices the guitar in his spare time.' image = 'https://media-exp1.licdn.com/dms/image/C4E03AQEi0f07N_UL7A/profile-displayphoto-shrink_200_200/0/1564005023354?e=1640822400&v=beta&t=R00D2Upcn177X21llC43oPA-0GKkF1Ah-yBCa2SAbYI'/>
      </header>
    </div>
  );
}

export default App;
