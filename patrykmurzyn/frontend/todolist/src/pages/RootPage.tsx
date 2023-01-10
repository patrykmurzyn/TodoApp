import React, {FC} from 'react';
import {Link, Outlet} from 'react-router-dom';
import {AppShell, createStyles, Header, Navbar, Title,} from '@mantine/core';

interface PageRootProps {}

const useStyles = createStyles((theme) => ({
  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

export const RootPage: FC<PageRootProps> = ({}) => {
 const { classes } = useStyles();
  return (
      <AppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 150 }} height={500} p="xs">
              <Link to="/todo" className={classes.link}>
                List
              </Link>
              <Link to={'/todo/new'} className={classes.link}>
                Add
              </Link>
            </Navbar>
          }
          header={
            <Header height={60} p="xs">
              <Title order={2}>Awesome Todo List</Title>
            </Header>
          }
          styles={(theme) => ({
            main: {
              backgroundColor: theme.colors.gray[0],
            },
          })}
      >
        <Outlet />
      </AppShell>
  );
};
