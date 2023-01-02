/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "query People($first: Int!) {\n      allPeople(first: $first) {\n        people {\n          name\n          birthYear\n          gender\n        }\n      }\n    }": types.PeopleDocument,
    "query allPlanetsQuery($first: Int!) {\n      allPlanets(first: $first) {\n        planets {\n          name \n          residentConnection {\n            residents {\n              name\n              starshipConnection {\n                starships {\n                  pilotConnection {\n                    pilots {\n                      \n                      name\n                    }\n                  }\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ": types.AllPlanetsQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query People($first: Int!) {\n      allPeople(first: $first) {\n        people {\n          name\n          birthYear\n          gender\n        }\n      }\n    }"): (typeof documents)["query People($first: Int!) {\n      allPeople(first: $first) {\n        people {\n          name\n          birthYear\n          gender\n        }\n      }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allPlanetsQuery($first: Int!) {\n      allPlanets(first: $first) {\n        planets {\n          name \n          residentConnection {\n            residents {\n              name\n              starshipConnection {\n                starships {\n                  pilotConnection {\n                    pilots {\n                      \n                      name\n                    }\n                  }\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "): (typeof documents)["query allPlanetsQuery($first: Int!) {\n      allPlanets(first: $first) {\n        planets {\n          name \n          residentConnection {\n            residents {\n              name\n              starshipConnection {\n                starships {\n                  pilotConnection {\n                    pilots {\n                      \n                      name\n                    }\n                  }\n                  name\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  "];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;