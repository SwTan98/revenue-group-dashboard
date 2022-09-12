import React, { useState, useEffect } from "react";
import Image from "next/image";
import cx from "classnames";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import styles from "./Table.module.scss";

const Table = ({ id, columns, data, maxWidth, maxHeight, className }) => {
  const [tableId] = useState(id ?? uuidv4());
  const [sortKey, setSortKey] = useState();
  const [ascending, setAscending] = useState(true);
  if (!columns.length) return null;

  const onClickSort = (index) => () => {
    const key = columns[index].id;
    if (sortKey === key) {
      setAscending((current) => !current);
      return;
    }
    setSortKey(key);
    setAscending(true);
  };

  const sort = () => {
    if (!sortKey) return data;
    return data.sort((a, b) => {
      const order = a[sortKey] < b[sortKey] ? -1 : 1;
      if (ascending) return order;
      return order * -1;
    });
  };

  return (
    <div
      className={cx(styles.tableWrapper, className)}
      style={{ maxWidth, maxHeight }}
    >
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            {columns.map((column, index) => (
              <th
                className={styles.cell}
                key={`table-${tableId}-head-${index}`}
              >
                <span
                  className={styles.titleWrapper}
                  id={`table-${tableId}-head-${index}`}
                  onClick={onClickSort(index)}
                >
                  {column.label}
                  {column.sortable && (
                    <Image
                      src="/icons/unfold_more.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.body}>
          {sort().map((row, rowIndex) => (
            <tr className={styles.row} key={`table-${tableId}-row-${rowIndex}`}>
              {columns.map(({ id: columnId }, columnIndex) => (
                <td
                  className={styles.cell}
                  key={`table-${tableId}-row-${rowIndex}-column-${columnIndex}`}
                >
                  {row[columnId]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  id: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
    })
  ),
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
};

Table.defaultProps = {
  id: undefined,
  columns: [],
  maxWidth: undefined,
  maxHeight: undefined,
  className: undefined,
};

export default Table;
