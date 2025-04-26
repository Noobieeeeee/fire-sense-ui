
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Logo from '../components/Logo';
import Button from '../components/ui/custom/Button';

const HomePage = () => {
  return (
    <Layout title="Home">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="bg-espfire-dark-blue rounded-lg p-10 w-full max-w-3xl shadow-lg">
          <h2 className="text-3xl text-espfire-orange font-bold text-center mb-8">
            Welcome to the Indoor Fire and Smoke Watchdog
          </h2>
          
          <div className="flex justify-center mb-12">
            <Logo size="lg" withText={false} />
          </div>
          
          <div className="flex justify-center">
            <Link to="/live-stream">
              <Button size="lg">
                Live Streaming
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
