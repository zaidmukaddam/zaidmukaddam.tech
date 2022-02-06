import Image from 'next/image';

export type CardProps = {
  img: string;
  label?: string;
  techUrl?: string;
};

const TechStackCard = ({ label, img,techUrl }: CardProps) => {
  return (
    <div className='h-[100px] border-4 cursor-pointer hover:scale-105 duration-150 transition border-violet-600 dark:border-indigo-500 rounded-lg p-2'>
      <div className='flex flex-row items-center h-full px-4 space-x-2'>
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
