import React from "react";
import SplitText from "./SplitText"

export default function Section({ id, item, paddingTop }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id} style={{marginTop:paddingTop}}>
        {item}
      </div>
    </div>
  );
}