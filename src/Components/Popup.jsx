import { Modal } from 'react-bootstrap';
import Button from './Button';

const Popup = ({ show, handleClose,title,message }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
            {/* <button onClick={handleClose}>Close</button> */}
            <Button onClick={handleClose} props_text="Close"/>
        </Modal.Footer>
    </Modal>
);

export default Popup;

