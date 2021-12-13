import Button from "./button";
import style from "./title.module.css"

function App() {
  return (
    <div>
      <h2 className={style.hugeTitle}> Hello</h2>
      <Button text="react!"/>
    </div>
  );
}

export default App;
