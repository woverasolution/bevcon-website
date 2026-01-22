import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BevCon - Beverage Project Experts';
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1120',
          backgroundImage: 'linear-gradient(135deg, #0B1120 0%, #1a2332 100%)',
        }}
      >
        {/* Accent gradient circle */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '5%',
            width: '450px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(255,187,58,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            BevCon
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              background: 'linear-gradient(90deg, #ffbb3a 0%, #e5a834 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: '32px',
            }}
          >
            Concept, Construction & Confidence
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 28,
              color: '#cbd5e1',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.5,
            }}
          >
            Partnering with investors to deliver beverage projects worldwide
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
