import '../index.css';

import BlockContent from '@sanity/block-content-to-react';
import dayjs, { Dayjs } from 'dayjs';
import * as duration from 'dayjs/plugin/duration';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import { plural } from '../utils';

dayjs.extend(duration);

const difference = (datefrom: Dayjs, dateto: Dayjs) => {
  const totalDuration = dayjs.duration(dateto.diff(datefrom));

  let { years, months } = Object.values(totalDuration)[0];
  const { days } = Object.values(totalDuration)[0];

  if (days > 0) {
    months += 1;
  }

  if (months === 12) {
    months = 0;
    years += 1;
  }

  return `${plural(years, 'year')} ${plural(months, 'month')}`;
};

const Home = (): ReactElement => {
  const {
    general, skills, languages, interests, work, education,
  } = useStaticQuery(
    graphql`
        query {
          general: sanityGeneral {
            name
            lastname
            _rawDescription
            nationality
            residence
            birthplace
            birthdate(formatString: "D MMMM YYYY")
            age: birthdate(fromNow: true)
            image {
              asset {
                gatsbyImageData
              }
            }
            phone
            email
          }

          skills: allSanitySkills {
            nodes {
              id
              title
            }
          }

          languages: allSanityLanguages(sort: { fields: order, order: ASC }) {
            nodes {
              id
              title
              subtitle
            }
          }

          interests: allSanityInterests {
            nodes {
              id
              title
            }
          }

          work: allSanityWork(sort: { fields: datefrom, order: DESC }) {
            nodes {
              id
              title
              organization
              logo {
                asset {
                  gatsbyImageData
                }
              }
              location
              _rawDescription
              datefrom
              dateto
            }
          }

          education: allSanityEducation(
            sort: { fields: datefrom, order: DESC }
          ) {
            nodes {
              id
              title
              institution
              logo {
                asset {
                  gatsbyImageData
                }
              }
              location
              _rawDescription
              datefrom
              dateto
            }
          }
        }
      `,
  );

  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>
          {general.name}
          {' '}
          {general.lastname}
        </title>
        <meta name="description" content="Curriculum Vitae" />
      </Helmet>
      <div className="houder">
        <div className="inhoud header">
          <div className="profileimage">
            <GatsbyImage
              image={general.image.asset.gatsbyImageData}
              alt={`${general.name} ${general.lastname}`}
            />
          </div>
          <div
            className="blok"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <h1>
              {general.name}
              {' '}
              {general.lastname}
            </h1>
            {general._rawDescription && (
              <BlockContent blocks={general._rawDescription} />
            )}
          </div>
        </div>

        <div className="inhoud">
          <aside>
            <div className="blok">
              <h2>Contact</h2>
              <div className="general">
                <div>
                  <small>Nationality</small>
                  {general.nationality}
                </div>
                <div>
                  <small>Residence</small>
                  {general.residence}
                </div>
                <div>
                  <small>Place of birth</small>
                  {general.birthplace}
                </div>
                <div>
                  <small>Date of birth</small>
                  {general.birthdate}
                </div>
                <div>
                  <small>Phone number</small>
                  {general.phone}
                </div>
                <div>
                  <small>Email</small>
                  <a href={`mailto:${general.email}`}>{general.email}</a>
                </div>
              </div>
            </div>

            <div className="blok">
              <h2>Skills</h2>
              {skills.nodes.map((item) => (
                <div className="tag" key={item.id}>
                  {item.title}
                </div>
              ))}
            </div>

            <div className="blok">
              <h2>Languages</h2>
              <div className="lijst">
                {languages.nodes.map((item) => (
                  <div className="item" key={item.id}>
                    {item.title}
                    <small>{item.subtitle}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="blok">
              <h2>Interests</h2>
              {interests.nodes.map((item) => (
                <div className="tag" key={item.id}>
                  {item.title}
                </div>
              ))}
            </div>
          </aside>
          <main>
            <div className="blok" style={{ breakBefore: 'page' }}>
              <h2>Work</h2>
              <div className="experiences">
                {work.nodes.map((item) => (
                  <div key={item.id} style={{ breakInside: 'avoid' }}>
                    <div className="header">
                      <div>
                        {item.logo ? (
                          <GatsbyImage
                            image={item.logo.asset.gatsbyImageData}
                            alt={`${item.organization} logo`}
                          />
                        ) : (
                          <div className="placeholder" />
                        )}
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <div>
                          {item.organization}
                          ,
                          {item.location}
                        </div>
                        <small>
                          <i>
                            <span>
                              {dayjs(`${item.datefrom}`)
                                .format('MMM YYYY')
                                .toLowerCase()}
                            </span>
                            {' '}
                            -
                            {' '}
                            <span>
                              {item.dateto
                                ? dayjs(`${item.dateto}`)
                                  .format('MMM YYYY')
                                  .toLowerCase()
                                : 'Present'}
                            </span>
                            {' '}
                            {item.dateto ? (
                              <>
                                -
                                {' '}
                                <span>
                                  <strong>
                                    {difference(
                                      dayjs(item.datefrom),
                                      dayjs(item.dateto),
                                    )}
                                  </strong>
                                </span>
                              </>
                            ) : (
                              <>
                                -
                                {' '}
                                <span>
                                  <strong>
                                    {difference(
                                      dayjs(item.datefrom),
                                      dayjs(),
                                    )}
                                  </strong>
                                </span>
                              </>
                            )}
                          </i>
                        </small>
                        {item._rawDescription && (
                        <BlockContent blocks={item._rawDescription} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="blok" style={{ breakBefore: 'page' }}>
              <h2>Education</h2>
              <div className="experiences">
                {education.nodes.map((item) => (
                  <div key={item.id} style={{ breakInside: 'avoid' }}>
                    <div className="header">
                      <div>
                        {item.logo ? (
                          <GatsbyImage
                            image={item.logo.asset.gatsbyImageData}
                            alt={`${item.institution} logo`}
                          />
                        ) : (
                          <div className="placeholder" />
                        )}
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <div>
                          {item.institution}
                          ,
                          {' '}
                          {item.location}
                        </div>
                        <small>
                          <i>
                            <span>
                              {dayjs(`${item.datefrom}`)
                                .format('MMM YYYY')
                                .toLowerCase()}
                            </span>
                            {' '}
                            -
                            {' '}
                            <span>
                              {item.dateto
                                ? dayjs(`${item.dateto}`)
                                  .format('MMM YYYY')
                                  .toLowerCase()
                                : 'Present'}
                            </span>
                            {' '}
                            {item.dateto ? (
                              <>
                                -
                                {' '}
                                <span>
                                  <strong>
                                    {difference(
                                      dayjs(item.datefrom),
                                      dayjs(item.dateto),
                                    )}
                                  </strong>
                                </span>
                              </>
                            ) : (
                              <>
                                -
                                {' '}
                                <span>
                                  <strong>
                                    {difference(dayjs(item.datefrom), dayjs())}
                                  </strong>
                                </span>
                              </>
                            )}
                          </i>
                        </small>
                        {item._rawDescription && (
                          <BlockContent blocks={item._rawDescription} />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
