// Then import schema types from any plugins that might expose them
import education from "./education";
import general from "./general";
import interests from "./interests";
import languages from "./languages";
import skills from "./skills";
import work from "./work";

// Then we give our schema to the builder and provide the result to Sanity
export default [skills, languages, work, education, interests, general];
