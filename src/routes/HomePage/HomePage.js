import React from 'react';
import { connect } from 'dva';
import styles from './HomePage.less';
import CSSModules from 'react-css-modules';

class HomePage extends React.Component {
    render() {
        return (
            <div styleName='h'>
                HOMEPAGE
            </div>
        )
    }
}

export default connect()(CSSModules(HomePage, styles));

