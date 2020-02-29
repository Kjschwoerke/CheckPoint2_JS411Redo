import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { removeBusiness } from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)