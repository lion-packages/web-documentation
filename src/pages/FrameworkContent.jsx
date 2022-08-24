import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function FrameworkContent() {
    return <Container className='my-4 text-white'><Outlet /></Container>;
}

export default FrameworkContent;