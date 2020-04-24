import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
  return(
      <Link to="/pizza">
        <Button color="success">Order Pizza</Button>
      </Link>
  );
}

export default CTA;