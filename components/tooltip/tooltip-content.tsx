type TooltipContentProps = {
  type?: string;
};

const colorLink =
  'bg-gradient-to-b bg-clip-text from-[#FF00AF] to-[#FF55C9]  text-transparent font-bold';

const TooltipContent = ({ type }: TooltipContentProps) => {
  return (
    <div className=''>
      {type === 'linkedin' ? (
        <p>
          Find me on <span className={colorLink}>Linkedin</span>
        </p>
      ) : type === 'github' ? (
        <p>
          See my projects on <p className={colorLink}>Github</p>
        </p>
      ) : type === 'instagram' ? (
        <p>
          Sometimes i post my thoughts on <span className={colorLink}>instagram</span>
        </p>
      ) : (
        <p>
          Get in touch! <br />
          <span className={colorLink}>zaidaltafmukaddam@gmail.com</span>
        </p>
      )}
    </div>
  );
};

export default TooltipContent;
