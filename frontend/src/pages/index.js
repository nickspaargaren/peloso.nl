import * as React from "react"
import '../index.css';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const Home = () => {

  const { general, skills, languages, interests, work, education } = useStaticQuery(
    graphql`
    query {

      general: sanityGeneral {
        name
        nationality
        residence
        lastname
        birthplace
        birthdate
        image {
          asset {
            fluid(maxWidth: 200, maxHeight: 200, toFormat: WEBP) {
              base64
              aspectRatio
              src
              srcSet
              sizes
              srcSetWebp
              srcWebp
            }
          }
        }
      }

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
          datefrom(formatString: "DD MMM YYYY")
          dateto(formatString: "DD MMM YYYY")
        }
      }

      education: allSanityEducation {
        nodes {
          title
          location
          institution
          datefrom(formatString: "DD MMM YYYY")
          dateto(formatString: "DD MMM YYYY")
        }
      }

    }
    `
  )

  return (
    <div className="houder">
      <div className="inhoud header">
        <div className="profileimage"><Img fluid={general.image.asset.fluid} alt="" loading="lazy" /></div>
        <div className="blok">
          <h1>{general.name} {general.lastname}</h1>
          <div>{general.nationality}</div>
          <div>{general.residence}</div>
          <div>{general.birthplace}</div>
          <div>{general.birthdate}</div>
          <div>{general.phone}</div>
          <div>{general.email}</div>
        </div>
      </div>

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
    </div>
  )
}

export default Home