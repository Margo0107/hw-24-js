import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import SearchFrom from "./components/searchForm";
import Result from "./components/result";

function App() {
  return (
    <div className="container mt-4">
      <Header />
      <SearchFrom />
      <Result />
    </div>
  );
}
export default App;
