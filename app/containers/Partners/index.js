import React from 'react';
import PartnerIcon from './PartnerIcon';

const styles = {
  root: {
    textAlign: 'center',
  },
  partnerIcon: {
    display: 'flex',
  },
};

export default class Partners extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={styles.root}>
        <h2>Meet TradesCo’s Technology Partners</h2>
        <div style={styles.partnerIcon}>
          <PartnerIcon 
            src="https://www.itgurusolutionsinc.com/images/partner-logos/QuickBooksOnlinelogo.png"
            alt="Quickbooks"
          />
          <PartnerIcon
            src="https://varcsolutions.com/wp-content/uploads/2017/03/TSheets-2018-700x226.png"
            alt="Tsheets"
          />
          <PartnerIcon
            src="https://www.itgurusolutionsinc.com/images/lg-images/google_drive_logo_3963_15.png"
            alt="Google Drive"
          />
          <PartnerIcon
            src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082016/shopify-logo-default-cmyk.png?itok=9w5CP0vs"
            alt="Shopify"
          />
        </div>
      </div>
    );
  }
}
