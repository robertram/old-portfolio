import React from 'react';
import './footer_component.scss';
import { useTranslation } from 'react-i18next';
import { NAMESPACE_KEY } from '../../i18n/i18n.js';
import LanguageButton from '../LanguageButton/languageButton_component';

const Footer = ({}) => {
  const { t } = useTranslation(NAMESPACE_KEY);
  return (
    <div className="footer-landing">
      <div className="footer-landing__wrap">
        <div className="footer-landing__top">
          <div className="footer-landing__grid">
            <div className="footer-landing__top-left">
              <div className="footer-landing__logo">
                <img
                  src="assets/investors/omni-footer-logo.svg"
                  alt="logo omni"
                />
              </div>
            </div>
            <div className="footer-landing__dropdownContainer">
              <div className="footer-landing__social-media">
                <div className="footer-landing__social-text">
                  {t('footer_follow_text')}
                </div>
                <div className="footer-landing__icons-container">
                  <a href="" target="_blank">
                    <img
                      className="footer-landing__icons"
                      src="assets/investors/facebook-footer-icon.svg"
                      alt="logo facebook omni"
                    />
                  </a>
                  <a href="" target="_blank">
                    <img
                      className="footer-landing__icons"
                      src="assets/investors/twitter-footer-icon.svg"
                      alt="logo twitter omni"
                    />
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <img
                      className="footer-landing__icons"
                      src="assets/investors/instagram-footer-icon.svg"
                      alt="logo instagram omni"
                    />
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <img
                      className="footer-landing__icons"
                      src="assets/investors/youtube-footer-icon.svg"
                      alt="logo youtube omni"
                    />
                  </a>
                  <a href="" target="_blank">
                    <img
                      className="footer-landing__icons"
                      src="assets/investors/tiktok-footer-icon.svg"
                      alt="logo tiktok omni"
                    />
                  </a>
                </div>
              </div>
              <div className="footer-landing__dropdown">
                <LanguageButton />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-landing__bottom">
          <div className="footer-landing__copyright">
            <p className="footer-landing__copyright-text">
              {t('footer_copyright_text')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
