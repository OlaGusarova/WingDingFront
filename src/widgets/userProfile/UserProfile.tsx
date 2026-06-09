'use client'

import { useAppSelector } from '@/app/store/hooks'
import { selectUser } from '@/entities/user'
import { Avatar, Box, Button } from '@/shared/ui/mui'
import AllInclusive from '@mui/icons-material/AllInclusive'
import EventIcon from '@mui/icons-material/Event'
import dateParse from '@/shared/lib/dateParse'
import { AvatarEditButton } from '@/features/userAvatar/ui'
import UserInterests from '@/features/userInterests/ui'

const UserProfile = () => {
  const userDetails = useAppSelector(selectUser)
  console.log({ userDetails })

  return (
    <div className='bg-white rounded-lg p-8 flex flex-col'>
      <div className='flex justify-between'>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Avatar src={userDetails?.mainAvatar?.avatarUri} alt={userDetails?.displayName} sx={{ height: '150px', width: '150px'}} />
              <AvatarEditButton />
            </Box>
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <h2 className="text-xl font-semibold">
              {userDetails?.displayName}
            </h2>
            <div className='flex gap-4'>
              <div className='flex gap-1'>
                <EventIcon color='secondary' sx={{ display: { xs: 'none', md: 'flex' } }} />
                {dateParse(userDetails?.birthDate || '', 'd MMMM YYYY')}
              </div>
              <div className='flex gap-1'>
                <AllInclusive color='primary' sx={{ display: { xs: 'none', md: 'flex' } }} />
                {userDetails?.bio || ''}
              </div>
            </div>
            <UserInterests />
          </div>
        </div>
        <div className="flex flex-col">
          <Button>Редактировать профиль</Button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile