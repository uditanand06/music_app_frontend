import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Main from  '../components/main'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
    
  )
}
