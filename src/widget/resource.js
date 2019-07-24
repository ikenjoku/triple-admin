import React from 'react';
import { Drawer } from 'antd'

export default ({open, closeDrawer}) => {

    return (
      <Drawer
        height='auto'
        className='resource-drawer'
        placement='bottom'
        visible={open}
        title='Resources'
        onClose={closeDrawer}>
      </Drawer>)
}
