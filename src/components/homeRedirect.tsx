import * as React from 'react'
import { useNavigate  } from 'react-router-dom';
const HomeRedirect = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        navigate('/home')
    }, [])
    return (<>
    </>)
}
export default HomeRedirect