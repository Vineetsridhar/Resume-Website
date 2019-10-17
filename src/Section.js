import React from "react";

export default function Section({ id, item, paddingTop }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id} style={{marginTop:paddingTop}}>
        {item}
      </div>
    </div>
  );
}