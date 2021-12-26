import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import navButtons from "../config/buttons"

import styles from '../styles/Layout.module.scss'

const Layout = props => (
  <div className={styles.Layout}>
    <Head>
      <title>MAGAZINE</title>
    </Head>

    <Header />
    <div className={styles.Content}>
      {props.children}
    </div>
    <NavBar navButtons={navButtons}/>
  </div>
);

export default Layout;