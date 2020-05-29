import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as dataActions from '../../actions';
import Body from '../../components/body'

const mapStateToProps = ({data}) => {
    return {
        categories: data.categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(dataActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
