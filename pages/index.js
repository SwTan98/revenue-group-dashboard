import React, { useState } from "react";
import Head from "next/head";
import { Form, Group } from "components";
import { Container } from "components/common";
import styles from "./Home.module.scss";

export default function Home() {
  const [groups, setGroups] = useState([]);

  const addGroup = (group) => {
    setGroups((current) => [...current, group]);
  };

  const deleteGroup = (index) => () => {
    setGroups((current) => {
      current.splice(index, 1);
      return [...current];
    });
  };

  const deleteRow = (groupIndex, rowIndex) => () => {
    if (groups[groupIndex].rules.length <= 1) return;
    setGroups((current) => {
      current[groupIndex].rules.splice(rowIndex, 1);
      return [...current];
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Revenue Group Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.left}>
        <Form onSubmit={addGroup} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.h1}>Browse Revenue Groups</h1>
        {groups.length ? (
          groups.map((group, index) => (
            <Group
              key={`group-${index}`}
              data={group}
              index={index}
              onDeleteGroup={deleteGroup}
              onDeleteRow={deleteRow}
            />
          ))
        ) : (
          <Container className={styles.empty}>No groups yet...</Container>
        )}
      </div>
    </div>
  );
}
