import { createSwaggerSpec } from "next-swagger-doc";

import "server-only";

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: "./**/api",
    schemaFolders: ["./**/models"],
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Cameron Slash Api",
        version: "1.0",
        description: "My api",
      },
      components: {},
      security: [],
    },
  });

  return spec;
};
