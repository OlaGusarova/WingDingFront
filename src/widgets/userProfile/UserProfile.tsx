'use client'

import { useAppSelector } from '@/app/store/hooks'
import { selectUser } from '@/entities/user'
import { Avatar, Badge, Button, Chip } from '@/shared/ui/mui'
import AllInclusive from '@mui/icons-material/AllInclusive'
import EventIcon from '@mui/icons-material/Event'
import dateParse from '@/shared/lib/dateParse'

const UserProfile = () => {
  const userDetails = useAppSelector(selectUser)
  console.log({ userDetails })

  return (
    <div className="bg-gray-100 rounded-lg p-8 flex flex-col">
      <div className='flex justify-between'>
        <div className="flex gap-8">
          <div className="flex flex-col">
            <Badge
              color='success'
              badgeContent='+'
              overlap='circular'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
            >
              <Avatar alt={userDetails?.displayName} sx={{ height: '120px', width: '120px'}} />
            </Badge>
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
            <div className='flex gap-2'>
              {userDetails?.interests.map(interest => (
                <Chip key={interest} label={interest} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <Button variant='text' color='success'>Редактировать профиль</Button>
        </div>
      </div>
    </div>
  )
}

export default UserProfile