import { GoBellFill } from 'react-icons/go';
import { GoBookmarkFill } from 'react-icons/go';

const StatusbarDataLeft = [
  {
    icon: GoBellFill,
    description: 'Notifications(0)',
  },
  {
    icon: GoBookmarkFill,
    description: 'Bookmark(4)',
  },
  {
    icon: GoBookmarkFill,
    title: 'Load Balancer',
    description: 'Balancer',
    loading: true,
    className: 'bg-(--accent-9) text-white',
  },
];

const StatusbarDataRight = [
  {
    icon: GoBellFill,
    description: 'Notifications(0)',
  },
  {
    icon: GoBookmarkFill,
    description: 'Bookmarks',
  },
  {
    icon: GoBookmarkFill,
    description: 'Profile',
  },
];

export { StatusbarDataLeft, StatusbarDataRight };
