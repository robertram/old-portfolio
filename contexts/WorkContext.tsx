import React, { createContext, useEffect, useState } from "react";
import { createClient } from "contentful";

const WorkContext = createContext(null);

const client = createClient({
  space: "k7xn0y4bai9d",
  accessToken: "ilgns93Xm3N1yxKgpIpZkn1iTi4j86L3n5lWKGfHW4M",
});

const getWorks = async () => {
  const res = await client.getEntries({ content_type: "work" });
  console.log("client", client.getSpace());

  return {
    work: res.items,
  };
};

function countReducer(state, action) {
  switch (action.type) {
    case "increment": {
      console.log("action", action.type);
      const a = getWorks();
      a.then((response) => {
        console.log("response", response.work);
        if (response) {
          return { count: state.count + 1, works: response.work };
        }
      });
    }

    case "decrement": {
      return { count: state.count - 5 };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const WorkProvider = ({ children }) => {
  const [state, setState] = useState({
    count: 0,
    work: null,
  });

  useEffect(() => {
    client.getEntries({ content_type: "work" }).then((res) => {
      console.log("res", res.items);
      setState({ ...state, work: res.items });
    });
  }, []);

  const value = { state };

  return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>;
};

export { WorkProvider, WorkContext };
