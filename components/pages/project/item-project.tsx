import Image from 'next/image';
import { useMemo } from 'react';
import { AdditionalResult, BaseFrontmatter } from '~/types/frontmatter';
import TagProject from './tag-project';

type ItemProjectProps = {
  data: {
    stack: string;
    thumbnail: string;
  } & BaseFrontmatter &
    AdditionalResult;
};

const ItemProject = ({ data }: ItemProjectProps) => {
  const stacks = useMemo(() => data.stack.split(','), [data.stack]);

  return (
    <div className='sm:min-h-[320px] pb-6 sm:pb-2 cursor-pointer flex flex-col h-full rounded-xl border-4 dark:border-purple-700 border-indigo-500/100'>
      <div className='relative flex w-full items-stretch xl:h-[74%] rounded-lg'>
        <Image
          src={`/assets/project/${data.thumbnail}`}
          alt={data.title}
          width='541px'
          height='282px'
          layout='intrinsic'
          className='rounded-t-lg h-full w-full z-[-1] top-0'
        />
        <div className='flex place-items-end left-36 z-[2] absolute p-0 top-12 right-0 m-0 flex-col sm:flex-col'>
          {stacks.map((item) => (
            <TagProject key={item} label={item} />
          ))}
        </div>
      </div>
      <div className='px-4 py-1'>
        <p className='text-2xl my-2 font-bold'>{data.title}</p>
        <p className='text-sm'>{data.description}</p>
      </div>
    </div>
  );
};

export default ItemProject;
