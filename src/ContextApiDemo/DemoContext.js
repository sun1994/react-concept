import { useContext } from "react";

function DemoContext(props) {
  
  const val = useContext(props.context)
  val.email = "a@a.com"
  return (
    <div className="DemoContext">
      {val.name} - {val.email}
    </div>
  );
}

export default DemoContext;
