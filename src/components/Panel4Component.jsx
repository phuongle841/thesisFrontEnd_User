import "../styles/Panel4Component.css";
import Panel4ComponentCell from "./Panel4ComponentCell";
function Panel4Component(pros) {
  pros.data;
  return (
    <div className="Panel4Component">
      <h4>title</h4>

      <div className="Panel4ComponentContainer">
        {pros.data.map((item) => {
          return (
            <Panel4ComponentCell
              link={item.link}
              title={item.title}
              key={item.link}
            ></Panel4ComponentCell>
          );
        })}
      </div>

      <p>see more</p>
    </div>
  );
}
export default Panel4Component;
