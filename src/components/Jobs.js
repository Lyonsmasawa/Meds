import React, { useState, useEffect } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useAuth from '../hooks/useAuth'

const Jobs = () => {
    const [jobs,  setJobs] = useState()
    const refresh = useRefreshToken();
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth();


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getJobs = async () => {
            try {
                const response = await axiosPrivate.get('/jobs/all', {
                    signal: controller.signal
                });
                console.log(response)
                isMounted && setJobs(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getJobs()

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
    

  return (
    <article style={{color: "black", marginTop: "100px"}}>
        <h2>list of Jobs</h2>
        {console.log(auth?.accessToken)}
        {jobs?.length ?
            <ul>
                {jobs.map((user, i) => <li>{user?.email}</li>)}
            </ul> :
            <p>o Jobs</p>
        }
        <button onClick={() => refresh()}>RefreshToken</button>
    </article>
  )
}

export default Jobs