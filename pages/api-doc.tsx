import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import 'swagger-ui-react/swagger-ui.css';
import SwaggerUI from 'swagger-ui-react';

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: 'pages/api',
    schemaFolders: ['models'],
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Cameron Slash API',
        version: '1.0',
      },
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;