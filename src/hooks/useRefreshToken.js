import axios from '../api/axios'
import useAuth from './useAuth'

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/refreshToken', {
            withCredentials: true
        });

        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(JSON.stringify(response.accessToken))
            return{ ...prev, accessToken: response.accessToken }
        })

        return response.accessToken;
    }
  return refresh
}

export default useRefreshToken