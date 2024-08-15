import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../Components/Header';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const imgMargin = "1.5rem";
  const dashboard = false;
  const textMargin = "1.5rem";

  useEffect(() => {
    // Fake data for blog posts
    const fakePosts = [
      {
        id: 1,
        title: 'Understanding Javascript  Debouncing through everyday photography !',
        text: 'Imagine you have a friend who’s a photography enthusiast. Every time they see something interesting, they quickly click the shutter button. If they click too many times in quick succession, they end up with lots of nearly identical photos and their camera’s memory fills up fast...',
      
        date: '2024-07-13',
        link: 'https://www.linkedin.com/posts/jobayermannan_javascript-webdevelopment-coding-activity-7217943386639454208-70hK?utm_source=share&utm_medium=member_desktop',
      },
      {
        id: 2,
        title: '𝑼𝒏𝒅𝒆𝒓𝒔𝒕𝒂𝒏𝒅𝒊𝒏𝒈 𝑱𝒂𝒗𝒂𝑺𝒄𝒓𝒊𝒑𝒕 𝑪𝒍𝒐𝒔𝒖𝒓𝒆𝒔: 𝑨 𝑾𝒂𝒍𝒍𝒆𝒕 𝑴𝒆𝒕𝒂𝒑𝒉𝒐𝒓',
        text: 'Imagine you have a wallet with some money inside. The wallet represents a function in JavaScript, and the money inside are variables or functions....',
        
        date: '2023-01-27',
        link: 'https://www.linkedin.com/posts/jobayermannan_javascript-programming-webdevelopment-activity-7214259429704130560-OBme?utm_source=share&utm_medium=member_desktop',
      },
      {
        "id": 3,
        "title": "Redux Analogy",
        "text": "1. The library (redux store):\n𝘙𝘦𝘢𝘭 𝘔𝘦𝘢𝘯𝘪𝘯𝘨: The Redux store is a centralized place where the state of your application is stored...",
        "date": "2022-10-03",
        "link": "https://www.linkedin.com/posts/jobayermannan_%3F-activity-7214784420837306368-8g2V?utm_source=share&utm_medium=member_desktop"
      },
      
      {
        id: 4,
        title: ' 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐂𝐚𝐥𝐥𝐛𝐚𝐜𝐤 𝐅𝐮𝐧𝐜𝐭𝐢𝐨𝐧𝐬, 𝐀𝐬𝐲𝐧𝐜𝐡𝐫𝐨𝐧𝐨𝐮𝐬 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠, 𝐚𝐧𝐝 𝐇𝐞𝐥𝐩𝐞𝐫𝐬 𝐢𝐧 𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭',
        text: '𝐼𝑚𝑎𝑔𝑖𝑛𝑒 𝑦𝑜𝑢 a𝑟𝑒 𝑖𝑛 𝑎 𝑏𝑢𝑠𝑦 𝑘𝑖𝑡𝑐ℎ𝑒𝑛 𝑝𝑟𝑒𝑝𝑎𝑟𝑖𝑛𝑔 𝑎 𝑏𝑖𝑔 𝑚𝑒𝑎𝑙. 𝑌𝑜𝑢 a𝑟𝑒 𝑏𝑢𝑠𝑦 𝑐ℎ𝑜𝑝𝑝𝑖𝑛𝑔 𝑣𝑒𝑔𝑒𝑡𝑎𝑏𝑙𝑒𝑠 𝑤ℎ𝑒𝑛 𝑦𝑜𝑢 𝑟𝑒𝑎𝑙𝑖𝑧𝑒 𝑦𝑜𝑢 𝑛𝑒𝑒𝑑 𝑠𝑜𝑚𝑒 𝑠𝑝𝑖𝑐𝑒𝑠 𝑓𝑟𝑜𝑚 𝑡ℎ𝑒 𝑝𝑎𝑛𝑡𝑟𝑦. 𝐼𝑛𝑠𝑡𝑒𝑎𝑑 𝑜𝑓 𝑠𝑡𝑜𝑝𝑝𝑖𝑛𝑔 𝑦𝑜𝑢𝑟 𝑐ℎ𝑜𝑝𝑝𝑖𝑛𝑔, 𝑦𝑜𝑢 𝑎𝑠𝑘 𝑎 𝑘𝑖𝑡𝑐ℎ𝑒𝑛 𝑎𝑠𝑠𝑖𝑠𝑡𝑎𝑛𝑡 𝑡𝑜 𝑓𝑒𝑡𝑐ℎ 𝑡ℎ𝑒 𝑠𝑝𝑖𝑐𝑒𝑠 𝑓𝑜𝑟 𝑦𝑜𝑢. 𝑊ℎ𝑖𝑙𝑒 𝑡ℎ𝑒 𝑎𝑠𝑠𝑖𝑠𝑡𝑎𝑛𝑡 𝑔𝑜𝑒𝑠 𝑡𝑜 𝑔𝑒𝑡 𝑡ℎ𝑒 𝑠𝑝𝑖𝑐𝑒𝑠, 𝑦𝑜𝑢 𝑐𝑜𝑛𝑡𝑖𝑛𝑢𝑒 𝑐ℎ𝑜𝑝𝑝𝑖𝑛𝑔 𝑣𝑒𝑔𝑒𝑡𝑎𝑏𝑙𝑒𝑠....',
       
        date: '2024-07-10',
        link: 'https://www.linkedin.com/posts/jobayermannan_nextjs-webdevelopment-csr-activity-7216815810441355264-gI5G?utm_source=share&utm_medium=member_desktop',
      },
      {
        id: 5,
        title: ' 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐍𝐞𝐱𝐭.𝐣𝐬: 𝐂𝐒𝐑 𝐯𝐬. 𝐒𝐒𝐑 𝐭𝐡𝐫𝐨𝐮𝐠𝐡 𝐭𝐡𝐞 𝐋𝐞𝐧𝐬 𝐨𝐟 𝐓𝐕 𝐒𝐡𝐨𝐰𝐬 ',
        text: 'Think about watching your favorite TV shows. The way we experience them can help us understand Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in Next.js....',
      
        date: '2024-07-14',
        link: 'https://www.linkedin.com/posts/jobayermannan_nextjs-webdevelopment-csr-activity-7216815810441355264-gI5G?utm_source=share&utm_medium=member_desktop',
      },
 
    ];

    setPosts(fakePosts);
  }, []);

  // Group posts by year
  const postsByYear = posts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <div className="bg-[#09112C] text-white min-h-screen flex flex-col">
    <Header imgMargin={imgMargin} dashboard={dashboard} textMargin={textMargin} />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
      {Object.keys(postsByYear).map(year => (
        <section className="mb-8" key={year}>
          <h2 className="text-2xl font-bold mb-4 text-blue">{year}</h2>
          <div className="flex flex-col">
            {postsByYear[year].map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="py-4"
              >
                <a className="no-underline text-inherit" href={post.link} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-bold text-amber-500 hover:underline">{post.title}</h3>
                  <time className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                  <p className="my-2 text-base text-gray-400">{post.text}</p>
                  <span className="text-sm text-blue-400 cursor-pointer hover:text-mint">See more</span>
                </a>
                {index < postsByYear[year].length - 1 && <hr className="my-4 border-gray-700" />}
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </div>
  );
}