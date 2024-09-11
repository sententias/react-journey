import WrappedContents from "./components/50-project-50-days/Contents.tsx";
import WrappedNavigation2Fifty from "./components/50-project-50-days/Navigation2Fifty.tsx"
import GlobalStyles from "./createGlobalStyle.js"

import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App () {
  return (
      <div className="App">
        <WrappedNavigation2Fifty />
        <WrappedContents />
      </div>
  );
}

export default App;
