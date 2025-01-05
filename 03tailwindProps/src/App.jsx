import "./App.css";
import Card from "./components/Card";

function App() {


  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl">
        Hii My Name is Ayush
      </h1>
      <Card price ="$109" orignalPrice="$150" />
      <Card price ="$98"/> 
      

    </>
  );
}

export default App;
