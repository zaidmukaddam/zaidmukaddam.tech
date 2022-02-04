/* eslint-disable react/no-unescaped-entities */
import clsx from 'clsx';
import Image from 'next/image';
import Seo from '~/components/seo';
import useLoaded from '~/hooks/use-loaded';

const About = () => {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo title='About' />

      <section className={clsx(isLoaded && 'fade-in-start')}>
        <div className='px-8 xl:px-0 min-h-[100vh] pt-[80px] xl:w-[68rem] mx-auto'>
          <div className='mt-20'>
            <h2 className='text-3xl font-bold' data-fade='1'>
              About
            </h2>
            <h1
              className='text-4xl font-bold text-brand-gradient -mt-2 py-2'
              data-fade='2'
            >
              Zaid Mukaddam
            </h1>
          </div>
          <div className='flex flex-col lg:flex-row-reverse items-center  mt-6 space-y-12 lg:space-y-0 space-x-4'>
            <div className='w-1/2 flex justify-center text-center mx-2'>
              <Image
                src='/assets/zaid-v1.png'
                alt=''
                width='300px'
                height='400px'
                className='rounded text-center lg:w-[100%]'
                data-fade='3'
              />
            </div>
            <div
              className='text-lg flex flex-col space-y-4 -mt-10'
              data-fade='3'
            >
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className=''>Hello! my name is Zaid Mukaddam.</p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className=''>
                  I am currently a student at NMIMS's MPSTME pursuing B.Tech. in Cyber Security! 
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='col-span-11'>
                  Started learning web development and ethical hacking when i entered college.
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='max-[490px]'>
                  I code in JavaScript, TypeScript, React, Node.js, Express, GraphQL, MongoDB, and more.<br/>
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='col-span-11'>
                  I also have experience in Python, C, C++, and Java.
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='col-span-11'>
                And I have developed a few Android apps on my own using Flutter.
                </p>
              </div>
              <div className='flex'>
                <div className='min-w-[24px]'>→</div>
                <p className='col-span-11'>Mumabai, 🇮🇳</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
