import instance from '~/utils/axiosCustomize';

const postSignIn = (data) => {
    return instance.post('/auth/signin', data);
};

export { postSignIn };
