// Then import schema types from any plugins that might expose them
import skills from './skills.js'
import languages from './languages.js'
import work from './work.js'
import education from './education.js'
import interests from './interests.js'
import general from './general.js'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  skills,
  languages,
  work,
  education,
  interests,
  general
]