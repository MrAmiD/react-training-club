import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import { useFooterStyles } from './styled';
import { Paper } from '@material-ui/core';

export type FooterProps = {};

interface TabContainerProps {
  children?: React.ReactNode;
}

const TabContainer: React.FC<TabContainerProps> = props => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const Footer: React.FC<any> = FooterProps => {
  const classes = useFooterStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <Paper>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="off"
          >
            <Tab icon={<PhoneIcon />} aria-label="Phone" />
            <Tab icon={<FavoriteIcon />} aria-label="Favorite" />
            <Tab icon={<PersonPinIcon />} aria-label="Person" />
            <Tab icon={<HelpIcon />} aria-label="Help" />
            <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
            <Tab icon={<ThumbDown />} aria-label="Up" />
            <Tab icon={<ThumbUp />} aria-label="Down" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}
        {value === 5 && <TabContainer>Item Six</TabContainer>}
        {value === 6 && <TabContainer>Item Seven</TabContainer>}
      </div>
    </Paper>
  );
};

export default Footer;
