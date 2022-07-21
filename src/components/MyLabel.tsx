import './mylabel.css';

export interface MyLabelProps {
  /** 
  * This is the text to display in the label
  */
  label: string;
  /**
  * How large should the button be?
  */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /** 
  * Should the label be all caps? 
  */
  allCaps?: boolean;
  /**
  * What color should the label be?
  */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
  * What font color to use?
  */
  fontColor?: string;
}

/**
* Primary label component
*/
export const MyLabel = ({
  label = 'no label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
  ...props
}: MyLabelProps) => {

  const labelCapitalize = (allCaps) ? label.trim().charAt(0).toUpperCase() + label.trim().slice(1) : label;

  return (
    <span 
      className={`label ${ size } text-${ color }`}
      style={{ color: fontColor }}
      {...props}
    >
      { labelCapitalize }
    </span>
  )
}
