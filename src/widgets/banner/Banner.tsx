'use client'

import { Box } from '@/shared/ui/mui'
import Image from 'next/image'

const Banner = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: { xs: 300, md: 500 } }}>
      <Image
        src="/images/mainBan.png"
        alt="баннер"
        fill
        priority
        className='rounded-4xl'
        style={{ objectFit: 'cover' }}
      />
    </Box>
  )
}

export default Banner