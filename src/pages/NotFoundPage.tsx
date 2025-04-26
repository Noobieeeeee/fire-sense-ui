
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/ui/custom/Button';

const NotFoundPage = () => {
  return (
    <Layout title="Not Found">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-9xl font-bold text-espfire-orange">404</div>
        <h2 className="text-3xl font-bold mt-4 mb-8">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
