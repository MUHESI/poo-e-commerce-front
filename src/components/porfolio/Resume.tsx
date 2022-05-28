import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}


export default function VerticalTabsResume({
  tabItemMenu,
  tabComponents,
}: any) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={` mainResumeTabVertical`}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label=""
        className="tabs"
      >
        {tabItemMenu.length > 0 ? (
          tabItemMenu.map((item: any, id: number) => (
            <Tab
              label={
                <div className="mainMenu-Resume">
                  {/* <span> {item.icon} </span> {item.menu} */}
                  {item.menu}
                </div>
              }
              {...a11yProps(id)}
            />
          ))
        ) : (
          <Tab label={"menu N. F."} {...a11yProps(0)} />
        )}
      </Tabs>

      {tabComponents.length > 0 ? (
        tabComponents.map((component: string, id: number) => (
          <TabPanel value={value} index={id}>
            {component}
          </TabPanel>
        ))
      ) : (
        <TabPanel value={value} index={0}>
          Item not found
        </TabPanel>
      )}
    </div>
  );
}
