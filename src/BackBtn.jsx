import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function BackBtn({ label = 'Back', to }) {
  const navigate = useNavigate();
  const handleClick = () => (to ? navigate(to) : navigate(-1));
  return (
    <button type="button" onClick={handleClick}>
      {label}
    </button>
  );
}