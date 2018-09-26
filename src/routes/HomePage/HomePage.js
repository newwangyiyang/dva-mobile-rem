import React from 'react';
import { connect } from 'dva';
import styles from './HomePage.less';
import CSSModules from 'react-css-modules';

import { Toast, Button } from 'antd-mobile';

class HomePage extends React.Component {
    render() {
        return (
            <div styleName='h'>
                <Button onClick={() => {
                    Toast.loading('加载中...', 3);
                }}>点击</Button>
            </div>
        )
    }
}

export default connect()(CSSModules(HomePage, styles));

