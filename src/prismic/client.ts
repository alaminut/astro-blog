import { createClient, getRepositoryEndpoint } from "@prismicio/client"

const repoName = import.meta.env.PRISMIC_REPO_NAME;
const contentApiEndpoint = getRepositoryEndpoint(repoName);
const client = createClient(contentApiEndpoint);

export default client;
