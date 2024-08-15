import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Input, Button, message } from 'antd';
import SectionTitle from '../Components/SectionTitle';
import { useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../redux/rootSlice';
import axios from 'axios';
const { TextArea } = Input;

export default function MessageMe() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [animationTriggered, setAnimationTriggered] = useState(false); // State to control animation
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(ShowLoading());
      const response = await axios.post(`${API_BASE_URL}/send-message`, formData);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setFormData({ name: '', email: '', message: '' });
        setAnimationTriggered(true); 
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <SectionTitle title="Contact Me" />
      <motion.div
        initial={animationTriggered ? { opacity: 0, y: 20 } : {}} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card
          title="Reach Out to Me"
          bordered={true}
          style={{ width: '100%', borderColor: '#ADD8E6', backgroundColor: '#ADD8E6' }}
          styles={{ header: { backgroundColor: '#09112C', color: '#98FF98' } }} 
          className="rounded-lg title-class"
        >
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginBottom: '1rem', backgroundColor: '#09112C', color: 'white' }}
            />
            <Input
              placeholder="Your Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: '1rem', backgroundColor: '#09112C', color: 'white' }}
            />
            <TextArea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              style={{ marginBottom: '1rem', backgroundColor: '#09112C', color: 'white' }}
            />
            <Button type="primary" htmlType="submit" className='unique-button text-mint' loading={false}>
              Send Message
            </Button>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}