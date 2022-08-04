import 'source-map-support/register';

import mercurius from 'mercurius';
import {loadSchemaFiles} from 'mercurius-codegen';
import {fastify} from 'fastify';

export const app = fastify({});

export const setup = async () => {
  const {schema} = loadSchemaFiles('./src/graphql/**/*.gql', {});

  await app.register(mercurius, {
    schema,
    federationMetadata: true,
  });
};
