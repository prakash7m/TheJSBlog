export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'icon-user'
  },
  {
    name: 'Gallery',
    url: '/gallery',
    icon: 'icon-camera'
  },
  {
    name: 'Category',
    url: '/category',
    icon: 'icon-layers'
  },
  {
    name: 'Posts',
    url: '/posts',
    icon: 'icon-puzzle'
  },
  {
    name: 'Subscribers',
    url: '/subscribers',
    icon: 'icon-puzzle'
  },
  {
    name: 'Posts',
    url: '/posts',
    icon: 'icon-email',
    children: [
      {
        name: 'Category',
        url: '/posts/category',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tags',
        url: '/posts/tags',
        icon: 'icon-puzzle'
      },
      {
        name: 'Gallary',
        url: '/posts/gallary',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success'
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger'
  }
];
