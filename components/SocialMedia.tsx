import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SlackIcon,
  YoutubeIcon,
} from 'lucide-react';
import React, { FC } from 'react';
import { Tooltip, TooltipProvider } from './ui/tooltip';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: 'Github',
    href: 'https://www.github.com/felipeazsantos',
    icon: <GithubIcon className='w-5 y-5' />,
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/felipe-azevedo-02115014a/',
    icon: <LinkedinIcon className='w-5 y-5' />,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/felipeasantos10',
    icon: <InstagramIcon className='w-5 y-5' />,
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/',
    icon: <YoutubeIcon className='w-5 y-5' />,
  },
  {
    title: 'Slack',
    href: 'https://www.slack.com/',
    icon: <SlackIcon className='w-5 y-5' />,
  },
];

const SocialMedia: FC<Props> = ({
  className,
  iconClassName,
  tooltipClassName,
}) => {
  return (
    <TooltipProvider>
      <div className={cn('flex items-center gap-3.5', className)}>
        {socialLink.map(item => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  'p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect',
                  iconClassName,
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
