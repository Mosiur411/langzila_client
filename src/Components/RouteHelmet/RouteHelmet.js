import React from 'react';
import { Helmet } from 'react-helmet';
const RouteHelmet = ({ pages }) => {
    return (
        <Helmet><title>{pages}</title></Helmet>
    );
};

export default RouteHelmet;