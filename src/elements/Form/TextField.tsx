import React from 'react';
import Form from 'react-bootstrap/Form';

const TextField = React.forwardRef((props: any, ref: any) => {
    return (
      <Form.Group controlId={`${props.id} || ${props.name}`}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props} />
        {props.error && (
          <Form.Text className='text-danger'>{props.error}</Form.Text>
        )}
      </Form.Group>
    );
  });


export default TextField;