import React, { useState } from 'react';
import { IconButton } from 'theme-ui'
import { FaBars} from 'react-icons/fa'
const Drawer = ({ children, buttonStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <IconButton
        onClick={toggleDrawer}
        sx={{ ...styles.openButton, ...buttonStyle }}
        aria-label='Open Drawer'
      >
        <FaBars />
      </IconButton>
      {isOpen && (
        <div style={{ ...drawerStyle, top: '8em' }}>
          <div onClick={handleLinkClick} style={{color:'black'}}>{children}</div>
        </div>
      )}
    </div>
  );
};

const drawerStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  zIndex: '999'
};

const styles = {
  openButton: {
    verticalAlign: 'middle'
  }
};

export default Drawer;
