import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
    const {setAuth, auth} = useAuth();
    console.log(auth?.AccessToken)

    const refresh = async () => {
        const response = await axios.get('/auth/refreshToken', {
            withCredentials: true
        });

        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(response)
            return{ ...prev, accessToken: response.accessToken }
        })

        return response;
    }
  return refresh
}

export default useRefreshToken