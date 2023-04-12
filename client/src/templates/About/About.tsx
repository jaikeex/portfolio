import React, { useState, useEffect, forwardRef } from 'react';
import './About.styles.scss';
import { urlFor, client } from 'client';
import { motion } from 'framer-motion';
import { withNavigationDots } from 'wrapper/withNavigationDots/withNavigationDots';

export interface AboutProps {}

export const About = forwardRef<HTMLDivElement, AboutProps>(({}, ref): JSX.Element => {
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
    <div ref={ref} id="about" className="app__section">
      <div className="app__section__component">
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
    </div>
  );
});
