import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';

const SolSNS = ({ Component }) => {
  return (
    <>
      <Head>
        <title>SolSNS</title>
      </Head>
      <Component />
    </>
  )
};

SolSNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default SolSNS;
