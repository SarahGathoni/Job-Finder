import React, { useState, useEffect } from 'react';
import { FaUpload } from 'react-icons/fa';
import FileInput from '../pages/FileInput';
import axios from 'axios';
import { ChatOpenAI } from 'langchain/chat_models/openai'; // Importing OpenAI chat model

export default function Work() {
  const [res, setRes] = useState('');
  const [scrapeData, setScrapeData] = useState('');

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const apiUrl = 'http://localhost:3000/scrapper-info';
        const response = await axios.get(apiUrl);
        setScrapeData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Construct the query based on the fetched scrapeData
      const query = `Custom job search for ${scrapeData}`; // Modify this query construction as needed
      console.log(scrapeData)
      // Initialize the OpenAI model
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY; // You should provide your API key
      const model = new ChatOpenAI({ modelName: 'gpt-3.5-turbo', apiKey });

      // Send the query to the OpenAI model
      const chatResponse = await model.sendMessage(query);

      // Extract the message content from the response
      const messageContent = chatResponse.choices[0]?.message?.content;

      // Update the state with the response
      setRes(messageContent);
    } catch (error) {
      console.error('Error:', error);
      setRes('Failed to process query.');
    }
  };

  return (
    <>
      <div className='flex justify-center items-center gap-10'>
        {/* Card 1 */}
        <div className='p-6 bg-white rounded-lg shadow-lg w-[600px]'>
          <form onSubmit={handleFormSubmit}>
            <h1 className='font-bold text-2xl'>Make a custom job search</h1>
            <div className='flex search'>
              {/* Wrap the input and button in a flex container */}
              <input name="jobSearch" placeholder='senior software developer, remote' type='text' style={{ width: '400px' }} />
              <button type='submit' >Send</button>
            </div>
            <br />
            {/* Conditionally render the textarea based on the response */}
            <textarea defaultValue={res} name='' id='' cols='30' rows='10'></textarea>

          </form>
        </div>

        {/* Card 2 */}
        <div className='p-6 bg-white rounded-lg shadow-lg justify-center items-center mb-60'>
          <div className='flex justify-center items-center'>
            <h1>Upload Resume</h1>
            <FaUpload size={34} className='customPurple ml-4' />
          </div>
          <FileInput />
        </div>
        {/* Card 3 */}
        <div className='p-6 bg-white rounded-lg shadow-lg w-96 mb-60'>
          <div className='flex justify-center items-center'>
            <h1>Upload Cover Letter</h1>
            <FaUpload size={34} className='customPurple ml-4' />
          </div>
          <FileInput />
        </div>
      </div>
    </>
  );
}
