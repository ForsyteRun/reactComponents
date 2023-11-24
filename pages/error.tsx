import Error from 'next/error'
import { useRouter } from 'next/router'
import { useCallback } from 'react'

import s from './../styles/Error.module.css'

const ErrorPage = () => {
  const router = useRouter()

  const handleError = useCallback(() => {
    router.back()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={s.container}>
      <Error withDarkMode={false} statusCode={666} title='Custom error occurred' />
      <button type="button" onClick={handleError}>GO BACK</button>
    </div>
  )
}

export default ErrorPage