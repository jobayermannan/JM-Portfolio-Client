import React, { useState, useEffect } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { useSelector } from 'react-redux';
import { Card, Row, Col } from 'antd';
import { useMediaQuery } from 'react-responsive';

export default function Experiences() {
  const [selectItemIndex, setSelectItemIndex] = useState(0);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const { portfolioData } = useSelector(state => state.root);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  const { experiences } = portfolioData;
  const educationData = [
    { title: 'SSC', institution: 'Monipur High School and College', year: '2017' },
    { title: 'HSC', institution: 'Monipur High School and College', year: '2020' },
    { title: 'Bachelor', institution: 'Green University of Bangladesh', year: '2022-present' },
  ];
  
  // Condition to render education cards if there are no experiences
  if (!experiences || experiences.length === 0) {
    return (
      <div className='flex flex-col gap-5'>
        <SectionTitle title="Education" />
        <Row gutter={[16, 16]}>
          {educationData.map((education, index) => (
            <Col xs={24} sm={12} md={8} lg={8} key={index}>
              <Card
                title={<span className="text-mint text-md" style={{ backgroundColor: '#09112C' }}>{education.title}</span>}
                bordered={true}
                style={{
                  borderColor: '#ADD8E6',
                  backgroundColor: '#09112C',
                  transform: hoveredCardIndex === index ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.3s ease',
                }}
                className="rounded-lg shadow-lg"
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                <div className="bg-[#09112C] text-white p-4 rounded-lg">
                  <div className="flex justify-between items-center w-full">
                    <h1 className="text-orange-400 text-sm flex-grow">{education.institution}</h1>
                    <span className="text-white text-normal flex-shrink-0 ml-2">{education.year}</span>
                  </div>
                  <p className="text-white text-normal">{education.description}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-5'>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className='flex flex-col gap-10 border-l-[2px] border-[#fbfbfb3a] w-1/3 sm:w-full sm:flex-row sm:overflow-x-scroll sm:items-center'>
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setSelectItemIndex(index)}
              className='cursor-pointer focus:outline-none sm:flex-shrink-0'
              style={{ minWidth: '250px' }} // Ensure each button has a minimum width, adjust as needed
            >
              <h1
                className={`text-lg px-5 py-3 ${selectItemIndex === index ? "text-mint bg-[#add8e62b] border-mint border-l-[3px] -ml-[2px]" : "text-white"}`}
              >
                {experience.period}
              </h1>
            </button>
          ))}
        </div>

        <Card
          title={<span className="text-mint text-md">{experiences[selectItemIndex].title}</span>}
          bordered={true}
          style={{ width: '100%', borderColor: '#ADD8E6', backgroundColor: '#ADD8E6' }}
          styles={{ header: { backgroundColor: '#09112C', color: '#09112C' } }}
          className="rounded-lg shadow-lg"
        >
          <div className="bg-[#09112C] text-white p-4 rounded-lg">
            <h1 className="text-orange-400 text-lg">{experiences[selectItemIndex].company}</h1>
            <p className="text-white text-normal">{experiences[selectItemIndex].description}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}