import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function LibraryContent() {
    return <Container>
        <Outlet />
    </Container>
}

export default LibraryContent