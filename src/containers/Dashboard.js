import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Dashboard)