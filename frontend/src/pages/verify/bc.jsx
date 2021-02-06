import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';
import { toast } from 'react-toastify';

import { ensureUserIsAuthenticated } from 'utils/auth';
import { API_ROOT, SITE_TITLE_BASE } from 'pages/_app';

const VerifyBC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!(await ensureUserIsAuthenticated(router, dispatch))) {
      return;
    }

    const parsedQueryString = queryString.parse(location.search);

    const verificationData = {
      key: parsedQueryString.key,
    };

    try {
      await axios.post(`${API_ROOT}/accounts/verify/bc`, verificationData, {
        withCredentials: true,
      });
    } catch (err) {
      toast.error(
        'An error occurred while verifying your Brooklyn College email. Please try clicking the link in the email again.',
        { position: 'top-center' }
      );
      console.error(err);
    }

    toast.success(
      'Your Brooklyn College email has been successfully verified!',
      { position: 'top-center' }
    );
    router.push('/settings?section=bcverification');
  }, []);

  return (
    <>
      <Head>
        <title>Account Verification | {SITE_TITLE_BASE}</title>
      </Head>

      <div>Verifying account...</div>
    </>
  );
};

export default VerifyBC;
