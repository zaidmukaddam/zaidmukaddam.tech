import dayjs from 'dayjs';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { ReadTimeResults } from 'reading-time';

import { ChooseFrontmatter } from '~/types/frontmatter';

type ItemBlogProps = {
  data: {
    slug: string;
    readingTime: ReadTimeResults;
  } & ChooseFrontmatter<'blog'>;
};

const ItemBlog = ({ data }: ItemBlogProps) => {
  return (
    <li className='border-4 border-black p-2 rounded-lg dark:border-white'>
      <div>
        <p className='text-light dark:text-[#D7D7D7] text-sm'>
          {dayjs(data.publishedAt).format('MMMM DD, YY')} •{' '}
          {data.readingTime.minutes} mins reading time
        </p>
        <Link href={`blog/${data.slug}`} passHref>
          <h3 className='text-3xl font-bold leading-relaxed cursor-pointer duration-150 ease-in hover:text-brand-gradient'>
            {data.title}
          </h3>
        </Link>
        <p className='leading-relaxed dark:text-[#ACACAC]'>
          {data.description}
        </p>
      </div>
      <button className='mt-2 flex flex-row-reverse rounded-md bg-black dark:bg-white p-1.5 float-right'>
        <Link href={`blog/${data.slug}`} passHref>
          <a className='flex items-center'>
            <p className='text-sm font-bold text-white dark:text-black'>READ MORE</p>
            <span className='ml-2'>
              <AiOutlineArrowRight className='flex hover:transform-x-[20px] text-white dark:text-black' />
            </span>
          </a>
        </Link>
      </button>
    </li>
  );
};

export default ItemBlog;
