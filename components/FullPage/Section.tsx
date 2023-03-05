import { StyleProps } from '../../types/styles';
import classnames from 'classnames';

export const Section: React.FC<StyleProps> = (props) => {
  return (
    <section
      className={classnames(
        'relative h-[100vh] w-full overflow-hidden',
        // 'snap-center',
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </section>
  );
};

export default Section;
