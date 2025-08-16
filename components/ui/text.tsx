import { cn } from '@/lib/utils';

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        'text-3xl font-bold font-sans text-shop_dark_green capitalize tracking-wide',
        className,
      )}
    >
      {children}
    </h2>
  );
};

const SubText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={cn('text-gray-600 text-sm', className)}>{children}</p>;
};

export { Title, SubText };
