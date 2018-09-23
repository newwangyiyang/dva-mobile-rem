import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import imgPath from '../assets/yay.jpg';
function IndexPage() {
  return (
    <div styleName='IndexPage'>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi voluptates eligendi iste commodi! Ab sint perferendis aperiam nobis, reprehenderit inventore, minus commodi sapiente consequuntur mollitia, alias excepturi illo aliquid?</h1>
      <Button type="primary">primary</Button>
      <img src={imgPath} alt="tupina"/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit perferendis modi unde obcaecati asperiores ad. Voluptatem, facilis sint suscipit aliquam, saepe, fugit animi officia dolores laudantium perspiciatis hic optio labore.
    </div>
  );
}

IndexPage.propTypes = {
  list: PropTypes.array
};

export default connect()(CSSModules(IndexPage, styles));
