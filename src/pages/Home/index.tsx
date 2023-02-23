import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'routes';
import TextField from 'elements/Form/TextField';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'elements/Button/PrimaryButton';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { FormSection, ModalWrapper } from 'pages/Home/style';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  return(
    <>
    <Button type='button' onClick={() => navigate(AppRoutes.logout)}>Logout</Button>
    <h1>Page1</h1>
    <h2>Table</h2>
    <Table variant='dark' striped bordered>
      <thead>
        <tr>
          <td>Column 1</td>
          <td>Column 2</td>
          <td>Column 3</td>
          <td>Column 4</td>
          <td>Column 5</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>User 1 data</td>
          <td>User 1 data</td>
          <td>User 1 data</td>
          <td>User 1 data</td>
          <td><button onClick={() => {setShowModal(true)}}>Plus</button></td>
        </tr>
        <tr>
          <td>User 2 data</td>
          <td>User 2 data</td>
          <td>User 2 data</td>
          <td>User 2 data</td>
          <td><button onClick={() => {setShowModal(true)}}>Plus</button></td>
        </tr>
        <tr>
          <td>User 3 data</td>
          <td>User 3 data</td>
          <td>User 3 data</td>
          <td>User 3 data</td>
          <td><button onClick={() => {setShowModal(true)}}>Plus</button></td>
        </tr>
      </tbody>
    </Table>
    <ModalWrapper show={showModal} onHide={handleModalClose} dialogClassName="modal-90w">
      <Modal.Header closeButton>
        <Modal.Title>Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormSection>
          <Row>
            <Col lg='4'>
              <TextField label='Company Name' name='company_name' />
            </Col>
            <Col lg='2'>
              <TextField label='Customer ID' name='customer_id' />
            </Col>
          </Row>
          <Row>
            <Col lg='4'>
              <TextField label='Address Line 1' name='address_line_1' />
            </Col>
            <Col lg='2'>
              <TextField label='Type' name='type' />
            </Col>
          </Row>
          <Row>
            <Col lg='4'>
              <TextField label='Address Line 2' name='address_line_2' />
            </Col>
            <Col lg='2'>
              <TextField label='Contact' name='contact' />
            </Col>
            <Col lg='2'>
              <TextField label='Position' name='position' />
            </Col>
          </Row>
          <Row>
            <Col lg='4'>
              <TextField label='Suburb' name='suburb' />
            </Col>
            <Col lg='2'>
              <TextField label='Phone' name='phone' />
            </Col>
            <Col lg='2'>
              <TextField label='Fax' name='fax' />
            </Col>
            <Col lg='2'>
              <TextField label='Mobile' name='mobile' />
            </Col>
          </Row>
          <Row>
            <Col lg='2'>
              <TextField label='State' name='state' />
            </Col>
            <Col lg='2'>
              <TextField label='Postcode' name='postcode' />
            </Col>
          </Row>
          <Row>
            <Col lg='4'>
              <TextField label='Email' name='email' />
            </Col>
            <Col lg='2'>
              <TextField label='Voucher Expiry' name='voucher_expiry' />
            </Col>
            <Col lg='2'>
              <TextField label='Arrears' name='arrears' />
            </Col>
          </Row>
          <Row>
            <Col lg='4'>
              <TextField label='Web' name='web' />
            </Col>
            <Col lg='2'>
              <TextField label='Code' name='code' />
            </Col>
          </Row>
          <Row>
            <Col lg='2'>
              <TextField label='No of Kids' name='no_of_kids' />
            </Col>
            <Col lg='2'>
              <TextField label='Rating' name='rating' />
            </Col>
            <Col lg='2'>
              <TextField label='List' name='list' />
            </Col>
            <Col lg='2'>
              <TextField label='Last Catalogue' name='last_catalogue' />
            </Col>
          </Row>
          <Row>
            <Col lg='6'>
              <TextField label='Comment' name='comment' />
            </Col>
          </Row>
          
          <p>Contacts</p>
          <div>
            <Row>
              <div className='side-by-side'>
                <p>Progress Report</p>
                <Col lg='2'>
                  <input name='progress_report' className='w-100' />
                </Col>
                <Col lg='6'>
                  <input name='progress_report_2' className='w-100' />
                </Col>
              </div>
            </Row>
            <Row>
              <div className='side-by-side'>
                <p>TM F/up Date</p>
                <Col lg='2'>
                  <input name='tm_date' className='w-100' />
                </Col>
                <Col lg='6'>
                  <input name='tm_date_2' className='w-100' />
                </Col>
              </div>
            </Row>
            <Row>
              <div className='side-by-side'>
                <p>Appt Date/Time</p>
                <Col lg='2'>
                  <input name='time' className='w-100' />
                </Col>
                <Col lg='2'>
                  <input name='appt_time_2' className='w-100' />
                </Col>
                <Col lg='4'>
                  <input name='appt_time_3' className='w-100' />
                </Col>
              </div>
            </Row>
          </div>
          <div>
            <Row>
              <div className='side-by-side'>
                <p>Progress Report</p>
                <Col lg='2'>
                  <input name='progress_report' className='w-100' />
                </Col>
                <Col lg='6'>
                  <input name='progress_report_2' className='w-100' />
                </Col>
              </div>
            </Row>
            <Row>
              <div className='side-by-side'>
                <p>TM F/up Date</p>
                <Col lg='2'>
                  <input name='tm_date' className='w-100' />
                </Col>
                <Col lg='6'>
                  <input name='tm_date_2' className='w-100' />
                </Col>
              </div>
            </Row>
            <Row>
              <div className='side-by-side'>
                <p>Appt Date/Time</p>
                <Col lg='2'>
                  <input name='time' className='w-100' />
                </Col>
                <Col lg='2'>
                  <input name='appt_time_2' className='w-100' />
                </Col>
                <Col lg='4'>
                  <input name='appt_time_3' className='w-100' />
                </Col>
              </div>
            </Row>
          </div>
        </FormSection>
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Footer>
    </ModalWrapper>


    {/* <h2>Form</h2>
    <FormSection>
      <Row>
        <Col lg='4'>
          <TextField label='Company Name' name='company_name' />
        </Col>
        <Col lg='2'>
          <TextField label='Customer ID' name='customer_id' />
        </Col>
      </Row>
      <Row>
        <Col lg='4'>
          <TextField label='Address Line 1' name='address_line_1' />
        </Col>
        <Col lg='2'>
          <TextField label='Type' name='type' />
        </Col>
      </Row>
      <Row>
        <Col lg='4'>
          <TextField label='Address Line 2' name='address_line_2' />
        </Col>
        <Col lg='2'>
          <TextField label='Contact' name='contact' />
        </Col>
        <Col lg='2'>
          <TextField label='Position' name='position' />
        </Col>
      </Row>
      <Row>
        <Col lg='4'>
          <TextField label='Suburb' name='suburb' />
        </Col>
        <Col lg='2'>
          <TextField label='Phone' name='phone' />
        </Col>
        <Col lg='2'>
          <TextField label='Fax' name='fax' />
        </Col>
        <Col lg='2'>
          <TextField label='Mobile' name='mobile' />
        </Col>
      </Row>
      <Row>
        <Col lg='2'>
          <TextField label='State' name='state' />
        </Col>
        <Col lg='2'>
          <TextField label='Postcode' name='postcode' />
        </Col>
      </Row>
      <Row>
        <Col lg='4'>
          <TextField label='Email' name='email' />
        </Col>
        <Col lg='2'>
          <TextField label='Voucher Expiry' name='voucher_expiry' />
        </Col>
        <Col lg='2'>
          <TextField label='Arrears' name='arrears' />
        </Col>
      </Row>
      <Row>
        <Col lg='4'>
          <TextField label='Web' name='web' />
        </Col>
        <Col lg='2'>
          <TextField label='Code' name='code' />
        </Col>
      </Row>
      <Row>
        <Col lg='2'>
          <TextField label='No of Kids' name='no_of_kids' />
        </Col>
        <Col lg='2'>
          <TextField label='Rating' name='rating' />
        </Col>
        <Col lg='2'>
          <TextField label='List' name='list' />
        </Col>
        <Col lg='2'>
          <TextField label='Last Catalogue' name='last_catalogue' />
        </Col>
      </Row>
      <Row>
        <Col lg='6'>
          <TextField label='Comment' name='comment' />
        </Col>
      </Row>
      
      <p>Contacts</p>
      <div>
        <Row>
          <div className='side-by-side'>
            <p>Progress Report</p>
            <Col lg='2'>
              <input name='progress_report' className='w-100' />
            </Col>
            <Col lg='6'>
              <input name='progress_report_2' className='w-100' />
            </Col>
          </div>
        </Row>
        <Row>
          <div className='side-by-side'>
            <p>TM F/up Date</p>
            <Col lg='2'>
              <input name='tm_date' className='w-100' />
            </Col>
            <Col lg='6'>
              <input name='tm_date_2' className='w-100' />
            </Col>
          </div>
        </Row>
        <Row>
          <div className='side-by-side'>
            <p>Appt Date/Time</p>
            <Col lg='2'>
              <input name='time' className='w-100' />
            </Col>
            <Col lg='2'>
              <input name='appt_time_2' className='w-100' />
            </Col>
            <Col lg='4'>
              <input name='appt_time_3' className='w-100' />
            </Col>
          </div>
        </Row>
      </div>
      <div>
        <Row>
          <div className='side-by-side'>
            <p>Progress Report</p>
            <Col lg='2'>
              <input name='progress_report' className='w-100' />
            </Col>
            <Col lg='6'>
              <input name='progress_report_2' className='w-100' />
            </Col>
          </div>
        </Row>
        <Row>
          <div className='side-by-side'>
            <p>TM F/up Date</p>
            <Col lg='2'>
              <input name='tm_date' className='w-100' />
            </Col>
            <Col lg='6'>
              <input name='tm_date_2' className='w-100' />
            </Col>
          </div>
        </Row>
        <Row>
          <div className='side-by-side'>
            <p>Appt Date/Time</p>
            <Col lg='2'>
              <input name='time' className='w-100' />
            </Col>
            <Col lg='2'>
              <input name='appt_time_2' className='w-100' />
            </Col>
            <Col lg='4'>
              <input name='appt_time_3' className='w-100' />
            </Col>
          </div>
        </Row>
      </div>
    </FormSection> */}
    </>
  );
};

export default Home;
