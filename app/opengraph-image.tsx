import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Leadership Spark — What brings you here today?'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F0E8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          gap: 24,
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 8 L54 46 L92 50 L54 54 L50 92 L46 54 L8 50 L46 46 Z" fill="#C4622D"/>
        </svg>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: '#1C1208',
            letterSpacing: '0.12em',
          }}
        >
          LEADERSHIP SPARK
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#C4622D',
            fontStyle: 'italic',
            marginTop: 8,
          }}
        >
          What brings you here today?
        </div>
        <div
          style={{
            fontSize: 18,
            color: '#8B7355',
            marginTop: 12,
          }}
        >
          leadershipspark.co
        </div>
      </div>
    ),
    { ...size }
  )
}
