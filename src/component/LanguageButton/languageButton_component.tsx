import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NAMESPACE_KEY } from '../../i18n/i18n.js';
import { TFunction } from 'i18next';
import './languageButton_component.scss';
import { Link } from 'react-scroll';


const LanguageButton = ({}) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const showMobileMenuAction = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSetActive = (to) => {
    setActiveItem(to);
  };

  return (
    <div className="LanguageButton"></div>
  );
};

export default LanguageButton;
