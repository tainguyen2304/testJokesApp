import React, { useEffect, useRef, useState } from 'react';
import storyApi from '../../api/storyApi';
import voteApi from '../../api/voteApi';

const Story = () => {
      const [stories, setStories] = useState([]);
      const [number, setNumber] = useState(0);
      const length = useRef();
      length.current = stories.length;

      useEffect(() => {
            const fetchData = async () => {
                  const res = await storyApi.getAll();
                  setStories(res);
            }
            fetchData()
      },[]);
      
      const handleVote = async (story,author,like) => {
            const newVote = {
                  story,
                  author,
                  like
            }
            
            await voteApi.post(newVote);
            setNumber(number + 1);
      }

      return (
            <div className='Story'>
                  <div className='wrapper-story'>
                        {
                              number < length.current
                              ? <div>
                                    <p className='content-story'> { stories[number]?.story} </p>
                                    <p>- {stories[number]?.author}</p>
                                </div>
                              :  <p style={{textAlign: "center"}}>That's all the jokes for today! Come back another day!</p>
                        } 
                  </div>
                  

                  <div className='wrapper-buttons'>
                        <div className='buttons'>

                              <button 
                                    disabled={number === length.current} 
                                    className={number !== length.current ? 'funny' : 'disable'}
                                    onClick={() => handleVote(stories[number]?.story,stories[number]?.author,true)}>
                                    This is Funny!
                              </button>

                              <button 
                                    disabled={number === stories.length} 
                                    className={number !== length.current ? 'not-funny' : 'disable'}
                                    onClick={() => handleVote(stories[number]?.story,stories[number]?.author,false)}>
                                    This is not funny.
                              </button>

                        </div>
                  </div>

            </div>
      );
}

export default Story;
