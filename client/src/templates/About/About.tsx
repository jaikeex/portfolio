import React, { useState, useEffect } from 'react';
import './About.styles.scss';
import { urlFor, client } from 'client';
import { motion } from 'framer-motion';
import { withNavigationDots } from 'wrapper/withNavigationDots/withNavigationDots';

export interface AboutProps {}

export const About: React.FC<AboutProps> = withNavigationDots(
  ({}): JSX.Element => {
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
      <React.Fragment>
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
      </React.Fragment>
    );
  },
  { id: 'about' }
);
