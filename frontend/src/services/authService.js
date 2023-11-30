import api_instance from '~/utils/axiosCustomize';

const postSignIn = (data) => {
    return api_instance.post('/auth/signin', data);
};

export { postSignIn };
