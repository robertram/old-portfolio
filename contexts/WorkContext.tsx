import { createContext, ReactNode, useState } from "react";
import { createClient } from "contentful";

type TProps = {
  children: ReactNode;
};

type TContent = {
  fetchWorks: Function;
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "work" });

  return {
    props: {
      something: res,
      work: res.items,
    },
    revalidate: 1,
  };
}

const WorkContext = createContext({} as TContent);

const WorkProvider = ({ children }: TProps) => {
  const [works, setWorks] = useState([]);

  const fetchWorks = async () => {
    try {
      //setWorks(work);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WorkContext.Provider
      value={{
        fetchWorks,
      }}
    >
      {children}
    </WorkContext.Provider>
  );
};

export { WorkProvider, WorkContext };
