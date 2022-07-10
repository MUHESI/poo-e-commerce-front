import React from "react";

export default function TableShopping() {
  return (
    <div>
      <table className='MuiTable-root jss457'>
        <thead className='MuiTableHead-root jss455'>
          <tr className='MuiTableRow-root undefined jss472 MuiTableRow-head'>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss506 jss458'
              scope='col'
            ></th>

            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss458'
              scope='col'
            >
              PRODUCT
            </th>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss507 jss458'
              scope='col'
            >
              COLOR
            </th>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss507 jss458'
              scope='col'
            >
              SIZE
            </th>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss505 jss458'
              scope='col'
            >
              PRICE
            </th>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss505 jss458'
              scope='col'
            >
              QTY
            </th>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss505 jss458'
              scope='col'
            >
              AMOUNT
            </th>
            <th
              className='MuiTableCell-root MuiTableCell-head jss460 jss461 jss458'
              scope='col'
            ></th>
          </tr>
        </thead>
        <tbody className=' MuiTableBody-root'>
          <tr className='MuiTableRow-root undefined jss471 '>
            <td className='MuiTableCell-root MuiTableCell-body jss461'>
              <div className='jss510'>
                <img src='' alt='...' className='jss511' />
              </div>
            </td>

            <td className='MuiTableCell-root MuiTableCell-body jss461'>
              <span className='jss510'>
                <a className='jss513' href='#jacket'>
                  Spring Jacket
                </a>
                <br />
                <small className='jss514'> by Dolce&Gabbana </small>
              </span>
            </td>
            <td className='MuiTableCell-root MuiTableCell-body jss461'>Red</td>
            <td className='MuiTableCell-root MuiTableCell-body jss461'>RM</td>
            <td className='MuiTableCell-root MuiTableCell-body jss461'>
              <span>
                <small className='jss516'>$</small>
                568
              </span>
            </td>

            <td className='MuiTableCell-root MuiTableCell-body jss461 jss515 jss517'>
              <span>
                1
                <div className='jss501'>
                  <button className='MuiButtonBase-root MuiButton-root MuiButton-text jss101 jss125 jss104 jss126 jss502'>
                    <span className='MuiButton-label'>
                      <svg
                        className='MuiSvgIcon-root jss509'
                        focusable='false'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                      >
                        <path d='M19 13H5v-2h14v2z'> </path>
                      </svg>
                    </span>
                  </button>
                  <button className='MuiButtonBase-root MuiButton-root MuiButton-text jss91 jss115 jss94 jss116 jss202'>
                    <span className='MuiButton-label'></span>
                  </button>
                </div>
                568
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
