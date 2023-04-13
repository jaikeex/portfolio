import React, { useState, useEffect, forwardRef } from 'react';
import './About.styles.scss';
import { urlFor, client } from 'client';
import { motion } from 'framer-motion';
import { useSanityData } from 'hooks';
import { Typography } from 'components';

export interface AboutProps {}

export const About = forwardRef<HTMLDivElement, AboutProps>(({}, ref): JSX.Element => {
  const { data, error, isFetching, status } = useSanityData('about');

  const [abouts, setAbouts] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const query = '*[_type=="abouts"]';
      const response = await client.fetch(query);
      setAbouts(response);
    };

    loadData();
  }, []);

  return (
    <section ref={ref} id="about">
      <div className="app__section__component">
        <Typography variant="h1">About me</Typography>
        <div className="about__intro">
          {status === 'success' && (
            <div>
              <img src={urlFor(data[0].imgUrl).url()} className="about__image" />
              <Typography variant="h2" style={{ marginBottom: '1rem', transform: 'translateY(-1rem)' }}>
                {data[0].name}
              </Typography>
              <Typography size="lg">{data[0].description}</Typography>
            </div>
          )}
        </div>
        <div className="app__profiles">
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl).url()} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
