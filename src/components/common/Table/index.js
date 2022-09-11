import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

import styles from "./Table.module.scss";

const Table = ({ id, columns, data, maxWidth, maxHeight }) => {
  if (!columns.length) return null;
  return (
    <div className={styles.tableWrapper} style={{ maxWidth, maxHeight }}>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            {columns.map((column) => (
              <th className={styles.cell} key={column.id}>
                <span className={styles.titleWrapper}>
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
          {data.map((row, rowIndex) => (
            <tr className={styles.row} key={`table-${id}-row-${rowIndex}`}>
              {columns.map(({ id: columnId }, columnIndex) => (
                <td
                  className={styles.cell}
                  key={`table-${id}-row-${rowIndex}-column-${columnIndex}`}
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
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
    })
  ),
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

Table.defaultProps = {
  columns: [],
  maxWidth: undefined,
  maxHeight: undefined,
};

export default Table;
