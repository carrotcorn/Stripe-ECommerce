import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const StoreName = ({ storeName }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    <h2 className="section-title">{storeName}</h2>
  </Fade>
);

StoreName.propTypes = {
  StoreName: PropTypes.string.isRequired,
};

export default StoreName;
