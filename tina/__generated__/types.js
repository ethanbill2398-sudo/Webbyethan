export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomePartsFragmentDoc = gql`
    fragment HomeParts on Home {
  __typename
  hero {
    __typename
    badge
    headline
    byline
    description
    cta_primary
    cta_secondary
    stats {
      __typename
      value
      label
    }
  }
  pain {
    __typename
    label
    headline
    description
    description2
    cards {
      __typename
      icon
      title
      body
    }
  }
  services {
    __typename
    label
    headline
    cards {
      __typename
      icon
      tag
      title
      description
    }
    everything_included {
      __typename
      title
      description
      features
    }
  }
  results {
    __typename
    label
    headline
    description
    description2
    cta
    stats {
      __typename
      value
      label
    }
    promo_card {
      __typename
      title
      description
    }
  }
  process {
    __typename
    label
    headline
    steps {
      __typename
      number
      title
      description
    }
    cta
  }
  testimonials {
    __typename
    label
    headline
    items {
      __typename
      quote
      name
      company
      initial
    }
  }
  faq {
    __typename
    label
    headline
    items {
      __typename
      question
      answer
    }
  }
  footer {
    __typename
    tagline
    email
    copyright
  }
}
    `;
export const HomeDocument = gql`
    query home($relativePath: String!) {
  home(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomeParts
  }
}
    ${HomePartsFragmentDoc}`;
export const HomeConnectionDocument = gql`
    query homeConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomeFilter) {
  homeConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomeParts
      }
    }
  }
}
    ${HomePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    home(variables, options) {
      return requester(HomeDocument, variables, options);
    },
    homeConnection(variables, options) {
      return requester(HomeConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.2/content/0a640fe6-389f-49ec-aa70-0774762fc8d7/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
