import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ContentScrollable } from "../components/shared/ComponentSrolling";
import { useParams } from "react-router-dom";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    margin: " 20px auto",
    backgroundColor: theme.palette.background.paper
  }
}));
interface IProps {
  tabComponents: any[];
  tabMenu: any[];
}
const findTab = (tab_: string) => {
  switch (tab_) {
    case "0":
      return 0;
    case "1":
      return 1;
    case "2":
      return 2;
    case "3":
      return 3;

    default:
      return 0;
  }
};

export default function ScrollableTabs({ tabComponents, tabMenu }: IProps) {
  const classes = useStyles();
  const { TAB }: any = useParams();
  const [value, setValue] = React.useState(findTab(TAB));

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          {tabMenu.length > 0 ? (
            tabMenu.map((menu: any, id: number) => (
              <Tab label={menu} {...a11yProps(id)} />
            ))
          ) : (
            <Tab label='No menu found' {...a11yProps(0)} />
          )}
        </Tabs>
      </AppBar>
      <ContentScrollable height={540} hideBgColor={false}>
        {tabComponents.length > 0 ? (
          tabComponents.map((component: any, id: number) => (
            <TabPanel value={value} index={id}>
              {component}
            </TabPanel>
          ))
        ) : (
          <TabPanel value={value} index={0}>
            No component found
          </TabPanel>
        )}
      </ContentScrollable>
    </div>
  );
}
