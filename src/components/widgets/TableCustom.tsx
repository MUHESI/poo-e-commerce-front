import React from "react";
import styled from "styled-components";
import { styleTheme } from "../../styles";

export const img =
  "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

function TableCustom() {
  const columns = ["NOMS", "DATE ENREGIST.", "FICHE", "ADRESSE", "ABONNE"];

  return (
    <ContentTable>
      <Table>
        <ColumnsTable columns={columns} />
        <WidgetLgTrRows>
          <WidgetTdUser>
            {/* <ImgUser src={img} alt='...' /> */}
            <TextUser> @Muhesi Moses </TextUser>
          </WidgetTdUser>
          <WidgetTd> 12/04/2022 </WidgetTd>
          <WidgetTd> 12-GOAM-2022 </WidgetTd>
          <WidgetTd> HIMBI2 </WidgetTd>
          <WidgetTd bgColor={"#3bb077"}> NON </WidgetTd>
        </WidgetLgTrRows>
      </Table>
    </ContentTable>
  );
}

export default TableCustom;

export function ColumnsTable({
  columns,
  indexOfLongText
}: {
  columns: string[];
  indexOfLongText?: number;
}) {
  return (
    <>
      <WidgetLgTrColumns>
        {columns.map((column, key) => (
          <ColumnTh
            className='widgetLgTh'
            key={key}
            isLongText={indexOfLongText === key + 1 ? true : false}
          >
            {column}
          </ColumnTh>
        ))}
      </WidgetLgTrColumns>
    </>
  );
}

export const MainTitleTable = ({ title }: { title: string }) => {
  return <h3 className='widgetLgTitle'> {title || ""} </h3>;
};
export const ContentTable = styled.div`
  flex: 2;
  padding: 20px 0;
  & td {
    padding: 10px 0px;
    border-bottom: 1px solid ${styleTheme.colors.colorTabHover};
  }
  & th {
    padding: 15px 0px;
  }
`;
export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
  text-align: center;
`;

export const WidgetLgTrRows = styled.tr`
  padding: 10px 0px;

  transition: all 0.3s ease;
  &:hover {
    transition: all 0.3s ease;
    background-color: ${styleTheme.colors.colorTabHover};
  }
`;
export const WidgetTdUser = styled.td`
  justify-content: start;
  display: flex;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid ${styleTheme.colors.colorTabHover};
`;
export const ImgUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
export const TextUser = styled.span``;
export const WidgetTd = styled.td<{ bgColor?: string }>`
  color: ${({ bgColor }) => (bgColor ? bgColor : "")};
  // font-weight: ${({ bgColor }) => (bgColor ? "bold" : "100")};
  font-weight: 300;
  border-bottom: 1px solid ${styleTheme.colors.colorTabHover};
`;

export const WidgetLgTrColumns = styled.tr`
  padding: 10px 0px;

  transition: all 0.3s ease;
  padding: 20px;
  margin-bottom: 50px;
  color: ${styleTheme.colors.white};
  font-size: 1em;
  background-color: ${styleTheme.colors.blueDark};
  & th {
    text-align: center;
    border-bottom: 1px solid #000;
    margin-bottom: 10px;
  }
`;
const ColumnTh = styled.th<{ isLongText: boolean }>`
  &:first-child {
    padding-left: ${({ isLongText }) => isLongText && "10px"};
    padding-left: ${({ isLongText }) => isLongText && "left"};
  }
`;

/** 
 * todo Styling of action 
 * @param {}
 * .widgetLgButton.Approved {
  background-color: #e5faf2;
  color: #3bb077;
}
.widgetLgButton.Declined {
  background-color: #fff0f1;
  color: #d95087;
}
.widgetLgButton.Pending {
  background-color: #ebf1fe;
  color: #2a7ade;
}
 */

export const ScrollbarHor = styled.div<{ minWidth: string }>`
  min-width: ${({ minWidth }) => minWidth && minWidth};
  overflow: hidden;
  overflow-x: scroll !important;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $main-color;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #e6e6e6;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: $main-color;
    }
  }
`;
