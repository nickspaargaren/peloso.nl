import * as React from "react"
import '../index.css';
import { useStaticQuery, graphql } from "gatsby";

const Home = () => {

  const { skills, languages, interests, work, education } = useStaticQuery(
    graphql`
    query {

      skills: allSanitySkills {
        nodes {
          title
        }
      }

      languages: allSanityLanguages {
        nodes {
          title
        }
      }

      interests: allSanityInterests {
        nodes {
          title
        }
      }

      work: allSanityWork {
        nodes {
          title
          organization
          location
          datefrom
          dateto
        }
      }

      education: allSanityEducation {
        nodes {
          title
          location
          institution
          datefrom
          dateto
        }
      }

    }
    `
  )

  return (
    <>
      <div className="inhoud">
        <aside>

          <div className="blok">
            <h2>Skills</h2>
            {skills.nodes.map((item, key) => (
              <div className="tag" key={key}>
                {item.title}
              </div>
            ))}
          </div>

          <div className="blok">
            <h2>Languages</h2>
            {languages.nodes.map((item, key) => (
              <div className="tag" key={key}>
                {item.title}
              </div>
            ))}
          </div>

          <div className="blok">
            <h2>Interests</h2>
            {interests.nodes.map((item, key) => (
              <div className="tag" key={key}>
                {item.title}
              </div>
            ))}
          </div>

        </aside>
        <main>
          <div className="blok">
              <h2>Work</h2>
              {work.nodes.map((item, key) => (
                <div className="experience" key={key}>
                  <h3>{item.title}</h3>
                  <div>{item.organization}</div>
                  <div>{item.location}</div>
                  <div><span>{item.datefrom}</span> - <span>{item.dateto}</span></div>
                </div>
              ))}
            </div>
            <div className="blok">
              <h2>Education</h2>
              {education.nodes.map((item, key) => (
                <div className="experience" key={key}>
                  <h3>{item.title}</h3>
                  <div>{item.institution}</div>
                  <div>{item.location}</div>
                  <div><span>{item.datefrom}</span> - <span>{item.dateto}</span></div>
                </div>
              ))}
            </div>
        </main>
      </div>
    </>
  )
}

export default Home