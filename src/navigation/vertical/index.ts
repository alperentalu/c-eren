// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'
const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'tabler:smart-home'
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'tabler:mail'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    },
    {
      title: 'Ship Management',
      path: '/ship-management',
      icon: 'tabler:truck-delivery'
    }
  ]
}

export default navigation
