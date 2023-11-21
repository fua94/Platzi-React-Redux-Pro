import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import React from 'react';

type Props = {
  isFavorite: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
};

const StarButton: React.FunctionComponent<Props> = ({
  isFavorite,
  onClick,
}) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick} />;
};

export default StarButton;
