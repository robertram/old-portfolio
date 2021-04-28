import React from "react";
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

export { getWorks };
