import './App.css'
import IdCard from './IdCard';
import Greeting from './Greeting';
import Random from './Random';

function App() {
  return (
    <>
      <h1>Hello!</h1>

      <section className="iteration-1">
        <h2 className="iteration-title">IdCard</h2>

        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </section>

      <section className="iteration-1">
        <h2 className="iteration-title">Greeting</h2>

        <Greeting lang="de">Ludwig</Greeting>
        <Greeting lang="fr">François</Greeting> 
      </section>



      <section className="iteration-3">
        <h2>Random</h2>

        <Random min={1} max={6}/>

        <Random min={1} max={100}/>
      </section>
    </>
    

  );
}

export default App;
