import React, { createContext, useReducer, useEffect } from "react";

const WorkContext = createContext(null);

const printError = (err: unknown) => {
  // eslint-disable-next-line no-console
  console.error(err);
};
import { createClient } from "contentful";

const getWorks = async () => {
  const client = createClient({
    space: "k7xn0y4bai9d",
    accessToken: "ilgns93Xm3N1yxKgpIpZkn1iTi4j86L3n5lWKGfHW4M",
  });

  const res = await client.getEntries({ content_type: "work" });

  return {
    props: {
      work: res.items,
    },
    revalidate: 1,
  };
};

function countReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        state: getWorks(),
      };
    }

    case "decrement": {
      return { state: "Hola mundo" };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function WorkProvider({ children }) {
  useEffect(() => {
    getWorks().then((resolve) => {
      dispatch({ type: "increment" });
    });
  }, []);

  const [state, dispatch] = useReducer(countReducer, {
    state: "Initial State",
  });

  const value = { state, dispatch };

  return <WorkContext.Provider value={value}>{children}</WorkContext.Provider>;
}

export { WorkProvider, WorkContext, getWorks };
