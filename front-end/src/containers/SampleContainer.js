import React, {Component} from 'react';

//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sampleActions from 'store/modules/sample';

class SampleContainer extends Component {
    handleUserMenu = () => {
        const { CommonActions } = this.props;
        CommonActions.userMenuModal();
    }

    render() {
        const {visible} = this.props;
        const { handleUserMenu } = this;
        return (
            <div />
        );
    }
}

export default connect(
    (state) => ({
        visible: state.common.getIn(['modal', 'visible'])
    }),
    (dispatch) => ({
        SampleActions: bindActionCreators(sampleActions, dispatch)
    })
)(SampleContainer);

