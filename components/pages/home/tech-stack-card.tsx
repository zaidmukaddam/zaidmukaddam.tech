import Image from 'next/image';

export type CardProps = {
  img: string;
  label?: string;
  techUrl?: string;
};

const TechStackCard = ({ label, img,techUrl }: CardProps) => {
  return (
    <div className='h-[100px] cursor-pointer hover:scale-105 duration-150 transition b rounded-lg p-1.5 bg-gradient-to-r from-indigo-500 to-blue-400'>
      <div className='flex flex-row items-center bg-[#f5f5f5] dark:bg-brand-black rounded-lg h-full px-4 space-x-2'>
        <div className='w-full lg:w-1/2 flex justify-center'>
          <a href={techUrl}>
            <Image src={img as string} width='54' height='54' alt={label} />
          </a>
        </div>
        <div className='sm:w-1/2 hidden lg:flex'>{label}</div>
      </div>
    </div>
  );
};

export default TechStackCard;
