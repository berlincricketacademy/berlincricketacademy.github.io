import React from 'react';
import Link from 'gatsby';

const LogoItem = ({ url, title, subTitle, description, icon, type, moneyValue, redirectLink = '/', isInternalLink = true, bg = 'white' }) => (
  <div
    className={`logo-grid-item card logo-grid-item-bg-${bg}`}
    style={{
      backgroundColor: bg === 'white' ? 'white' : '#fbebec'
    }}
  >
    {
      url &&
        <div className="logo-media" style={{backgroundImage: `url(${url})`}} />
    }
    {
      icon && !type &&
        <span className="icon is-large">
          <i className={`fas fa-${icon} fa-3x`} />
        </span>
    }
    {
      type && type === 'money' &&
      <span className="icon-text logo-item-icon-text">
        <span className="icon">
          <i className={`fas fa-${icon} fa-3x`} />
        </span>
        <span className="logo-item-icon-text-value is-size-3">{moneyValue}</span>
      </span>
    }
    <div className="logo-content">
      {
        title &&
          <a className="logo-content-title" href={redirectLink} target={isInternalLink ? '_self' : '_blank'}>{title.toUpperCase()}</a>
      }
      {
        subTitle &&
          <p className="is-size-5 logo-content-subTitle">{subTitle}</p>
      }
    </div>
    {
      description &&
        <p className="is-size-6 logo-content-subTitle">{description}</p>
    }
  </div>
);

export default LogoItem;
