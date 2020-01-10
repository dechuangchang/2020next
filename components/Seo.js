import Head from 'next/head'

export default (...{ title = '漫画', keywords = '漫画', description = '免费漫画|漫画' }) => {

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link rel="Icon" href="./favicon.ico" type="image/x-icon" />
    </Head>
  )
}