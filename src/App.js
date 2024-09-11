import WrappedContents from "./components/50-project-50=days/Contents.tsx";
import WrappedNavigation2Fifty from "./components/50-project-50=days/Navigation2Fifty.tsx"
import GlobalStyles from "./createGlobalStyle.js"

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <WrappedNavigation2Fifty/>
      <WrappedContents/>
    </div>
  );
}

export default App;
