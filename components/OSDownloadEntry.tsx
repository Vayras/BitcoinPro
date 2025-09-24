import React from 'react';
import Image from 'next/image';

interface OSDownloadEntryProps {
  iconPath: string;
  osName: string;
  formats: string;
}

const OSDownloadEntry: React.FC<OSDownloadEntryProps> = ({ iconPath, osName, formats }) => {
  return (
    <div className="flex " style={{gap: '20px'}}>
      <div>
        <Image src={iconPath} alt={osName} width={50} height={50} />
      </div>
      <div className="flex flex-col">
        <p>{osName}</p>
        <p>{formats}</p>
      </div>
    </div>
  );
};

export default OSDownloadEntry;