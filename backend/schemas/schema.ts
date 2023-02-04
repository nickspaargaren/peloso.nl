// Then import schema types from any plugins that might expose them
import skills from './skills'
import languages from './languages'
import work from './work'
import education from './education'
import interests from './interests'
import general from './general'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  skills,
  languages,
  work,
  education,
  interests,
  general
]