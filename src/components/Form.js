import React, { useState } from "react";
import {
  Button,
  Container,
  Checkbox,
  IconButton,
  Select,
  TextArea,
  TextField,
} from "components/common";
import PropTypes from "prop-types";
import styles from "./Form.module.scss";

const Form = ({ onSubmit }) => {
  const DefaultsEnum = {
    name: "",
    description: "",
    special: false,
    rules: [{ parameters: [""], revenue: "", field: "", operator: "" }],
    rule: { parameters: [""], revenue: "", field: "", operator: "" },
  };
  const [name, setName] = useState(DefaultsEnum.name);
  const [description, setDescription] = useState(DefaultsEnum.description);
  const [special, setSpecial] = useState(DefaultsEnum.special);
  const [rules, setRules] = useState(DefaultsEnum.rules);

  const onReset = () => {
    setName(DefaultsEnum.name);
    setDescription(DefaultsEnum.description);
    setSpecial(DefaultsEnum.special);
    setRules(DefaultsEnum.rules);
  };

  const handleSubmit = (e) => {
    onSubmit({ name, description, special, rules });
    onReset();
    e.preventDefault();
  };

  const addRule = () => setRules((current) => [...current, DefaultsEnum.rule]);
  const removeRule = (index) => () => {
    if (rules.length <= 1) return;
    setRules((current) => {
      current.splice(index, 1);
      return [...current];
    });
  };

  const addParameter = (index) => () => {
    setRules((current) => {
      current[index].parameters = [...(current[index].parameters || []), ""];
      return [...current];
    });
  };

  const removeParameter = (ruleIndex, parameterIndex) => () => {
    if (parameterIndex === 0) return;
    setRules((current) => {
      current[ruleIndex].parameters.splice(parameterIndex, 1);
      return [...current];
    });
  };

  const setParameter = (ruleIndex, parameterIndex) => (e) => {
    setRules((current) => {
      current[ruleIndex].parameters[parameterIndex] = e.target.value;
      return [...current];
    });
  };

  const updateRule = (ruleIndex, key, value) => {
    setRules((current) => {
      current[ruleIndex][key] = value;
      return [...current];
    });
  };

  const fieldOptions = [
    {
      label: "Select field",
      value: "",
    },
    {
      label: "aff_sub_1",
      value: "aff_sub_1",
    },
    {
      label: "aff_sub_2",
      value: "aff_sub_2",
    },
    {
      label: "aff_sub_3",
      value: "aff_sub_3",
    },
    {
      label: "aff_sub_4",
      value: "aff_sub_4",
    },
  ];

  const operatorOptions = [
    {
      label: "Select operator",
      value: "",
    },
    {
      label: "is",
      value: "is",
    },
    {
      label: "is not",
      value: "is not",
    },
    {
      label: "starts with",
      value: "starts with",
    },
    {
      label: "ends with",
      value: "ends with",
    },
    {
      label: "contains",
      value: "contains",
    },
    {
      label: "doesn't contain",
      value: "doesn't contain",
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      <Container className={styles.container}>
        <h1 className={styles.h1}>Create Revenue Group</h1>
        <TextField
          id="group-name"
          label="Group Name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <TextArea
          id="group-description"
          label="Group Description"
          placeholder="Add description"
          maxLength={200}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Checkbox
          id="special-group"
          label="Special group"
          value="special-group"
          checked={special}
          onChange={(e) => setSpecial(e.target.checked)}
        />
        <div className={styles.justifyBetween}>
          <h2 className={styles.h2}>Rules</h2>
          <Button
            variant="secondary"
            rounded
            label="Add"
            icon="/icons/add.svg"
            onClick={addRule}
          />
        </div>
        {rules.map((rule, ruleIndex) => (
          <Container key={`rule-${ruleIndex}`} variant="secondary">
            <div className={styles.justifyBetween}>
              <h3 className={styles.h3}>{`Rule ${ruleIndex + 1}`}</h3>
              <IconButton
                icon="/icons/close.svg"
                onClick={removeRule(ruleIndex)}
              />
            </div>
            <div className={styles.rules}>
              <span>If</span>
              <Select
                id={`rule-${ruleIndex}-field`}
                options={fieldOptions}
                className={styles.grow}
                onChange={(e) => updateRule(ruleIndex, "field", e.target.value)}
                value={rule.field}
                required
              />
              <Select
                id={`rule-${ruleIndex}-operator`}
                options={operatorOptions}
                className={styles.grow}
                onChange={(e) =>
                  updateRule(ruleIndex, "operator", e.target.value)
                }
                value={rule.operator}
                required
              />
              <div className={styles.parameters}>
                {rule.parameters.map((parameter, parameterIndex) => (
                  <div
                    className={styles.justifyBetween}
                    key={`container-rule-${ruleIndex}-parameter-${parameterIndex}`}
                  >
                    <TextField
                      id={`rule-${ruleIndex}-parameter-${parameterIndex}`}
                      className={styles.grow}
                      placeholder="Enter parameter"
                      onChange={setParameter(ruleIndex, parameterIndex)}
                      value={parameter}
                      required
                    />
                    <IconButton
                      icon={
                        parameterIndex
                          ? "/icons/remove_circle_outline.svg"
                          : "/icons/add_circle_outline.svg"
                      }
                      onClick={
                        parameterIndex
                          ? removeParameter(ruleIndex, parameterIndex)
                          : addParameter(ruleIndex)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.revenue}>
              <span>then revenue is</span>
              <TextField
                id={`rule-${ruleIndex}-revenue`}
                prepend="%"
                placeholder="Enter amount"
                type="number"
                value={rule.revenue}
                onChange={(e) =>
                  updateRule(ruleIndex, "revenue", e.target.value)
                }
                required
              />
            </div>
          </Container>
        ))}
        <div className={styles.justifyEnd}>
          <Button variant="tertiary" label="Reset" onClick={onReset} />
          <Button type="submit" variant="primary" label="Submit" />
        </div>
      </Container>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  onSubmit: () => {},
};

export default Form;
