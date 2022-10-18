import { useEffect } from 'react';
import './Cursor.scss';

export const Cursor = () => {
  useEffect(() => {
    const cursor: HTMLElement | null = document.querySelector('.cursor');
    const cursorinner: HTMLElement | null = document.querySelector('.cursor2');
    const a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    });

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;
      if (cursorinner) {
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
      }
    });

    document.addEventListener('mousedown', function () {
      cursor?.classList.add('click');
      cursorinner?.classList.add('cursorinnerhover');
    });

    document.addEventListener('mouseup', function () {
      cursor?.classList.remove('click');
      cursorinner?.classList.remove('cursorinnerhover');
    });

    a.forEach((item) => {
      item.addEventListener('mouseover', () => {
        cursor?.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor?.classList.remove('hover');
      });
    });
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};
