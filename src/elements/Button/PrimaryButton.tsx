import React, { FC } from 'react';
import { Button } from 'react-bootstrap';

interface IPrimaryButton {
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    type: "button" | "submit" | "reset" | undefined;
    children: React.ReactElement | React.ReactNode[] | string;
};

const PrimaryButton: FC<IPrimaryButton> = ({ children, ...rest }) => {
    return (
        <Button variant='primary' {...rest}>
            {children}
        </Button>
    );
};

export default PrimaryButton;
