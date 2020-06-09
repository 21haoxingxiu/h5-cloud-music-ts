import React, { useEffect, useRef } from 'react';
import Scroll from '../Scroll';
import styled from 'styled-components';
import style from '../../assets/globalStyle';

interface Iprops {
  list: any[];
  oldVal: string;
  title: string;
  handleClick: (key: string) => any;
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  > span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 5px 0;
    margin-right: 5px;
    color: grey;
    font-size: ${style['font-size-m']};
  }
`;
const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style['font-size-m']};
  padding: 5px 8px;
  border-radius: 10px;
  &.selected {
    color: ${style['theme-color']};
    border: 1px solid ${style['theme-color']};
    opacity: 0.8;
  }
`;

function Horizen(props: Iprops) {
  const { list, oldVal, title } = props;
  const { handleClick } = props;
  const Category = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let categoryDOM = Category.current;
    let tagElems = categoryDOM!.querySelectorAll('span');
    let totalWidth = 0;
    Array.from(tagElems).forEach((ele) => {
      totalWidth += ele.offsetWidth;
    });
    categoryDOM!.style.width = `${totalWidth}px`;
  }, []);
  return (
    <Scroll direction='horizontal'>
      <div ref={Category}>
        <List>
          <span>{title}</span>
          {list.map((item) => {
            return (
              <ListItem
                key={item.key}
                className={`${oldVal === item.key ? 'selected' : ''}`}
                onClick={() => handleClick(item.key)}
              >
                {item.name}
              </ListItem>
            );
          })}
        </List>
      </div>
    </Scroll>
  );
}

export default React.memo(Horizen);
