import Image from 'next/image';
import me from '../public/nael_1.png';

const TextBubble = function () {
  return (
    <div className="bg-violet p-2 pr-3 rounded-bl rounded-t-[15px] rounded-br-[15px] w-max font-bold text-white flex items-center">
      <Image
        src={me}
        alt="Hello"
        className="rounded-full w-8 h-8"
        width={32}
        height={32}
      />
      <span className="ml-2"> Hello, I’m Naël 👋</span>
    </div>
  );
};

export default TextBubble;
