import React, { useState, useEffect } from 'react'
import axios from '../api/axios'

const Providers = () => {
    const [jobs,  setJobs] = useState()

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getJobs = async () => {
            try {
                const response = await axios.get('/jobs/all', {
                    signal: controller.signal
                });
                console.log(response)
                isMounted && setJobs(response.data)
            } catch (error) {
                
            }
        }
        getJobs()

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
    

  return (
    <article>
        <h2>list of Jobs</h2>
        {jobs?.length ?
            <ul>
                {jobs.map((user, i) => <li>{user?.email}</li>)}
            </ul> :
            <p>o Jobs</p>
        }
    </article>
  )
}

export default Providers