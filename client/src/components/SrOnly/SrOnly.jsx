import classes from './SrOnly.module.css';
import { node, string } from 'prop-types';

export default function SrOnly({
  as: ComponentName = 'span',
  htmlFor,
  children,
}) {
  return (
    <ComponentName
      className={classes.SrOnly}
      htmlFor={htmlFor}
      // style={{
      //   position: 'absolute',
      //   clip: 'rect(0,0,0,0)',
      //   clipPath: 'circle(0)',
      //   overflow: 'hidden',
      //   width: 1,
      //   height: 1,
      //   margin: -1,
      //   padding: 0,
      //   border: 0,
      //   whiteSpace: 'nowrap',
      // }}
    >
      {children}
    </ComponentName>
  );
}

SrOnly.propTypes = {
  children: node.isRequired,
  htmlFor: string,
  as: string,
};
