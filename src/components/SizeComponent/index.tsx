import { BorderColor, Title } from '@mui/icons-material';
import React, { useState } from 'react';

interface Props {
  sizes: string[];
  selectedSize: string | null;
  onSelectSize: (size: any) => void;
}

const SizeComponent: React.FC<Props> = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <>
     <p style={{
      color: '#757575',
      width: '110px',
      textTransform: 'capitalize',
      flexShrink: '0',
      alignItems: 'center',
     }}>Sizes: </p>
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {sizes?.map((size:any, index:number) => (
        <SizeCircle
        key={index}
        size={size.value}
        selected={selectedSize === size.value}
        onSelectSize={onSelectSize}
        />
        ))}
    </div>
        </>
  );
};

interface CircleProps {
  size: string;
  selected: boolean;
  onSelectSize: (size: string) => void;
}

const SizeCircle: React.FC<CircleProps> = ({ size, selected, onSelectSize }) => {
  const [verified, setVerified] = useState(false);
  const handleClick = () => {
    onSelectSize(size);
    setVerified(true);
  };

  return (
    <section>

      <div
        style={{
          'margin': '0px 4px 4px 0px',
          // color: rgba(0, 0, 0, 0.8);
          // text-align: left;
          // border-radius: 2px;
          // border: 1px solid rgba(0, 0, 0, 0.09);
          // position: relative;
          // background: rgb(255, 255, 255);
          // outline: 0px;
          flexWrap: 'wrap',
          minWidth: '4rem',
          border: selected ? '1px solid #000052' : '1px solid rgba(0, 0, 0, 0.09)',
          minHeight: '2.025rem',
          borderRadius: '2px',
          // backgroundColor: !selected ? 'none' : 'rgb(255, 255, 255)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'rgba(0, 0, 0, 0.8)',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {size}

          {selected && verified && (
          <div
            style={{
              position: 'relative',
              bottom: '-12px',
              right: '-22px',
              width: '10px',
              height: '10px',
              // borderRadius: '30%',
              backgroundColor: '#000052',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#fff',
            }}
            >
            ✓
          </div>
        )}
      </div>
    </section>
  );
};

export default SizeComponent;
