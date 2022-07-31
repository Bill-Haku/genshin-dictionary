import redirects from "../static/dataset/redirect-words.json";

export const getRedirectDestination = (srcWordID) => redirects[srcWordID];
