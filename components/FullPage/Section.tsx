import { StyleProps } from '../../types/styles';
import styles from './index.module.scss';
import classnames from 'classnames';

export const Section: React.FC<StyleProps> = (props) => {
  return (
    <section
      className={classnames(styles.section, props.className)}
      style={props.style}
    >
      {props.children}
    </section>
  );
};

export default Section;
