import styled from "styled-components";
import Modal from 'react-bootstrap/Modal';
export const FormSection = styled.div`
    .side-by-side {
        display: flex;
        flex-direction: row;
    }
`;

export const ModalWrapper = styled(Modal)`
    .modal-dialog {
        max-width: 80%;
    }
`;