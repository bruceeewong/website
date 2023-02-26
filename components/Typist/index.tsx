import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
// import PropTypes from 'prop-types';

import styles from './index.module.scss';

interface TyperProps {
  sentences: string[];
  startDelay?: number;
  cursorDelay?: number;
  className?: string;
  cursorClassName?: string;
  cursorColor?: string;
  cursorBlinkSpeed?: number;
  showCursor?: boolean;
  hideCursorOnFinish?: boolean;
  cursorSmooth?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  style?: React.CSSProperties;
  defaultText?: string;
}

const Typer: React.FC<TyperProps> = ({
  sentences,
  startDelay = 0,
  cursorDelay = startDelay,
  className = '',
  cursorClassName = '',
  cursorColor = '',
  cursorBlinkSpeed = 700,
  showCursor = true,
  hideCursorOnFinish = false,
  cursorSmooth = false,
  typingSpeed = 80,
  deletingSpeed = 30,
  pauseTime = 1000,
  loop = true,
  style = {},
  defaultText = '',
}: TyperProps) => {
  const [text, setText] = useState(defaultText);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [writingSpeed, setWritingSpeed] = useState(typingSpeed);
  const mountedRef = useRef(false);

  const refText = useRef(text);
  const refIsDeleting = useRef(isDeleting);
  const refLoopNum = useRef(loopNum);
  const refWritingSpeed = useRef(writingSpeed);

  const refTimer = useRef(0);
  const timer1 = useRef(0);
  const timer2 = useRef(0);
  const timer3 = useRef(0); // starter timer
  const refIsGoingToDelete = useRef(false);
  const refIsFinished = useRef(false);

  refText.current = text;
  refIsDeleting.current = isDeleting;
  refLoopNum.current = loopNum;
  refWritingSpeed.current = writingSpeed;

  // detect mounted status, clear timers
  useEffect(() => {
    mountedRef.current = true;
    clearTimeout(refTimer.current);

    return () => {
      mountedRef.current = false;
      clearTimeout(refTimer.current);
      clearTimeout(timer1.current);
      clearTimeout(timer2.current);
      clearTimeout(timer3.current);
    };
  }, []);

  const handleType = useCallback(() => {
    const i = refLoopNum.current % sentences.length;
    const fullText = sentences[i];

    setText(
      refIsDeleting.current
        ? fullText.substring(0, refText.current.length - 1)
        : fullText.substring(0, refText.current.length + 1)
    );

    if (
      !refIsDeleting.current &&
      refText.current === fullText &&
      !refIsGoingToDelete.current
    ) {
      refIsGoingToDelete.current = true;
      timer1.current = window.setTimeout(() => {
        setIsDeleting(true);
        setWritingSpeed(deletingSpeed);
        refIsGoingToDelete.current = false;
      }, pauseTime);
    } else if (refIsDeleting.current && refText.current === '') {
      setIsDeleting(false);
      setWritingSpeed(typingSpeed);
      setLoopNum(refLoopNum.current + 1);
    }

    if (
      loop ||
      i !== sentences.length - 1 ||
      refText.current.length !== fullText.length
    ) {
      if (refIsGoingToDelete.current) {
        timer2.current = window.setTimeout(() => {
          refTimer.current = window.setTimeout(
            handleType,
            refWritingSpeed.current
          );
        }, pauseTime);
      } else {
        refTimer.current = window.setTimeout(
          handleType,
          refWritingSpeed.current
        );
      }
    } else {
      refIsFinished.current = true;
    }
  }, [deletingSpeed, loop, pauseTime, typingSpeed, sentences]);

  useEffect(() => {
    timer3.current = window.setTimeout(() => {
      if (!mountedRef.current) {
        return;
      }
      handleType();
    }, startDelay);
  }, [handleType, startDelay]);

  const styledSpan = useMemo(() => {
    const value = {
      opacity: 0,
      visibility: showCursor ? 'visible' : 'hidden',
      animation: `${styles.blink} ${cursorBlinkSpeed}ms ${
        cursorSmooth ? '' : 'steps(1)'
      } infinite`,
      animationDelay: `${cursorDelay}ms`,
    } as React.CSSProperties;
    if (cursorColor) Object.assign(value, { color: cursorColor });
    return value;
  }, [cursorBlinkSpeed, cursorColor, cursorDelay, cursorSmooth, showCursor]);

  return (
    <span style={style}>
      <span className={className}>{text}</span>
      {!(refIsFinished.current && hideCursorOnFinish) && (
        <span
          className={`${
            styles['typist-cursor']
          } ${`${cursorClassName} ${className}`}`}
          style={styledSpan}
        >
          |
        </span>
      )}
    </span>
  );
};

/* Typer.propTypes = {
  className: PropTypes.string, // so it is compatible with styled-components
  cursorColor: PropTypes.string,
  sentences: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  showCursor: PropTypes.bool,
  typingSpeed: PropTypes.number,
  deleteSpeed: PropTypes.number,
  pauseTime: PropTypes.number,
  loop: PropTypes.bool,
};

Typer.defaultProps = {
  className: '',
  cursorColor: '#000000',
  showCursor: true,
  typingSpeed: 80,
  deleteSpeed: 30,
  pauseTime: 2000,
  loop: true,
}; */

export default Typer;
