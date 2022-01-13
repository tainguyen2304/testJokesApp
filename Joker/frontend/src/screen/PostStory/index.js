import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import storyApi from '../../api/storyApi';
import './index.scss';


const PostStory = () => {
      const [story, setStory] = useState('');
      const [author, setAuthor] = useState('');
      const [show, setShow] = useState(false);

      const handleClick = () => {
            if(story) {
                  setShow(true);
            }
      }

      const handlePost = async () => {
            const newauthor = author ? author : 'Incognito'
            const newStory = {
                  story,
                  author: newauthor
            }
            await storyApi.post(newStory);
            console.log(newStory)
            setShow(false);
            setStory('');
            setAuthor('');
      }
      return (
            <div className='bg-postStory'>
                  <div className='Container-postStory'>

                        <h1 className='title'>What fun things do you have today?</h1>
                        <textarea 
                              value={story}
                              className='content-story' 
                              placeholder='Your story' 
                              rows="8" 
                              onChange={(e) => setStory(e.target.value)}
                              />
                        <input 
                              value={author} 
                              placeholder='Author'
                              onChange={(e) => setAuthor(e.target.value)}
                        />
                        <div className='buttons'>
                              <button className='submit' onClick={handleClick}>Post</button>
                              <button>
                                     <Link to ='/'>Read Jokes</Link>
                              </button>
                        </div>   
                  </div>

                  { show === true && 
                        <div className='Box-check'>
                              <h1>Continue?</h1>
                              <div className='buttons'>
                                    <button onClick={handlePost} >Yes</button>
                                    <button onClick={() => setShow(false)}>Cancel</button>
                              </div>
                        </div> 
                  }

            </div>
      );
}

export default PostStory;
