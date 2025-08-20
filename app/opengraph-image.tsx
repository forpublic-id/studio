import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'ForPublic.id Studio - Public Good Software Development'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 'bold',
              marginRight: '20px',
            }}
          >
            ForPublic.id
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 'normal',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '10px 20px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          Studio
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: '10px',
          }}
        >
          Public Good Software Development
        </div>
        <div
          style={{
            fontSize: 20,
            opacity: 0.9,
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Building transparent, accessible technology that serves communities
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}