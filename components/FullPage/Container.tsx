import { StyleProps } from '../../types/styles';
import classnames from 'classnames';
export const Container: React.FC<StyleProps> = (props) => {
  return (
    <div
      className={classnames(
        'relative mx-auto w-full overflow-y-auto',
        props.className
      )}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
