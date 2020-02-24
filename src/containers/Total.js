import { connect } from 'react-redux'
import Total from '../components/Total'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStateToProps)(Total)