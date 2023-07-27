/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'primereact/button';
import type { Page } from '../../../types/types';

const AccessDeniedPage: Page = () => {
  const router = useRouter();

  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
      <div className="flex flex-column align-items-center justify-content-center">
        <img src="/demo/images/access/logo-orange.svg" alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
        <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, rgba(247, 149, 48, 0.4) 10%, rgba(247, 149, 48, 0) 30%)' }}>
          <div className="w-full surface-card py-8 px-5 sm:px-8 flex flex-column align-items-center" style={{ borderRadius: '53px' }}>
            <div className="flex justify-content-center align-items-center bg-pink-500 border-circle" style={{ height: '3.2rem', width: '3.2rem' }}>
              <i className="pi pi-fw pi-exclamation-circle text-2xl text-white"></i>
            </div>
            <h1 className="text-900 font-bold text-5xl mb-2">Acesso negado.</h1>
            <div className="text-600 mb-5">Você não tem permissão para acessar essa página.</div>
            <img src="/demo/images/access/asset-access.svg" alt="Error" className="mb-5" width="80%" />
            <Button icon="pi pi-arrow-left" label="Voltar para a página inicial." text onClick={() => router.push('/')} />
          </div>
        </div>
      </div>
    </div>
  );
};

AccessDeniedPage.getLayout = function getLayout(page) {
  return (
    <React.Fragment>
      {page}
    </React.Fragment>
  );
};

export default AccessDeniedPage;
