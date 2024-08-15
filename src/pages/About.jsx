import React, { useState, useEffect } from 'react';
import SectionTitle from '../Components/SectionTitle';
import Lottie from 'react-lottie-player';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function About() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const [error, setError] = useState(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    if (portfolioData?.about?.lottieURL) {
      fetch(portfolioData.about.lottieURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch animation: HTTP status ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          setAnimationData(data);
        })
        .catch((err) => {
          console.error('Error fetching animation:', err);
          setError(err);
        });
    }
  }, [portfolioData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!portfolioData || !portfolioData.about) {
    return <div>Data not available</div>;
  }

  const { about } = portfolioData;
  const { skills, description1, description2, lottieURL } = about;

  if (!lottieURL) {
    return <div>No Lottie animation URL specified</div>;
  }

  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col mb-10">
        <div className="h-[60vh] w-1/2 sm:w-full mr-4 sm:flex sm:justify-center sm:items-center">
          {animationData ? (
            <Lottie
              loop
              animationData={animationData}
              play
              style={{ width: 320, height: 320 }}
              onError={(err) => setError(err)}
            />
          ) : (
            <div>Loading animation...</div>
          )}
          {error && <div>Error loading animation: {error.message}</div>}
        </div>
        <div className="flex flex-col gap-5 w-1/2 font-md sm:w-full">
          <p className="text-dark text-lg">
           {description1}
          </p>
          <p className="text-dark">
            {description2}
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-2xl font-medium text-amber-500">Technologies I Have Learned:</h1>
        <div className="grid grid-cols-4 sm:grid-cols-3 gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className="w-full">
              <div className="skill-name text-mint text-center">{skill.name}</div>
              <div className="progress-container bg-gray-500 h-6 rounded-lg overflow-hidden">
                <motion.div
                  className="progress-bar  h-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="flex justify-center items-center h-full text-black">
                    {skill.percentage}%
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}