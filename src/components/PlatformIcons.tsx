import { Box } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'; // Import icons from react-icons library
import { SiNintendo } from "react-icons/si";
import { IoDesktopOutline,  } from 'react-icons/io5';
import { IoPhonePortraitOutline } from 'react-icons/io5'; 

export interface Props{
    parent_platforms: Platform[]
}


export const PlatformIcons = ({parent_platforms}: Props) => {

    const renderPlatformIcon = (platform: string) => {
        switch (platform) {
          case 'Windows':
            return <FaWindows />;
          case 'PlayStation':
            return <FaPlaystation />;
          case 'Xbox':
            return <FaXbox />;
          case 'Apple Macintosh':
            return <FaApple />;
          case 'Linux':
            return <FaLinux />;
          case 'Android':
            return <FaAndroid />;
        case 'Nintendo':
            return <SiNintendo />;
        case 'PC':
            return <IoDesktopOutline />;
        case 'iOS': // Assume the platform name is 'iOS'
            return <IoPhonePortraitOutline />;
          default:
            return null;
        }
      };
    

      return (
        <Box display="inline-flex"> {/* Set display to inline-flex to render icons inline */}
         
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#D3D3D3' }}>
            {parent_platforms.map((platform) => (
              <li key={platform.id} style={{ display: 'inline-flex', alignItems: 'center', marginRight: '8px' }}> {/* Set display to inline-flex for each list item */}
                {renderPlatformIcon(platform.name)} {/* Render platform icon */}
                
              </li>
            ))}
          </ul>
        </Box>
      );
    };
    