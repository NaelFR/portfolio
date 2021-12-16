import clsx from 'clsx';

const Dot = function ({ className }: {className: string}) {
  const classNames = clsx(['rounded-full absolute animate-totalPulse', className]);
  return (
    <div className={classNames} />
  );
};

export default Dot;
