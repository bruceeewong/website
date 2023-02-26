import { StyleProps } from '../../types/styles';
import styles from './index.module.scss';
import classnames from 'classnames';

export const Container: React.FC<StyleProps> = (props) => {
  return (
    <div
      className={classnames(
        'full-page-container',
        styles.container,
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
