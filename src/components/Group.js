import React, { useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Container, IconButton, Label, Table } from "components/common";
import styles from "./Group.module.scss";

const Group = ({
  data: { name, description, special, rules },
  index,
  onDeleteGroup,
  onDeleteRow,
}) => {
  const [parameterCount, setParameterCount] = useState(0);
  const [columns, setColumns] = useState([]);
  const [flattenedRules, setFlattenedRules] = useState([]);
  const [highestIndex, setHighestIndex] = useState(0); //index with most columns

  const flatten = useCallback(() => {
    setFlattenedRules(
      rules.map(({ parameters, revenue, ...rest }, ruleIndex) => ({
        rule: ruleIndex + 1,
        ...rest,
        ...parameters.reduce((obj, parameter, parameterIndex) => {
          obj[`parameter-${parameterIndex + 1}`] = parameter;
          if (parameterIndex > parameterCount) {
            setParameterCount(parameterIndex);
            setHighestIndex(ruleIndex);
          }
          return { ...obj };
        }, {}),
        revenue: `${revenue}%`,
        action: (
          <IconButton
            className={styles.delete}
            icon="/icons/delete.svg"
            onClick={onDeleteRow(index, ruleIndex)}
          />
        ),
      }))
    );
  }, [rules, parameterCount, index, onDeleteRow]);

  useEffect(() => {
    flatten();
  }, [flatten]);

  useEffect(() => {
    setColumns([
      ...(flattenedRules[highestIndex]
        ? Object.keys(flattenedRules[highestIndex]).map((key) => ({
            id: key,
            label: key.replace("-", " "),
            sortable: key !== "action",
          }))
        : []),
    ]);
  }, [flattenedRules, highestIndex]);

  return (
    <Container className={styles.container}>
      <div className={styles.heading}>
        <div className={styles.content}>
          <div className={styles.title}>
            <h2 className={styles.h2}>{name}</h2>
            {special && <Label text="Special Group" />}
          </div>
          {description && <p>{description}</p>}
        </div>
        <IconButton
          variant="secondary"
          icon="/icons/delete.svg"
          onClick={onDeleteGroup(index)}
        />
      </div>
      <div className={styles.table}>
        <Table maxHeight={200} columns={columns} data={flattenedRules} />
      </div>
    </Container>
  );
};

Group.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    special: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
    rules: PropTypes.arrayOf(
      PropTypes.shape({
        field: PropTypes.string,
        operator: PropTypes.string,
        parameters: PropTypes.arrayOf(PropTypes.string),
        revenue: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onDeleteGroup: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

Group.defaultProps = {
  onDeleteGroup: () => {},
  onDeleteRow: () => {},
};

export default Group;
