import React from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination, } from "react-table";
import { Button, Table } from 'react-bootstrap';


export const COLUMN:any = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "wd-15p border-bottom-0 ",
  }
];

export const RESDATATABLE:any = [
  {
    FNAME: "Bella",
    LNAME: "Chloe",
    POSITION: "System Developer",
    START: "2018/03/12",
    SALARY: "$654,765",
    MAIL: "b.Chloe@datatables.net",
  },
  {
    FNAME: "Donna",
    LNAME: "Bond",
    POSITION: "Account Manager",
    START: "2012/02/21",
    SALARY: "$543,654",
    MAIL: "d.bond@datatables.net",
  },
  {
    FNAME: "Harry",
    LNAME: "Carr",
    POSITION: "Technical Manager",
    START: "20011/02/87",
    SALARY: "$86,000",
    MAIL: "h.carr@datatables.net",
  },
  {
    FNAME: "Lucas",
    LNAME: "Dyer",
    POSITION: "Javascript Developer",
    START: "2014/08/23",
    SALARY: "$456,123",
    MAIL: "l.dyer@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Hill",
    POSITION: "Sales Manager",
    START: "2010/7/14",
    SALARY: "$432,230",
    MAIL: "k.hill@datatables.net",
  },
  {
    FNAME: "Dominic",
    LNAME: "Hudson",
    POSITION: "Sales Assistant",
    START: "2015/10/16",
    SALARY: "$654,300",
    MAIL: "d.hudson@datatables.net",
  },
  {
    FNAME: "Herrod",
    LNAME: "Chandler",
    POSITION: "Integration Specialist",
    START: "2012/08/06",
    SALARY: "$137,500",
    MAIL: "h.chandler@datatables.net",
  },
  {
    FNAME: "Jonathan",
    LNAME: "Ince",
    POSITION: "junior Manager",
    START: "2012/11/23",
    SALARY: "$345,789",
    MAIL: "j.ince@datatables.net",
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
  {
    FNAME: "Suki",
    LNAME: "Burks",
    POSITION: "Developer",
    START: "2010/11/45",
    SALARY: "$678,890",
    MAIL: "s.burks@datatables.net",
  },
  {
    FNAME: "Prescott",
    LNAME: "Bartlett",
    POSITION: "Technical Author",
    START: "2014/12/25",
    SALARY: "$789,100",
    MAIL: "p.bartlett@datatables.net",
  },
  {
    FNAME: "Gavin",
    LNAME: "Cortez",
    POSITION: "Team Leader",
    START: "2015/1/19",
    SALARY: "$345,890",
    MAIL: "g.cortez@datatables.net",
  },
  {
    FNAME: "Martena",
    LNAME: "Mccray",
    POSITION: "Post-Sales support",
    START: "2011/03/09",
    SALARY: "$324,050",
    MAIL: "m.mccray@datatables.net",
  },
  {
    FNAME: "Unity",
    LNAME: "Butler",
    POSITION: "Marketing Designer",
    START: "2014/7/28",
    SALARY: "$34,983",
    MAIL: "u.butler@datatables.net",
  },
  {
    FNAME: "Howard",
    LNAME: "Hatfield",
    POSITION: "Office Manager",
    START: "2013/8/19",
    SALARY: "$98,000",
    MAIL: "h.hatfield@datatables.net",
  },
  {
    FNAME: "Hope",
    LNAME: "Fuentes",
    POSITION: "Secretary",
    START: "2015/07/28",
    SALARY: "$78,879",
    MAIL: "h.fuentes@datatables.net",
  },
  {
    FNAME: "Vivian",
    LNAME: "Harrell",
    POSITION: "Financial Controller",
    START: "2010/02/14",
    SALARY: "$452,500",
    MAIL: "v.harrell@datatables.net",
  },
  {
    FNAME: "Timothy",
    LNAME: "Mooney",
    POSITION: "Office Manager",
    START: "20016/12/11",
    SALARY: "$136,200",
    MAIL: "t.mooney@datatables.net",
  },
  {
    FNAME: "Jackson",
    LNAME: "Bradshaw",
    POSITION: "Director",
    START: "2011/09/26",
    SALARY: "$645,750",
    MAIL: "j.bradshaw@datatables.net",
  },
  {
    FNAME: "Olivia",
    LNAME: "Liang",
    POSITION: "Support Engineer",
    START: "2014/02/03",
    SALARY: "$234,500",
    MAIL: "o.liang@datatables.net",
  },
  {
    FNAME: "Bruno",
    LNAME: "Nash",
    POSITION: "Software Engineer",
    START: "2015/05/03",
    SALARY: "$163,500",
    MAIL: "b.nash@datatables.net",
  },
  {
    FNAME: "Sakura",
    LNAME: "Yamamoto",
    POSITION: "Support Engineer",
    START: "2010/08/19",
    SALARY: "$139,575",
    MAIL: "s.yamamoto@datatables.net",
  },
  {
    FNAME: "Thor",
    LNAME: "Walton",
    POSITION: "Developer",
    START: "2012/08/11",
    SALARY: "$98,540",
    MAIL: "t.walton@datatables.net",
  },
  {
    FNAME: "Finn",
    LNAME: "Camacho",
    POSITION: "Support Engineer",
    START: "2016/07/07",
    SALARY: "$87,500",
    MAIL: "f.camacho@datatables.net",
  },
  {
    FNAME: "Serge",
    LNAME: "Baldwin",
    POSITION: "Data Coordinator",
    START: "2017/04/09",
    SALARY: "$138,575",
    MAIL: "s.baldwin@datatables.net",
  },
  {
    FNAME: "Zenaida",
    LNAME: "Frank",
    POSITION: "Software Engineer",
    START: "2018/01/04",
    SALARY: "$125,250",
    MAIL: "z.frank@datatables.net",
  },
  {
    FNAME: "Zorita",
    LNAME: "Serrano",
    POSITION: "Software Engineer",
    START: "2017/06/01",
    SALARY: "$115,000",
    MAIL: "z.serrano@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Acosta",
    POSITION: "Junior Javascript Developer",
    START: "2017/02/01",
    SALARY: "$75,650",
    MAIL: "j.acosta@datatables.net",
  },

];

export const ResponsiveDataTable = () => {

  const tableInstance:any = useTable(
    {
      columns: COLUMN,
      data: RESDATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="e-table pb-5">
        <div className="d-flex">
          <select
            className="mb-4 border me-1 text-dark bg-transparent"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalResFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className='table-responsive'>  
        <Table
          {...getTableProps()}
          className="border-top-0  table-bordered text-nowrap border-bottom"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={column.className}
                  >
                    <span className="tabletitle">{column.render("Header")}</span>
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <i className="fa fa-angle-down"></i>
                        ) : (
                          <i className="fa fa-angle-up"></i>
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="text-center" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
        <div className="d-block d-sm-flex mt-4 ">
          <span className="">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="ms-sm-auto ">
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2 d-sm-inline d-block"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {" Previous "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" << "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" < "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" > "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" >> "}
            </Button>
            <Button
              variant=""
              className="btn-default tablebutton me-2 my-2"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Next "}
            </Button>
          </span>
        </div>
      </div>

    </>
  );
};
const GlobalResFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};