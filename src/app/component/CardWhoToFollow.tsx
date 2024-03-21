import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserPlus } from 'lucide-react'
import React from 'react'

const CardWhoToFollow :React.FC = () => {
  return (
    <div className='bg-gray-100 rounded-lg border border-gray-500 p-4'>
        <h2 className='font-bold mb-5'>Who To Follow</h2>
        <div className='flex items-center justify-between'>
            <div className='flex items-center'>
            <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>Jokowidodol</p>

            </div>
            <div>
                <UserPlus
                />
            </div>
        </div>
        
    </div>
  )
}

export default CardWhoToFollow