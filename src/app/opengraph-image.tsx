import { ImageResponse } from 'next/og';

export const alt = 'JG Conextions - Soluciones Tecnológicas Integrales en Costa Rica';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a1a2e 0%, #1e3a5f 50%, #0a1a2e 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(74, 158, 255, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            textAlign: 'center',
            padding: '80px',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #4a9eff 0%, #60a5fa 100%)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              boxShadow: '0 20px 60px rgba(74, 158, 255, 0.4)',
            }}
          >
            <svg width="80" height="80" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="12" height="8" rx="1" fill="#0a1a2e"/>
              <rect x="3" y="5" width="10" height="6" rx="0.5" fill="#ffffff"/>
              <rect x="6" y="12" width="4" height="2" rx="0.5" fill="#0a1a2e"/>
              <rect x="5" y="14" width="6" height="1" rx="0.5" fill="#0a1a2e"/>
              <circle cx="14" cy="6" r="1.5" fill="#60a5fa"/>
              <circle cx="16.5" cy="7" r="1" fill="#60a5fa" opacity="0.8"/>
            </svg>
          </div>
          
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0 0 20px 0',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            }}
          >
            JG CONEXTIONS
          </h1>
          
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#4a9eff',
              margin: '0 0 30px 0',
            }}
          >
            Soluciones Tecnológicas Integrales
          </h2>
          
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0',
              maxWidth: '900px',
              lineHeight: '1.4',
            }}
          >
            Reparación de Computadoras • CCTV • Redes • Impresoras • Aires Acondicionados
          </p>
          
          <div
            style={{
              marginTop: '40px',
              padding: '16px 32px',
              background: 'rgba(74, 158, 255, 0.2)',
              borderRadius: '12px',
              border: '1px solid rgba(74, 158, 255, 0.3)',
            }}
          >
            <p
              style={{
                fontSize: '24px',
                color: '#60a5fa',
                margin: '0',
                fontWeight: '500',
              }}
            >
              📍 Heredia y Puriscal, Costa Rica
            </p>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

