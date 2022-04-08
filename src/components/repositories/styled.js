import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const CTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;


export const CTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

CTabList.tabsRole = "TabList";


export const CTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #225ed8;
  color: #fff;
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

CTab.tabsRole = "Tab";


export const CTabPanel = styled(TabPanel)`
  padding: 10px ;
  border: 1px solid "#ccc";
  display: none;

  &.is-selected {
    display: block;
  }
`;

CTabPanel.tabsRole = "TabPanel";

export const List = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  flex-wrap: wrap;
`;