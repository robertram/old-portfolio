import React, { useContext, useEffect, useReducer, useState } from "react";
import Tag from "@/src/component/Tag/tag_component";
import "./work_component.scss";
import BigCard from "@/src/component/BigCard/bigCard_component";
import { WorkContext } from "../../../../contexts/WorkContext";

const Work = () => {
  const { value, state, dispatch } = useContext(WorkContext);
  const [work, setWork] = useState(state.work);

  useEffect(() => {
    //dispatch({ type: "increment" });
    console.log("hola works", state);
    console.log("hola ", JSON.stringify(state.work, null, 4));
    console.log("work state", work);
  }, []);

  return (
    <div className="Work section" id="work">
      <div className="grid">
        <div className="col-desk-12 col-mob-4">
          <h1 className="title">Work</h1>
        </div>
        <div className="col-desk-12 col-mob-4">
          <div className="Work__bigCardsContainer grid">
            {state &&
              state.work?.map((item, index) => (
                <div
                  key={index}
                  className="Work__bigCardContainer col-desk-6 col-mob-4"
                >
                  <BigCard
                    image={item.fields?.image?.fields.file.url}
                    title={item.fields.title}
                    description={item.fields.description}
                    date={item.fields.date}
                    link={item.fields.link}
                    tags={item.fields.tags}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Work.contextType = WorkContext;

export default Work;
