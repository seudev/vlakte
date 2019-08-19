import React from 'react';

import Button from '@material-ui/core/Button';
import { connect } from '../../../src/Redux';
import { login } from '../../../src/components/user/userActions';

const LoginForm = ({ login }) => (
    <Button
        variant="contained"
        color="primary"
        onClick={() => login({
            name: "Thomás Sousa Silva",
            login: "thomas@seudev.com",
            profileImageSrc: "https://thomassousa.dev/static/media/thomas-sousa-silva.955f0ddb.jpg",
            avatarVariant: "default",
        })}>
        Login
    </Button>
);

export default connect('user', { login }, LoginForm);
