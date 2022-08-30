import React from 'react';
import Icons from './components/Icons';

import logo from './logo.jpeg'
import cat from './cat.jpeg'

import instagramLogo from './instagram-logo.svg'

function App() {
  return (
    <>
      <div className='flex h-screen overflow-auto items-center justify-center'>
        <div className='flex flex-col border border-[#3BC183] shadow-lg shadow-[#3BC183] rounded-2xl overflow-hidden'>
          <div className='relative pl-20 pr-8'>
            <div className='absolute left-0 w-14 h-14 bg-[#3BC183] flex items-center justify-center rounded-br-2xl'>
              <Icons name='picture' className='w-6 h-6 text-white' />
            </div>
            <div className='mt-7'>
              <div className='grid grid-cols-2'>
                <div className='flex items-center justify-center'>
                  <div className='relative'>
                    <img alt='logo' src={logo} className="w-16 rounded-md border border-[#D6D6D6]" />
                    <span className='absolute -right-2 -bottom-2'>
                      <img alt='instagram' src={instagramLogo} className="w-5 h-5 rounded-full" />
                    </span>
                  </div>
                  <div className='ml-3 flex items-start justify-center flex-col text-black'>
                    <p>Social Orientation</p>
                    <p className='text-[#9A9A9A] font-light'>17 June 2021 - 10:15</p>
                  </div>
                </div>
                <div className='flex items-center justify-end gap-2'>
                  <Icons name='ban' className='w-5 h-5 text-[#9A9A9A]' />
                  <Icons name='duplicate' className='w-5 h-5 text-[#9A9A9A]' />
                  <Icons name='edit' className='w-5 h-5 text-[#9A9A9A]' />
                  <Icons name='trash' className='w-5 h-5 text-[#9A9A9A]' />
                  <Icons name='dots' className='w-5 h-5 text-[#9A9A9A]' />
                </div>
              </div>
            </div>
            <div className='max-w-md my-8'>
              <p className='text-black text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi tortor, porta eu egestas ac, ultricies sed leo. Sed id lorem orci. Vivamus eu pulvinar elit, in accumsan</p>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='p-5'>
              <ul className='flex flex-col gap-4'>
                <li>
                  <span>125</span>
                  <Icons name='heart' className='text-[#9A9A9A]' />
                </li>
                <li>
                  <span>125</span>
                  <Icons name='comment' className='text-[#9A9A9A]' />
                </li>
                <li>
                  <span>125</span>
                  <Icons name='share' className='text-[#9A9A9A]' />
                </li>
                <li>
                  <span>125</span>
                  <Icons name='eye' className='text-[#9A9A9A]' />
                </li>
              </ul>
            </div>
            <div className='flex items-center justify-center pr-8 pb-7'>
              <img src={cat} alt='cat' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
