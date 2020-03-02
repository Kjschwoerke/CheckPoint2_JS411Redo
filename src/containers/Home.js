import { connect } from 'react-redux'
import Home from '../components/Home'
import { removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export default connect(mapStateToProps)(Home)