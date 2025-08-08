import type { NextConfig } from 'next'

const config: NextConfig = {
  experimental: {
    ppr: 'incremental',
  },
}

export default config

