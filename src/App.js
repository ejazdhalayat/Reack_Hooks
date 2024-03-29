
import './App.css';
import { CharacterCount } from './Components/usestate/CharacterCount';
import { ColorSwitch } from './Components/usestate/ColorSwitch';
import { ControlInput } from './Components/usestate/ControlInput';
import { Counter } from './Components/usestate/Counter';
import { SearchFilter } from './Components/usestate/SearchFilter';
import { Todo } from './Components/usestate/Todo';
import { Toggle } from './Components/usestate/Toggle';

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 border ">

      <Counter />
      <ControlInput />
      <Toggle />
      <CharacterCount />
      <Todo />
      <ColorSwitch />
      <SearchFilter />
      
    </div>
  );
}

export default App;
