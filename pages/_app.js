import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  console.log(Component())
  return <Component {...pageProps} />
}

export default MyApp
